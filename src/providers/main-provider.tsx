"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 30);
  }, [pathname]);
  return <>{children}</>;
};

export default MainProvider;
