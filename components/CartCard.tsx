import React from "react";
import Image from "next/image";
import placeholder from "@/public/image1.jpg";
import { X, Minus, Plus } from "lucide-react";
import { CartItem } from "@/types";
import { useCart } from "@/context/CartContext";

const CartCard = ({ item }: { item: CartItem }) => {
  const { cart, changeQuantity, removeFromCart } = useCart();
  const { id, name, image, price, quantity } = item;

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  const handleQuantity = (id: string, q: number) => {
    changeQuantity(id, q);
  };

  return (
    <article className=" relative border border-[#E2E2E2] rounded-md w-full p-5">
      <button
        onClick={() => {
          handleRemove(id);
        }}
        className="cursor-pointer absolute top-2.5 right-2.5"
      >
        <X size={20} />
      </button>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt="placejolder"
          height={100}
          width={100}
          priority
        />
        <h3 className="font-semibold">{name}</h3>
      </div>
      <div className="flex flex-col w-full font-semibold">
        <div className="w-full flex justify-between items-center py-2.5 border-dashed border-b border-[#E2E2E2]">
          <p className="">Price</p>
          <p className="font-bold">${price}.99</p>
        </div>
        <div className="w-full flex justify-between items-center py-2.5 border-dashed border-b border-[#E2E2E2]">
          <p className="">Quantity</p>
          <div className="flex bg-[#EDEDED]">
            <button
              onClick={() => {
                handleQuantity(id, -1);
              }}
              className="cursor-pointer px-1"
            >
              <Minus size={14} />
            </button>
            <p className="px-1">{quantity}</p>
            <button
              onClick={() => {
                handleQuantity(id, 1);
              }}
              className="cursor-pointer px-1"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-2.5 pb-0">
          <p className="">Subtotal</p>
          <p className="font-bold">
            ${quantity * price}.{100 - quantity}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
