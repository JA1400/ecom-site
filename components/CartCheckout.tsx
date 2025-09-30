"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CartCheckout = () => {
  const router = useRouter();

  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "add-new") {
      router.push("/home");
    } else {
      setSelected(value);
    }
  };

  const addresses = [
    { id: 1, label: "Home - 123 Main St, Chicago" },
    { id: 2, label: "Work - 456 Oak Ave, Chicago" },
  ];

  return (
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
  );
};

export default CartCheckout;
