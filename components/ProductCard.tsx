import React from "react";
import Image from "next/image";
import { StarIcon as StarSolid } from "@heroicons/react/20/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  const { name, images, price } = product;

  return (
    <div className="px-2 flex flex-col gap-2">
      <div className="relative w-full aspect-square">
        <Image
          src={images[0].url}
          fill
          className="px-8 w-full object-contain cursor-pointer"
          alt="product-IMG"
        />
      </div>

      <h3 className=" truncate font-semibold text-lg cursor-pointer transition-colors transition-200 hover:text-brand-500">
        {name}
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
          ${Math.floor(price * 0.95)}{" "}
          <span className="line-through text-gray-500">${price}</span>
        </h4>
      </div>
      <button className="alternate-btn">ADD TO CART</button>
    </div>
  );
};

export default ProductCard;
