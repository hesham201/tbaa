import Button from "@/components/button";
import React from "react";

const ThankYoupage = () => {
  return (
    <main className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="mt-[121px] max-w-md w-full rounded-xl border border-gray-200 p-8 text-center shadow-sm">
        <div className="text-3xl mb-3">✅</div>
        <h1 className="text-2xl font-semibold mb-2">Payment successful</h1>
        <p className="text-gray-600 mb-6">
          Thank you. Your booking has been confirmed.
        </p>
        <Button href="/">Back to home</Button>
      </div>
    </main>
  );
};

export default ThankYoupage;
