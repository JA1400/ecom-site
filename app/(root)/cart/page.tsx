"use client";

import React, { useState } from "react";
import emptyCart from "@/public/cart-empty.svg";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/image1.jpg";
import { X, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();

  // Example stored addresses
  const addresses = [
    { id: 1, label: "Home - 123 Main St, Chicago" },
    { id: 2, label: "Work - 456 Oak Ave, Chicago" },
  ];

  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "add-new") {
      router.push("/home");
    } else {
      setSelected(value);
    }
  };

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
        <article className=" relative border-2 border-brand-500 rounded-md w-full p-5">
          <h4 className="font-bold text-lg">Order Summary</h4>
          <div className="row-separator"></div>
          <label htmlFor="address" className="pb-5 block">
            Select Your Address
          </label>
          <select
            id="address"
            name="address"
            value={selected}
            onChange={handleChange}
            className="block w-full border border-[#E2E2E2] rounded-md shadow-sm focus:border-blue-500 focus:ring-0 p-2.5"
          >
            <option value="">-- Choose an address --</option>
            {addresses.map((addr) => (
              <option key={addr.id} value={addr.id}>
                {addr.label}
              </option>
            ))}
            <option value="add-new">➕ Add new address</option>
          </select>
          <label htmlFor="coupon" className="block py-5">
            Got a coupon?
          </label>
          <div className="flex items-center w-full border border-[#E2E2E2] rounded-md p-2.5 shadow-sm">
            <input
              type="text"
              id="coupon"
              placeholder="Coupon Code"
              className=" flex-grow appearance-none border-none outline-none focus:outline-none focus:ring-0"
            />
            <button className="w-32 whitespace-nowrap font-bold">
              Apply Coupon
            </button>
          </div>
          <div className="row-separator"></div>
          <div className="flex flex-col w-full gap-2.5">
            <div className="price-row">
              <dt>Subtotal</dt>
              <dd>$899.99</dd>
            </div>

            <div className="price-row">
              <dt>Shipping Fee</dt>
              <dd>FREE</dd>
            </div>

            <div className="price-row">
              <dt>Tax (5%)</dt>
              <dd>$44.99</dd>
            </div>

            <div className="w-full border-b border-[#E2E2E2] my-2.5"></div>

            <div className="price-row">
              <dt>Total</dt>
              <dd>$944.98</dd>
            </div>
          </div>
          <button className="primary-btn !w-full mt-5">Place Order</button>
        </article>
      </section>
    </>
  );
};

export default Cart;
