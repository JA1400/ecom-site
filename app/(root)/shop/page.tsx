"use client";

import Categories from "@/components/Categories";
import React, { useEffect, useState } from "react";
import { SlidersHorizontal, ArrowDownWideNarrow } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SkeletonCard from "@/components/SkeletonCard";
import Filters from "@/components/Filters";
import { AnimatePresence, motion } from "framer-motion";
import FilterSection from "@/components/FilterSection";

const Shop = () => {
  const [products, setProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedRanges, setSelectedRanges] = useState<number[]>([]);

  const toggleRange = (id: number) => {
    if (selectedRanges.includes(id)) {
      setSelectedRanges(
        selectedRanges.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedRanges((ranges) => [...ranges, id]);
    }
  };

  useEffect(() => {
    setLoading(true); // force reset
    setProducts(0);

    const timer = setTimeout(() => {
      setLoading(false);
      setProducts(8);
    }, 2000);

    return () => clearTimeout(timer); // cleanup in case unmounted early
  }, []);

  const handleFilters = () => {
    setOpenFilters((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {openFilters && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpenFilters(false)}
            />
            <Filters
              handleFilters={handleFilters}
              toggleRange={toggleRange}
              selectedRanges={selectedRanges}
            />
          </>
        )}
      </AnimatePresence>
      <section className="p-2.5 w-full flex flex-col items-center gap-5 bg-white pt-12">
        <h2 className=" px-2.5 relative font-bold text-2xl w-fit self-start after:content-[''] after:w-2/3 after:h-1 after:bg-brand-500 after:block after:mt-1 after:ml-auto">
          All Products
        </h2>

        {selectedRanges.length ? (
          <FilterSection selectedRanges={selectedRanges} />
        ) : (
          <Categories variant="shop" />
        )}
      </section>
      <section className="w-full h-13 bg-white border-y border-[#EFEFEF] flex">
        <div className="w-1/2 flex justify-center items-center">
          <button
            className="cursor-pointer flex gap-2.5"
            onClick={handleFilters}
          >
            <SlidersHorizontal className="text-black" size={24} />
            <span>Filter</span>
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <button className="cursor-pointer flex gap-2.5">
            <ArrowDownWideNarrow className="text-black" size={24} />
            <span>Sort</span>
          </button>
        </div>
      </section>
      <section className="p-2.5 flex flex-col items-center bg-white pb-12">
        <article className=" w-full grid grid-cols-2 py-2.5 gap-2.5">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, i) => <SkeletonCard key={i} />)
            : Array.from({ length: products }).map((_, i) => (
                <ProductCard key={i} />
              ))}
        </article>
      </section>
    </>
  );
};

export default Shop;
