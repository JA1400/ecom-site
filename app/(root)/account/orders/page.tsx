import React from "react";
import emptyCart from "@/public/cart-empty.svg";
import Image from "next/image";
import Link from "next/link";
const Orders = () => {
  return (
    <>
      <section className="min-h-[23rem] w-full p-2.5 bg-white flex flex-col items-center gap-5 pt-5 pb-12">
        {/* <Image
          src={emptyCart}
          alt="empty-cart"
          height={150}
          width={150}
          className="my-5"
        />
        <p className="text-sm">You don't have any orders.</p>
        <Link href={"/shop"} className="primary-btn mt-8 !w-60">
          Return To Shop
        </Link> */}
        <article className=" relative border border-[#E2E2E2] rounded-md w-full p-5">
          <div className="flex flex-col w-full font-semibold">
            <div className="w-full flex justify-between items-center py-5 pt-2.5 border-b border-[#E2E2E2]">
              <p>Order #</p>
              <p className="font-extrabold">7707</p>
            </div>
            <div className="w-full flex justify-between items-center py-5 border-b border-[#E2E2E2]">
              <p>Date</p>
              <p>Jun 24, 2025</p>
            </div>
            <div className="w-full flex justify-between items-center py-5 border-b border-[#E2E2E2]">
              <p>Status</p>
              <p>On Hold</p>
            </div>
            <div className="w-full flex justify-between items-center py-5 border-b border-[#E2E2E2]">
              <p>Total</p>
              <p className="font-extrabold">$899.99</p>
            </div>
          </div>
          <button className="primary-btn mt-5 mx-auto">View Details</button>
        </article>
      </section>
    </>
  );
};

export default Orders;
