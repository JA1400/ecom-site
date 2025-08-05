import React from "react";
import placeholder from "@/public/image1.jpg";
import Image from "next/image";
import { StarIcon as StarSolid } from "@heroicons/react/20/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

const ProductCard = () => {
  return (
    <div className="px-2 flex flex-col gap-2">
      <Image
        src={placeholder}
        width={200}
        height={200}
        className="w-full aspect-square cursor-pointer"
        placeholder="blur"
        alt="product-IMG"
      />
      <h3 className=" truncate font-semibold text-lg cursor-pointer transition-colors transition-200 hover:text-brand-500">
        Samsung Galaxy S23 Ultra 256GB
      </h3>
      <div className="flex gap-0.5 items-center">
        <StarSolid className="w-5 h-5 text-yellow-500" />
        <StarSolid className="w-5 h-5 text-yellow-500" />
        <StarSolid className="w-5 h-5 text-yellow-500" />
        <StarSolid className="w-5 h-5 text-yellow-500" />
        <StarOutline className="w-5 h-5 text-yellow-500" />
      </div>
      <div className="flex gap-0.5 items-center">
        <h4 className="font-bold text-[#DD2831]">
          $900 <span className="line-through text-gray-500">$1000</span>{" "}
        </h4>
      </div>
      <button className="alternate-btn">ADD TO CART</button>
    </div>
  );
};

export default ProductCard;
