import React from "react";
import { Smartphone, Headphones, Cable, Barcode } from "lucide-react";
import Link from "next/link";
import { CategoryType } from "@/types";

const Categories = ({ variant }: CategoryType) => {
  return (
    <section className="w-full overflow-auto scrollbar-hide">
      <div className="flex gap-2.5 w-full">
        <Link
          href="#"
          className={` ${
            variant === "home" ? "bg-white" : "bg-[#f5dede]"
          } cat-link`}
        >
          <Smartphone className="text-brand-500" size={48} />
          <p className="font-extrabold">Smartphones</p>
        </Link>
        <Link
          href="#"
          className={` ${
            variant === "home" ? "bg-white" : "bg-[#e6ebef]"
          } cat-link`}
        >
          <Headphones className="text-brand-500" size={48} />
          <p className="font-extrabold">Headphones</p>
        </Link>
        <Link
          href="#"
          className={` ${
            variant === "home" ? "bg-white" : "bg-[#e9e5ef]"
          } cat-link`}
        >
          <Cable className="text-brand-500" size={48} />
          <p className="font-extrabold">Cables & Chargers</p>
        </Link>
        <Link
          href="#"
          className={` ${
            variant === "home" ? "bg-white" : "bg-[#ebdde8]"
          } cat-link`}
        >
          <Barcode className="text-brand-500" size={48} />
          <p className="font-extrabold">All Products</p>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
