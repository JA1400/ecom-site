"use client";

import { useProducts } from "@/context/ProductsContext";
import React from "react";
import emptyCart from "@/public/cart-empty.svg";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/image1.jpg";
import { X, Minus, Plus } from "lucide-react";

const Cart = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading products...</p>;

  return (
    <>
      <section className="p-2.5 w-full flex flex-col items-center gap-5 bg-white pt-12">
        <h2 className=" px-2.5 relative font-bold text-2xl w-fit self-start after:content-[''] after:w-2/3 after:h-1 after:bg-brand-500 after:block after:mt-1 after:ml-auto">
          Shopping Cart
        </h2>
      </section>
      <section className="min-h-[23rem] w-full p-2.5 bg-white flex flex-col items-center gap-5 pt-5 pb-12">
        {/* <Image
          src={emptyCart}
          alt="empty-cart"
          height={150}
          width={150}
          className="my-5"
        />
        <p className="text-sm">Your cart is currently empty.</p>
        <Link href={"/shop"} className="primary-btn mt-8 !w-60">
          Return To Shop
        </Link> */}

        <article className=" relative border border-[#E2E2E2] rounded-md w-full p-5">
          <X size={20} className="absolute top-2.5 right-2.5" />
          <div className="flex items-center gap-4">
            <Image
              src={placeholder}
              alt="placejolder"
              height={100}
              width={100}
            />
            <h3 className="font-semibold">
              Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB
            </h3>
          </div>
          <div className="flex flex-col w-full font-semibold">
            <div className="w-full flex justify-between items-center py-2.5 border-dashed border-b border-[#E2E2E2]">
              <p className="">Price</p>
              <p className="font-bold">$899.99</p>
            </div>
            <div className="w-full flex justify-between items-center py-2.5 border-dashed border-b border-[#E2E2E2]">
              <p className="">Price</p>
              <div className="flex bg-[#EDEDED]">
                <button className="cursor-pointer px-1">
                  <Minus size={14} />
                </button>
                <p className="px-1">1</p>
                <button className="cursor-pointer px-1">
                  <Plus size={14} />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-2.5 pb-0">
              <p className="">Price</p>
              <p className="font-bold">$899.99</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Cart;
