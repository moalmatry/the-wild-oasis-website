import React from "react";
import { LayoutProps } from "@/types";
import SideNavigation from "@/app/_components/SideNavigation";

export default function AccountLayout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
