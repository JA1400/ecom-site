"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { priceFilters } from "@/productFilters";
import { motion } from "framer-motion";

const Filters = ({
  handleFilters,
  toggleRange,
  selectedRanges,
}: {
  handleFilters: () => void;
  toggleRange: (id: number) => void;
  selectedRanges: number[];
}) => {
  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="box-border fixed w-98 h-[calc(100%-3.75rem)] bottom-0 left-0 bg-white z-10 shadow-[0_0_6px_rgba(0,0,0,0.5)] flex flex-col overflow-y-auto"
    >
      <div className="min-h-14 w-full flex bg-[#EFEFEF]">
        <div className="w-full flex items-center justify-center border-r-2 border-white font-bold">
          Filters
        </div>
        <button
          className="w-18 bg-[#EFEFEF] flex justify-center items-center text-black hover:text-brand-500 active:text-brand-500 transition-colors duration-200"
          onClick={handleFilters}
        >
          <X size={26} />
        </button>
      </div>
      <div className="filter-section">
        <h3>Price</h3>
        <div>
          {priceFilters.map(({ filterId, label }) => {
            const isSelected = selectedRanges.includes(filterId);

            return (
              <label key={label} className="filter-label">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleRange(filterId)}
                />
                <span className={isSelected ? "text-brand-500" : ""}>
                  {label}
                </span>
              </label>
            );
          })}
        </div>
      </div>
      <div className="filter-section">
        <h3>Brands</h3>
        <div>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Apple</span>
          </label>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Samsung</span>
          </label>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Google</span>
          </label>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Sony</span>
          </label>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Beats</span>
          </label>
        </div>
      </div>
      <div className="filter-section">
        <h3>Brands</h3>
        <div>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Apple</span>
          </label>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Samsung</span>
          </label>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Google</span>
          </label>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Sony</span>
          </label>
          <label className="filter-label">
            <input type="checkbox" />
            <span>Beats</span>
          </label>
        </div>
      </div>
    </motion.aside>
  );
};

export default Filters;
