import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ProductsProvider } from "@/context/ProductsContext";
import { CartProvider } from "@/context/CartContext";

export default function ({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <ProductsProvider>
        <CartProvider>
          <Navbar />
          <main className="mt-15">{children}</main>
          <Footer />
        </CartProvider>
      </ProductsProvider>
    </SessionProvider>
  );
}
