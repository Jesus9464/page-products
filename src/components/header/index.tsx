"use client";
import { useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { Routes } from "@/common/routes";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2">
      <Desktop
        setMobileMenuOpen={setMobileMenuOpen}
        routeProduct={Routes.products}
        routeShopping={Routes.shopping}
      />
      <Mobile
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        routeProduct={Routes.products}
        routeShopping={Routes.shopping}
      />
    </header>
  );
}
