import React from "react";
import emptyCart from "@/public/cart-empty.svg";
import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <>
      <Image
        src={emptyCart}
        alt="empty-cart"
        height={150}
        width={150}
        className="my-5"
        priority
      />
      <p className="text-sm">Your cart is currently empty.</p>
      <Link href={"/shop"} className="primary-btn mt-8 !w-60">
        Return To Shop
      </Link>
    </>
  );
};

export default EmptyCart;
