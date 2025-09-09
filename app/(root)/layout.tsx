import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function ({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <Navbar />
      <main className="mt-15">{children}</main>
      <Footer />
    </SessionProvider>
  );
}
