"use client";

import useLenisScroll from "@/hooks/use-lenis-scroll";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";

const DefaultProviders = ({ children }: { children: React.ReactNode }) => {
  useLenisScroll();
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultProviders;
