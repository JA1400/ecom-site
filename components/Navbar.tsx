import React from "react";
import { Menu, User, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-15 px-2.5 bg-white flex justify-between items-center shadow-md">
      <Link href={"/"}>
        <img src="/logo.png" alt="logo" className=" cursor-pointer w-30" />
      </Link>
      <section className="flex w-auto gap-3.5 items-center">
        <User className="icon" size={20} />
        <ShoppingCart className="icon" size={20} />
        <Menu className="icon" size={24} />
      </section>
    </nav>
  );
};

export default Navbar;
