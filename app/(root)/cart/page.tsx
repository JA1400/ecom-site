import React from "react";
import emptyCart from "@/public/cart-empty.svg";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <section className="p-2.5 w-full flex flex-col items-center gap-5 bg-white pt-12">
        <h2 className=" px-2.5 relative font-bold text-2xl w-fit self-start after:content-[''] after:w-2/3 after:h-1 after:bg-brand-500 after:block after:mt-1 after:ml-auto">
          Shopping Cart
        </h2>
      </section>
      {/* <section className="min-h-[25rem] w-full p-2.5 bg-white flex flex-col items-center">
        <Image
          src={emptyCart}
          alt="empty-cart"
          height={150}
          width={150}
          className="my-5"
        />
        <p className="text-sm">Your cart is currently empty.</p>
        <Link href={"/shop"} className="primary-btn mt-7">
          Return To Shop
        </Link>
      </section> */}
      <section className="p-2.5 w-full flex flex-col items-center gap-5 bg-white pt-12"></section>
    </>
  );
};

export default Cart;
