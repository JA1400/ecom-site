import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-2.5 pt-12 flex flex-col gap-5">
      <img src="/logo2.png" alt="logo" className="w-30" />
      <article className="flex flex-col gap-1.5">
        <p>Got any questions? Contact us!</p>
        <a href="tel:+1234567890" className="font-bold block hover:underline">
          (123) 456-7890
        </a>
        <a
          href="mailto:contact@example.com"
          className="font-bold block hover:underline"
        >
          contact@example.com
        </a>
      </article>
      <h6 className="font-extrabold tracking-wide text-lg pt-7">Quick Links</h6>
      <article className="flex flex-col gap-2">
        <Link className="text-hover" href={"/#"}>
          Home
        </Link>
        <Link className="text-hover" href={"/#"}>
          Account
        </Link>
        <Link className="text-hover" href={"/#"}>
          About Us
        </Link>
        <Link className="text-hover" href={"/#"}>
          Contact Us
        </Link>
      </article>

      <div className="pt-7">
        <hr className="border-gray-300" />
        <p className="text-sm text-center pt-5 pb-2.5">
          Copyright 2025 © Jose Federico | All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
