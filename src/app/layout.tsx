import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LocomotiveProvider from "@/providers/locomotive-provider";
// import Header from "@/layout/header";
// import Footer from "@/layout/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "The British Academy of Aesthetic Dentistry",
  description: "The British Academy of Aesthetic Dentistry",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* <Header /> */}
        <LocomotiveProvider>{children}</LocomotiveProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
