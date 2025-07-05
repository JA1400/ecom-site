import Navbar from "@/components/Navbar";
import React from "react";

export default function ({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="p-2.5">{children}</main>
    </>
  );
}
