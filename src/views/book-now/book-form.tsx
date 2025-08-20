"use client";

import React, { useMemo, useState } from "react";
import { Formik, Form, useField, FormikHelpers } from "formik";
import * as Yup from "yup";
import Container from "@/components/container";

/* --------------------------- Types & constants --------------------------- */

type StepKey =
  | "yourDetails"
  | "bookingDetails"
  | "dinnerBooking"
  | "accommodation"
  | "billingDetails";

const STEP_ORDER: { key: StepKey; label: string }[] = [
  { key: "yourDetails", label: "YOUR DETAILS" },
  { key: "bookingDetails", label: "BOOKING DETAILS" },
  { key: "dinnerBooking", label: "DINNER BOOKING" },
  { key: "accommodation", label: "ACCOMMODATION" },
  { key: "billingDetails", label: "BILLING DETAILS" },
];
const STEP_FIELDS: Record<StepKey, (keyof FormValues)[]> = {
  yourDetails: [
    "bookingCategory",
    "title",
    "firstName",
    "surname",
    "gdcNumber",
    "address1",
    "address2",
    "city",
    "postcode",
    "country",
    "telephone",
    "email",
  ],
  bookingDetails: [
    "conferenceBooking",
    "notAttendingNote",
    "dietaryRequirements",
  ],
  dinnerBooking: [
    "additionalGuests",
    "welcomeDinnerPlaces",
    "themedDinnerPlaces",
    "galaDinnerPlaces",
    "dinnerDietaryRequirements",
  ],
  accommodation: [
    "accommodationDates",
    "accommodationRoomType",
    "accommodationOccupancy",
    "accommodationNights",
  ],
  billingDetails: ["billingNameOnCard", "billingAddress", "billingCardNumber"],
};
type FormValues = {
  // Step 1
  bookingCategory: string;
  title: string;
  firstName: string;
  surname: string;
  gdcNumber: string;
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  country: string;
  telephone: string;
  email: string;

  // Step 2
  conferenceBooking: string;
  notAttendingNote: string;
  dietaryRequirements: string;

  // Step 3
  additionalGuests: "yes" | "no" | "";
  welcomeDinnerPlaces: string;
  themedDinnerPlaces: string;
  galaDinnerPlaces: string;
  dinnerDietaryRequirements: string;

  // Step 4
  accommodationDates: string[];
  accommodationRoomType: "standard" | "upgraded" | "";
  accommodationOccupancy: "single" | "double" | "twin" | "";
  accommodationNights: string;

  // Step 5
  billingNameOnCard: string;
  billingAddress: string;
  billingCardNumber: string;
};

const initialValues: FormValues = {
  bookingCategory: "",
  title: "",
  firstName: "",
  surname: "",
  gdcNumber: "",
  address1: "",
  address2: "",
  city: "",
  postcode: "",
  country: "",
  telephone: "",
  email: "",

  // Step 2
  conferenceBooking: "",
  notAttendingNote: "",
  dietaryRequirements: "",

  // Step 3
  additionalGuests: "",
  welcomeDinnerPlaces: "",
  themedDinnerPlaces: "",
  galaDinnerPlaces: "",
  dinnerDietaryRequirements: "",

  // Step 4
  accommodationDates: [],
  accommodationRoomType: "",
  accommodationOccupancy: "",
  accommodationNights: "",

  // Step 5
  billingNameOnCard: "",
  billingAddress: "",
  billingCardNumber: "",
};

// Step 1 schema
const yourDetailsSchema = Yup.object({
  bookingCategory: Yup.string().required("Please select a category."),
  title: Yup.string().required("Please choose a title."),
  firstName: Yup.string().trim().required("Firstname is required."),
  surname: Yup.string().trim().required("Surname is required."),
  gdcNumber: Yup.string().trim().required("GDC Number is required."),
  address1: Yup.string().trim().required("Address Line 1 is required."),
  address2: Yup.string().trim().optional(),
  city: Yup.string().trim().required("City / Town is required."),
  postcode: Yup.string().trim().required("Postcode is required."),
  country: Yup.string().trim().required("Country is required."),
  telephone: Yup.string().trim().required("Telephone is required."),
  email: Yup.string()
    .trim()
    .email("Enter a valid email.")
    .required("Email is required."),
});

// Step 2 schema
const bookingDetailsSchema = Yup.object({
  conferenceBooking: Yup.string().required(
    "Please select a conference booking option."
  ),
  notAttendingNote: Yup.string().trim().optional(),
  dietaryRequirements: Yup.string().trim().optional(),
});

// Step 3 schema
const dinnerBookingSchema = Yup.object({
  additionalGuests: Yup.mixed<"yes" | "no">()
    .oneOf(["yes", "no"], "Please choose yes or no.")
    .required("Please choose yes or no."),
  welcomeDinnerPlaces: Yup.string().optional(),
  themedDinnerPlaces: Yup.string().optional(),
  galaDinnerPlaces: Yup.string().optional(),
  dinnerDietaryRequirements: Yup.string().trim().optional(),
});

const accommodationSchema = Yup.object({
  accommodationDates: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one date.")
    .required("Please select at least one date."),
  accommodationRoomType: Yup.mixed<"standard" | "upgraded">()
    .oneOf(["standard", "upgraded"], "Please choose a room type.")
    .required("Please choose a room type."),
  accommodationOccupancy: Yup.mixed<"single" | "double" | "twin">()
    .oneOf(["single", "double", "twin"], "Please choose an occupancy.")
    .required("Please choose an occupancy."),
  accommodationNights: Yup.string().when("accommodationOccupancy", {
    is: (v: string) => !!v && v.length > 0,
    then: (s) => s.required("Please select number of nights."),
    otherwise: (s) => s.optional(),
  }),
});

// Step 5 schema (only name + address required)
const billingDetailsSchema = Yup.object({
  billingNameOnCard: Yup.string().trim().required("Name on card is required."),
  billingAddress: Yup.string().trim().required("Billing address is required."),
  billingCardNumber: Yup.string().trim().optional(), // mock input – no real processing
});

function schemaFor(step: StepKey) {
  switch (step) {
    case "yourDetails":
      return yourDetailsSchema;
    case "bookingDetails":
      return bookingDetailsSchema;
    case "dinnerBooking":
      return dinnerBookingSchema;
    case "accommodation":
      return accommodationSchema;
    case "billingDetails":
      return billingDetailsSchema;
  }
}

/* --------------------------- Reusable fields --------------------------- */

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-1 block text-sm font-semibold text-gray-800">
      {children} {required && <span className="text-red-600">*</span>}
    </label>
  );
}

function TextField({
  label,
  name,
  type = "text",
  requiredMark,
  placeholder,
}: {
  label: string;
  name: keyof FormValues;
  type?: string;
  requiredMark?: boolean;
  placeholder?: string;
}) {
  const [field, meta] = useField<string>(name as string);
  const hasError = meta.touched && !!meta.error;

  return (
    <div>
      <FieldLabel required={requiredMark}>{label}</FieldLabel>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={[
          "w-full rounded-md border px-3 py-2 text-sm text-gray-900 outline-none",
          hasError ? "border-red-500" : "border-gray-300 focus:border-blue-500",
        ].join(" ")}
      />
      {hasError && <p className="mt-1 text-xs text-red-600">{meta.error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  requiredMark,
  children,
}: {
  label: string;
  name: keyof FormValues;
  requiredMark?: boolean;
  children: React.ReactNode;
}) {
  const [field, meta] = useField<string>(name as string);
  const hasError = meta.touched && !!meta.error;

  return (
    <div>
      {label !== "" && <FieldLabel required={requiredMark}>{label}</FieldLabel>}
      <select
        {...field}
        className={[
          "w-full appearance-none rounded-md border bg-white px-3 py-2 text-sm text-gray-900 outline-none",
          hasError ? "border-red-500" : "border-gray-300 focus:border-blue-500",
        ].join(" ")}>
        {children}
      </select>
      {hasError && <p className="mt-1 text-xs text-red-600">{meta.error}</p>}
    </div>
  );
}

function TextAreaField({
  label,
  name,
  requiredMark,
  placeholder,
  rows = 3,
}: {
  label: string;
  name: keyof FormValues;
  requiredMark?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  const [field, meta] = useField<string>(name as string);
  const hasError = meta.touched && !!meta.error;

  return (
    <div>
      <FieldLabel required={requiredMark}>{label}</FieldLabel>
      <textarea
        {...field}
        rows={rows}
        placeholder={placeholder}
        className={[
          "w-full rounded-md border px-3 py-2 text-sm text-gray-900 outline-none",
          hasError ? "border-red-500" : "border-gray-300 focus:border-blue-500",
        ].join(" ")}
      />
      {hasError && <p className="mt-1 text-xs text-red-600">{meta.error}</p>}
    </div>
  );
}

function RadioField({
  name,
  value,
  label,
}: {
  name: keyof FormValues;
  value: string;
  label: string;
}) {
  const [field] = useField({ name: name as string, type: "radio", value });
  return (
    <label className="mr-6 inline-flex items-center gap-2 text-sm text-gray-800">
      <input
        type="radio"
        {...field}
        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      {label}
    </label>
  );
}

function CheckboxField({
  name,
  value,
  label,
}: {
  name: keyof FormValues;
  value: string;
  label: string;
}) {
  const [field] = useField({ name: name as string, type: "checkbox", value });
  return (
    <label className="mr-6 inline-flex items-center gap-2 text-sm text-gray-800">
      <input
        type="checkbox"
        {...field}
        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      {label}
    </label>
  );
}

export default function BaadBookingForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const current = STEP_ORDER[stepIndex];
  const validationSchema = useMemo(() => schemaFor(current.key), [current.key]);

  const goPrev = () => setStepIndex((i) => Math.max(0, i - 1));
  const goNext = () =>
    setStepIndex((i) => Math.min(STEP_ORDER.length - 1, i + 1));

  const tryNext = async (
    validateForm: FormikHelpers<FormValues>["validateForm"],
    setTouched: FormikHelpers<FormValues>["setTouched"]
  ) => {
    const allErrors = await validateForm();
    const currentKeys = new Set(STEP_FIELDS[current.key]);
    const stepErrors = Object.fromEntries(
      Object.entries(allErrors).filter(([k]) =>
        currentKeys.has(k as keyof FormValues)
      )
    );

    if (Object.keys(stepErrors).length === 0) {
      goNext();
    } else {
      const touchedMap = Array.from(currentKeys).reduce<
        Record<string, boolean>
      >((acc, key) => {
        if (stepErrors[key as string]) acc[key as string] = true;
        return acc;
      }, {});
      setTouched(touchedMap, false);
    }
  };
  const calcTotal = (v: FormValues) => {
    const toInt = (s: string) => (s ? parseInt(s, 10) || 0 : 0);

    const welcome = toInt(v.welcomeDinnerPlaces) * 100;
    const themed = toInt(v.themedDinnerPlaces) * 125;
    const gala = toInt(v.galaDinnerPlaces) * 115;
    let nights = 0;
    if (v.accommodationNights.includes("(2 nights)")) nights = 2;
    else if (v.accommodationNights.includes("(3 nights)")) nights = 3;
    else if (v.accommodationNights === "0") nights = 0;

    const nightly =
      v.accommodationOccupancy === "single"
        ? 205
        : v.accommodationOccupancy
        ? 215
        : 0;

    const accom = nights * nightly;

    return welcome + themed + gala + accom;
  };

  return (
    <div className="py-10">
      <Container>
        {/* Stepper */}
        <div className="mb-6 flex justify-center flex-wrap items-start gap-4">
          {STEP_ORDER.map((s, idx) => {
            const active = idx === stepIndex;
            const done = idx < stepIndex;
            return (
              <div
                key={s.key}
                className="flex flex-col items-center text-center gap-2">
                <div
                  className={[
                    "grid h-10 w-10 place-items-center rounded-md text-sm font-semibold",
                    active
                      ? "bg-midnight text-white"
                      : done
                      ? "bg-transparent text-black border-midnight border-2"
                      : "bg-gray-200 text-gray-700",
                  ].join(" ")}>
                  {idx + 1}
                </div>
                <div
                  className={[
                    "text-xs font-semibold uppercase tracking-wide",
                    active ? "text-midnight" : "text-gray-500",
                  ].join(" ")}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Step Title */}
        <h3 className="mb-4 text-lg font-semibold">
          {current.label.charAt(0) + current.label.slice(1).toLowerCase()}
        </h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur
          validateOnChange={false}
          onSubmit={(values) => {
            console.log("SUBMIT", values);
            alert("Form submitted (mock). Hook up your API.");
          }}>
          {({
            validateForm,
            setTouched,
            isSubmitting,
            values,
            errors,
            touched,
          }) => (
            <Form className="space-y-6">
              {/* ------------------------ Step 1 ------------------------ */}
              {current.key === "yourDetails" && (
                <div className="space-y-5">
                  <SelectField
                    label="Booking Category"
                    name="bookingCategory"
                    requiredMark>
                    <option value="">Select category…</option>
                    <option>Hononary Member</option>
                    <option>Life Member</option>
                    <option>Full Member</option>
                    <option>Associate Member</option>
                    <option>Non-Member</option>
                    <option>Non-Member (IFED)</option>
                    <option>Young BAAD</option>
                  </SelectField>

                  <p className="text-xs leading-relaxed text-gray-600">
                    Important: Day Rate, Price on Application. Please contact
                    Penny Sykes at The Conference Shop for more details. Please
                    email{" "}
                    <span className="font-semibold">
                      info@conferenceshop.com
                    </span>{" "}
                    or call Tel:{" "}
                    <span className="font-semibold">0345 873 6299</span>
                  </p>

                  <SelectField label="Title" name="title" requiredMark>
                    <option value="">Select title…</option>
                    <option>Dr</option>
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Miss</option>
                    <option>Mrs</option>
                    <option>Prof</option>
                  </SelectField>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <TextField
                      label="Firstname"
                      name="firstName"
                      requiredMark
                    />
                    <TextField label="Surname" name="surname" requiredMark />
                  </div>

                  <TextField label="GDC Number" name="gdcNumber" requiredMark />
                  <TextField
                    label="Address Line 1"
                    name="address1"
                    requiredMark
                  />
                  <TextField label="Address Line 2" name="address2" />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <TextField label="City / Town" name="city" requiredMark />
                    <TextField label="Postcode" name="postcode" requiredMark />
                  </div>

                  <TextField label="Country" name="country" requiredMark />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <TextField
                      label="Telephone"
                      name="telephone"
                      requiredMark
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      requiredMark
                    />
                  </div>
                </div>
              )}

              {/* ------------------------ Step 2 ------------------------ */}
              {current.key === "bookingDetails" && (
                <div className="space-y-6">
                  <div>
                    <FieldLabel required>Conference Booking</FieldLabel>
                    <div className="-mt-1 mb-2 text-xs italic text-gray-500">
                      {values.bookingCategory || "No category selected"}
                    </div>
                    <SelectField label="" name="conferenceBooking">
                      <option value="">Select An Option</option>
                      <option>Friday 30th & Saturday 31st</option>
                    </SelectField>
                  </div>

                  {values.bookingCategory === "Hononary Member" && (
                    <p className="text-sm leading-relaxed text-gray-700">
                      <span className="font-semibold">Important:</span> As an
                      Honorary BAAD member, All 3 Dinners have already been
                      included FREE of charge within your price for a single
                      person.
                    </p>
                  )}

                  <TextAreaField
                    label="If you aren’t attending either of the dinners please state below"
                    name="notAttendingNote"
                    rows={3}
                  />

                  <TextAreaField
                    label="Do you have any special dietary requirements?"
                    name="dietaryRequirements"
                    rows={3}
                  />
                </div>
              )}

              {/* ------------------------ Step 3 ------------------------ */}
              {current.key === "dinnerBooking" && (
                <div className="space-y-6">
                  <p className="text-base text-gray-800">
                    To book your place or any additional places please specify
                    below
                  </p>

                  {(values.bookingCategory === "Full Member" ||
                    values.bookingCategory === "Life Member" ||
                    values.bookingCategory === "Associate Member" ||
                    values.bookingCategory === "Young BAAD") && (
                    <p className="text-sm leading-relaxed text-gray-700">
                      <span className="font-semibold">Important:</span> If you
                      are a BAAD member / Associate Member / Young BAAD then
                      your themed gala dinner is included in the price.
                    </p>
                  )}

                  {values.bookingCategory === "Hononary Member" && (
                    <p className="text-sm leading-relaxed text-gray-700">
                      <span className="font-semibold">Important:</span> As an
                      Honorary BAAD member, All 3 Dinners have already been
                      included FREE of charge within your price for a single
                      person.
                    </p>
                  )}

                  <div>
                    <FieldLabel>Will there be additional guests?</FieldLabel>
                    <div className="mt-2">
                      <RadioField
                        name="additionalGuests"
                        value="yes"
                        label="yes"
                      />
                      <RadioField
                        name="additionalGuests"
                        value="no"
                        label="no"
                      />
                    </div>
                    {touched.additionalGuests && errors.additionalGuests && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.additionalGuests as string}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="mb-2 text-sm font-semibold text-gray-800">
                      Welcome Dinner (Thursday 29th) Number of Places: £100.00
                      each
                    </div>
                    <SelectField label="" name="welcomeDinnerPlaces">
                      <option value="">Select Number of Places</option>
                      {Array.from({ length: 11 }, (_, n) => n.toString()).map(
                        (n) => (
                          <option key={"w" + n} value={n}>
                            {n}
                          </option>
                        )
                      )}
                    </SelectField>
                  </div>

                  <div>
                    <div className="mb-2 text-sm font-semibold text-gray-800">
                      Annual Themed Dinner (Friday 30th) Number of Places:
                      £125.00 each
                    </div>
                    <SelectField label="" name="themedDinnerPlaces">
                      <option value="">Select Number of Places</option>
                      {Array.from({ length: 11 }, (_, n) => n.toString()).map(
                        (n) => (
                          <option key={"t" + n} value={n}>
                            {n}
                          </option>
                        )
                      )}
                    </SelectField>
                  </div>

                  <div>
                    <div className="mb-2 text-sm font-semibold text-gray-800">
                      Gala Dinner (Saturday 31st) Number of Places: £115.00 each
                    </div>
                    <SelectField label="" name="galaDinnerPlaces">
                      <option value="">Select Number of Places</option>
                      {Array.from({ length: 11 }, (_, n) => n.toString()).map(
                        (n) => (
                          <option key={"g" + n} value={n}>
                            {n}
                          </option>
                        )
                      )}
                    </SelectField>
                  </div>

                  <TextAreaField
                    label="Do you have any special dietary requirements?"
                    name="dinnerDietaryRequirements"
                    rows={3}
                  />
                </div>
              )}

              {/* ------------------------ Step 4 ------------------------ */}
              {current.key === "accommodation" && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-800">
                    HOTEL ACCOMMODATION REQUIREMENT
                  </h4>

                  <p className="text-sm leading-relaxed text-gray-700">
                    The Conference Shop Ltd. in conjunction with BAAD, has
                    negotiated special rates and allocations with the Hilton
                    Syon Park Hotel (4 star) for delegates attending this event.
                  </p>

                  <p className="text-sm font-semibold text-gray-700 underline underline-offset-2">
                    Minimum 2 night stay (30th & 31st January)
                  </p>

                  {/* Dates (checkbox group) */}
                  <div>
                    <FieldLabel required>
                      Which dates are you looking to book accommodation for?
                    </FieldLabel>
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                      <CheckboxField
                        name="accommodationDates"
                        value="thu29"
                        label="Thursday 29th January"
                      />
                      <CheckboxField
                        name="accommodationDates"
                        value="fri30"
                        label="Friday 30th January"
                      />
                      <CheckboxField
                        name="accommodationDates"
                        value="sat31"
                        label="Saturday 31st January"
                      />
                    </div>
                    {touched.accommodationDates &&
                      typeof errors.accommodationDates === "string" && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.accommodationDates}
                        </p>
                      )}
                  </div>

                  {/* Room type (radio) */}
                  <div>
                    <FieldLabel required>
                      Would you like a standard room or upgraded Room?
                    </FieldLabel>
                    <div className="mt-2">
                      <RadioField
                        name="accommodationRoomType"
                        value="standard"
                        label="Standard Room"
                      />
                      <RadioField
                        name="accommodationRoomType"
                        value="upgraded"
                        label="Upgraded Room"
                      />
                    </div>
                    {touched.accommodationRoomType &&
                      errors.accommodationRoomType && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.accommodationRoomType as string}
                        </p>
                      )}
                  </div>

                  {/* Occupancy (radio) */}
                  <div>
                    <FieldLabel required>
                      Single, Double or Twin Occupancy?
                    </FieldLabel>
                    <div className="mt-2">
                      <RadioField
                        name="accommodationOccupancy"
                        value="single"
                        label="Single Occupancy"
                      />
                      <RadioField
                        name="accommodationOccupancy"
                        value="double"
                        label="Double Occupancy"
                      />
                      <RadioField
                        name="accommodationOccupancy"
                        value="twin"
                        label="Twin Occupancy"
                      />
                    </div>
                    {touched.accommodationOccupancy &&
                      errors.accommodationOccupancy && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.accommodationOccupancy as string}
                        </p>
                      )}
                  </div>

                  {/* Dynamic nights dropdown with pricing text */}
                  {values.accommodationOccupancy && (
                    <div>
                      <div className="mb-1 text-sm font-semibold text-midnight">
                        {values.accommodationOccupancy === "single"
                          ? "Single Occupancy = £205.00/Night"
                          : "Double or Twin Occupancy = £215.00/Night"}
                      </div>
                      <div className="-mt-1 mb-2 text-xs italic text-gray-500">
                        THIS IS REQUIRED, DO NOT LEAVE BLANK
                      </div>
                      <SelectField
                        label=""
                        name="accommodationNights"
                        requiredMark>
                        <option value="">Select number of nights</option>
                        <option>0</option>
                        <option>
                          Friday 30th Jan - Saturday 1st Feb (2 nights)
                        </option>
                        <option>
                          Thursday 29th Jan - Saturday 1st Feb (3 nights)
                        </option>
                      </SelectField>
                    </div>
                  )}
                </div>
              )}

              {/* ------------------------ Step 5: Billing Details ------------------------ */}
              {current.key === "billingDetails" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-gray-800">
                      Billing Details
                    </h4>
                    <div className="rounded-r-md bg-blue-500 px-4 py-2 text-white font-semibold shadow">
                      £ {calcTotal(values)}
                    </div>
                  </div>

                  <TextField
                    label="Name on Card"
                    name="billingNameOnCard"
                    requiredMark
                    placeholder=""
                  />

                  <TextField
                    label="Address"
                    name="billingAddress"
                    requiredMark
                    placeholder=""
                  />

                  {/* Mock card input (non-functional) */}
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-midnight">
                      Card number
                    </label>
                    <input
                      type="text"
                      name="billingCardNumber"
                      value={values.billingCardNumber}
                      onChange={() => {}}
                      placeholder="Card number"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-midnight outline-none"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      (Mock field – integrate your payment processor later)
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-midnight px-5 py-3 text-sm font-semibold text-white cursor-pointer">
                    Confirm Booking
                  </button>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={stepIndex === 0 || isSubmitting}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:opacity-50 cursor-pointer">
                  Previous
                </button>

                {stepIndex < STEP_ORDER.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => tryNext(validateForm, setTouched)}
                    className="rounded-md bg-midnight px-5 py-2 text-sm font-semibold text-white cursor-pointer">
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled // ⬅ disables submit
                    className="rounded-md bg-midnight px-5 py-2 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed">
                    Next
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
