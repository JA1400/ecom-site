import React from "react";
import bannerOne from "@/public/banner1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="card relative max-h-[680px] px-5 pt-10 pb-5 rounded-md bg-[#192c57] gap-2 flex items-center flex-col overflow-hidden ">
      <div className="top-piece flex flex-col gap-5 items-center">
        <aside className="font-light text-xs text-white bg-warning-500 py-0.5 px-5 rounded-sm">
          Weekend Deal
        </aside>
        <div className="w-auto flex flex-col gap-2 items-center">
          <h1 className="text-white font-extrabold text-3xl w-fit text-balance text-center tracking-tight">
            All New <br /> For A Better You{" "}
          </h1>
          <h4 className="text-white text-base">Amazing Deals And Discounts</h4>
          <div className="price-section flex justify-center items-center gap-2.5">
            <p className="text-sm text-white">From</p>
            <h2 className="text-amber-400 font-extrabold text-3xl">$499.99</h2>
          </div>
        </div>
        <button className="text-white text-sm font-bold text-center w-36 h-11 bg-brand-500 rounded-md ">
          Shop Now
        </button>
      </div>
      <div className="bottom-piece h-90 w-90 relative transform translate-y-12">
        <Image
          src={bannerOne}
          alt="banner-img"
          fill
          className="object-contain"
        ></Image>
      </div>
      <div className="absolute bottom-5 flex justify-between gap-2.5">
        <div className="w-10 h-4 rounded-full bg-brand-500"></div>
        <div className="w-4 h-4 rounded-full bg-[#d9d9d9]"></div>
        <div className="w-4 h-4 rounded-full bg-[#d9d9d9]"></div>
      </div>
    </div>
  );
};

export default Hero;
