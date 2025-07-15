import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function ({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="mt-15">{children}</main>
      <Footer />
    </>
  );
}
