"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNav() {
  const pathname = usePathname();

  const links = [
    { href: "/account/dashboard", label: "Dashboard" },
    { href: "/account/orders", label: "Orders" },
    { href: "/account/addresses", label: "Addresses" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "text-brand-500 font-extrabold border-b-2 border-brand-500"
                : ""
            }
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
