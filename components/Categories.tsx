import React from "react";
import { Smartphone, Headphones, Cable, Barcode } from "lucide-react";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="overflow-auto scrollbar-hide">
      <div className="flex gap-2.5 w-full">
        <Link href="#" className="cat-link">
          <Smartphone className="text-brand-500" size={48} />
          <p className="font-extrabold">Smartphones</p>
        </Link>
        <Link href="#" className="cat-link">
          <Headphones className="text-brand-500" size={48} />
          <p className="font-extrabold">Headphones</p>
        </Link>
        <Link href="#" className="cat-link">
          <Cable className="text-brand-500" size={48} />
          <p className="font-extrabold">Cables & Chargers</p>
        </Link>
        <Link href="#" className="cat-link">
          <Barcode className="text-brand-500" size={48} />
          <p className="font-extrabold">All Products</p>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
