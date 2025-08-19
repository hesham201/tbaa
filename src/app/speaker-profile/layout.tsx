import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaker Profiles | British Academy of Aesthetic Dentistry",
  description: "Learn more about our distinguished speakers who are leaders in their fields, bringing cutting-edge knowledge and expertise to our events.",
};

export default function SpeakerProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}