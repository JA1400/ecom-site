"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/app/data/slides";

const Hero = () => {
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const [index, setIndex] = useState(0);
  const [resetFlag, setResetFlag] = useState(false); // flip this on manual dot click
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear previous interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Set up new interval
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    // Clean up on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetFlag]); // Only reset when user clicks dot (not on index change)

  const handleDotClick = (i: number) => {
    setIndex(i);
    setResetFlag((prev) => !prev); // Flip to trigger useEffect
  };

  return (
    <div className="relative h-[680px] px-5 pt-12 pb-5 rounded-md bg-[#192c57] gap-2 flex items-center flex-col overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="top-piece flex flex-col gap-5 items-center"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <aside className="font-light text-xs text-white bg-warning-500 py-0.5 px-5 rounded-sm">
            {slides[index].subtitle}
          </aside>
          <div className="w-auto flex flex-col gap-2 items-center">
            <h1 className="text-white font-extrabold text-3xl w-fit text-balance text-center tracking-tight">
              {slides[index].title}
            </h1>
            <h4 className="text-white text-base">
              {slides[index].description}
            </h4>
            <div className="price-section flex justify-center items-center gap-2.5">
              <p className="text-sm text-white">From</p>
              <h2 className="text-amber-400 font-extrabold text-3xl">
                {slides[index].price}
              </h2>
            </div>
          </div>
          <Link href={"/#"} className="primary-btn hover-btn">
            Shop Now
          </Link>
        </motion.div>
      </AnimatePresence>
      <div className="bottom-piece h-90 w-90 relative transform translate-y-12">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].image}
            src={slides[index].image}
            className="absolute object-contain object-top w-full h-full"
            initial={{ opacity: 0, y: 80, scale: 1.05 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -200, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute bottom-5 flex justify-between gap-2.5">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${index === i ? "current-dot" : "regular-dot"}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
