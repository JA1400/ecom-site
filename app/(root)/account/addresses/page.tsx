import React from "react";
import { PencilIcon } from "lucide-react";

const Addresses = () => {
  return (
    <>
      <section className="min-h-[15rem] w-full p-2.5 bg-white flex flex-col  gap-7.5 pt-5 pb-12">
        <h4 className="font-bold text-lg">Shipping Addresses</h4>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold">Home</p>
            <p>1234 S Main St</p>
            <p>APT 101</p>
            <p>El Paso, TX</p>
            <p>53000</p>
          </div>
          <a href="#" className="flex items-center gap-1">
            <PencilIcon size={17} className="text-black inline-block" /> Edit
            <span className="font-bold">Home</span> address
          </a>
        </div>
      </section>
    </>
  );
};

export default Addresses;
