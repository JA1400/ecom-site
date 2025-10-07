"use client";

import React from "react";
import CartCard from "@/components/CartCard";
import EmptyCart from "@/components/EmptyCart";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <section className="p-2.5 w-full flex flex-col items-center gap-5 bg-white pt-12">
        <h2 className=" px-2.5 relative font-bold text-2xl w-fit self-start after:content-[''] after:w-2/3 after:h-1 after:bg-brand-500 after:block after:mt-1 after:ml-auto">
          Shopping Cart
        </h2>
      </section>
      <section className="min-h-[23rem] w-full p-2.5 bg-white flex flex-col items-center gap-5 pt-5 pb-12">
        {cart.length ? (
          cart.map((item) => <CartCard item={item} key={item.id} />)
        ) : (
          <EmptyCart />
        )}
      </section>
    </>
  );
};

export default Cart;
