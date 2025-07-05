import React from "react";
import { Menu, User, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="px-2.5 py-3.5 bg-white flex justify-between items-center shadow-md">
      <img src="/logo.png" alt="logo" className="w-30" />
      <section className="flex w-auto gap-3.5 items-center">
        <User color="black" size={20} />
        <ShoppingCart color="black" size={20} />
        <Menu color="black" size={24} />
      </section>
    </nav>
  );
};

export default Navbar;
