"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const fullH = pathname !== "/login" && pathname !== "/register";

  return (
    <div className={`main-container ${fullH ? "max-h-[calc(100%-78px)]" : ""}`}>
      {children}
    </div>
  );
};
