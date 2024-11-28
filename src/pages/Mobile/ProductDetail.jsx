import { ChevronLeft, ShoppingBag } from "lucide-react";
import React from "react";

export const ProductDetail = () => {
  return (
    <section className="mx-4 mt-5">

      {/* Top */}
      <div className="flex justify-between">
        <div className="flex">
          <ChevronLeft />
          <h2>name of the product</h2>
        </div>

        <div>
        <ShoppingBag />
        </div>
      </div>

      {/* Card section */}

      <div className="mt-5 w-full flex flex-col items-center">
        <div className="min-w-[200px] min-h-[200px] overflow-hidden rounded-2xl " >
          <img src="/IMG/pain-herb.jpg" alt="" className="w-full h-full object-cover aspect-auto" />
        </div>


        <div className="w-full ">
          <h1>Product name</h1>
        </div>
      </div>
    </section>
  );
};
