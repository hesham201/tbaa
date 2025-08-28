import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
interface BookingTotalsInput {
  welcomeDinnerPlaces: string;
  themedDinnerPlaces: string;
  galaDinnerPlaces: string;
  accommodationNights: string;
  accommodationOccupancy: "single" | "double" | "twin" | "";
}
/** Mirror the client calculator BUT trust only server */
function toInt(s?: string) {
  return s ? parseInt(s, 10) || 0 : 0;
}
function computeNights(accommodationNights: string) {
  if (!accommodationNights) return 0;
  if (accommodationNights.includes("(2 nights)")) return 2;
  if (accommodationNights.includes("(3 nights)")) return 3;
  if (accommodationNights.trim() === "0") return 0;
  return 0;
}
function calcTotalPounds(v: BookingTotalsInput) {
  const welcome = toInt(v.welcomeDinnerPlaces) * 100;
  const themed = toInt(v.themedDinnerPlaces) * 125;
  const gala = toInt(v.galaDinnerPlaces) * 115;

  const nights = computeNights(v.accommodationNights);
  const nightly =
    v.accommodationOccupancy === "single"
      ? 205
      : v.accommodationOccupancy
      ? 215
      : 0;

  return welcome + themed + gala + nights * nightly;
}

export async function POST(req: Request) {
  try {
    const values = await req.json(); // your Formik values
    const amountPounds = calcTotalPounds(values);

    // Always validate business rules (e.g., minimums, category perks) here too.

    const amountInMinor = Math.round(amountPounds * 100); // GBP -> pence

    const intent = await stripe.paymentIntents.create({
      amount: amountInMinor,
      currency: "gbp",
      automatic_payment_methods: { enabled: true },
      receipt_email: values?.email || undefined,
      metadata: {
        bookingCategory: values?.bookingCategory || "",
        email: values?.email || "",
      },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (err: unknown) {
    // Optional: Stripe-specific guard
    if (err && typeof err === "object" && "type" in err && "message" in err) {
      const se = err as Stripe.errors.StripeError;
      return NextResponse.json(
        { error: `${se.type}: ${se.message}` },
        { status: 400 }
      );
    }

    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
