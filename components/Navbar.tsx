"use client";

import React, { useState } from "react";
import {
  Menu,
  User,
  ShoppingCart,
  X,
  ChevronRight,
  Headset,
} from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 h-15 px-2.5 bg-white flex justify-between items-center shadow-md">
        <Link href={"/"}>
          <img src="/logo.png" alt="logo" className=" cursor-pointer w-30" />
        </Link>
        <section className="flex w-auto gap-3.5 items-center">
          <User className="icon" size={20} />
          <ShoppingCart className="icon" size={20} />
          <Menu className="icon" size={24} onClick={handleClick} />
        </section>
      </nav>
      <AnimatePresence>
        {menuToggle && (
          <>
            <motion.div
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.section
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-full h-full max-w-[28rem] bg-white z-50 flex flex-col"
              onClick={(e) => {
                if ((e.target as HTMLElement).tagName === "A") {
                  handleClick();
                }
              }}
            >
              <div className="h-16 w-full bg-[#EFEFEF] flex justify-between items-center">
                <div className="h-full w-16 bg-black flex justify-center items-center border-r-2 border-white">
                  <Menu className="text-white" size={26} />
                </div>
                <p className="font-extrabold text-lg-">Menu</p>
                <button
                  className="h-full w-16 flex justify-center items-center border-l-2 border-white"
                  onClick={handleClick}
                >
                  <X className="text-black hover:text-brand-500" size={26} />
                </button>
              </div>
              <ul>
                <li>
                  <Link
                    href={"/"}
                    className="w-full h-14 border-b border-[#EFEFEF] flex items-center justify-between"
                  >
                    <p className=" font-extrabold pl-[19px]">Home</p>
                    <aside className="pr-[19px]">
                      <ChevronRight className="text-[#A8A8A8]" size={26} />
                    </aside>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#"}
                    className="w-full h-14 border-b border-[#EFEFEF] flex items-center justify-between"
                  >
                    <p className=" font-extrabold pl-[19px]">Shop</p>
                    <aside className="pr-[19px]">
                      <ChevronRight className="text-[#A8A8A8]" size={26} />
                    </aside>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#"}
                    className="w-full h-14 border-b border-[#EFEFEF] flex items-center justify-between"
                  >
                    <p className=" font-extrabold pl-[19px]">Account</p>
                    <aside className="pr-[19px]">
                      <ChevronRight className="text-[#A8A8A8]" size={26} />
                    </aside>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#"}
                    className="w-full h-14 border-b border-[#EFEFEF] flex items-center justify-between"
                  >
                    <p className=" font-extrabold pl-[19px]">Wishlist</p>
                    <aside className="pr-[19px]">
                      <ChevronRight className="text-[#A8A8A8]" size={26} />
                    </aside>
                  </Link>
                </li>
              </ul>
              <div className="mt-auto w-full bg-black h-16 px-[19px] flex flex-row-reverse items-center gap-2.5">
                <a
                  href="tel:+1234567890"
                  className="font-bold text-amber-400 block hover:underline"
                >
                  (123) 456-7890
                </a>
                <Headset className="text-white" size={26} />
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
