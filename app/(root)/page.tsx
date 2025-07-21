import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="p-2.5 flex flex-col gap-2.5">
        <Hero />
        <Categories />
      </section>
      <section className="p-2.5 flex flex-col items-center bg-white pt-12">
        <h2 className="relative text-center font-bold text-2xl w-fit after:content-[''] after:w-2/3 after:h-1 after:bg-brand-500 after:block after:mt-1 after:mx-auto">
          Featured Products
        </h2>
        <article className="grid grid-cols-2 py-2.5 gap-2.5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </article>
      </section>
      <section className="p-2.5 flex flex-col items-center bg-white gap-2.5 ">
        <div className="h-[250px] w-full rounded-md flex items-center bg-[url('/banner7.jpg')] bg-cover bg-[55%_center]">
          <div className="w-2/3 p-7 flex flex-col gap-2.5">
            <p className="font-light text-warning-500 text-md">
              Exclusive Deal
            </p>
            <h4 className="text-2xl/8 font-black tracking-wide">
              10% Discount On All Headphones
            </h4>
            <Link href={"/#"} className="primary-btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="cursor-pointer h-[320px] w-full rounded-md flex flex-col items-center pt-5 px-2.5 gap-2.5 bg-[url('/banner8.jpg')] bg-cover bg-[center_48%]">
          <aside className="font-light text-xs text-white bg-warning-500 py-0.5 px-5 rounded-sm rounded-tl-none">
            Weekend Deal
          </aside>
          <h5 className="text-xl font-black tracking-wide text-center">
            All New iPad Pro
          </h5>
          <p className="font-light text-sm">Best In It's Class</p>
        </div>
        <div className="cursor-pointer h-[320px] w-full rounded-md flex flex-col items-center pt-5 px-2.5 gap-2.5 bg-[url('/banner8.jpg')] bg-cover bg-[center_48%]">
          <aside className="font-light text-xs text-white bg-warning-500 py-0.5 px-5 rounded-sm rounded-tl-none">
            Weekend Deal
          </aside>
          <h5 className="text-xl font-black tracking-wide text-center">
            All New iPad Pro
          </h5>
          <p className="font-light text-sm">Best In It's Class</p>
        </div>
      </section>
      <section className="px-5 py-16 bg-white flex flex-col gap-2.5">
        <h4 className="text-2xl/8 font-extrabold text-center">
          Subscribe now & get 20% off
        </h4>
        <p className="font-light text-sm text-center">
          Receive our latest promotions and offers
        </p>
        <div className="h-12 flex mt-5">
          <input
            type="text"
            placeholder="Email Address"
            className="box-border w-[70%] pl-2.5 rounded-l-md outline-none border border-brand-500 focus:border-brand-600"
          />
          <button className="cursor-pointer flex items-center rounded-r-md justify-center text-white text-sm font-bold text-center bg-brand-500 w-[30%] transition-colors duration-200 hover:bg-brand-600">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}
