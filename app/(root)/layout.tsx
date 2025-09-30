import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ProductsProvider } from "@/context/ProductsContext";

export default function ({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <Navbar />
      <ProductsProvider>
        <main className="mt-15">{children}</main>
      </ProductsProvider>
      <Footer />
    </SessionProvider>
  );
}
