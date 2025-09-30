"use client";
import { useProducts } from "@/context/ProductsContext";
import React from "react";
import SkeletonCard from "./SkeletonCard";
import ProductCard from "./ProductCard";

const HomeProdDisplay = () => {
  const { products, loading } = useProducts();

  return (
    <article className="w-full grid grid-cols-2 py-2.5 gap-2.5">
      {loading
        ? Array(8)
            .fill(0)
            .map((_, i) => <SkeletonCard key={i} />)
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </article>
  );
};

export default HomeProdDisplay;
