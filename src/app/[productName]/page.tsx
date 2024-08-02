"use client";

import { notFound } from "next/navigation";
import Image from "next/image";

export default function Product({
  params,
}: {
  params: { productName: string };
}) {
  const products = ["orange", "cherry", "grape", "apple"];
  const productNameLowerCase = params.productName.toLowerCase(); 

  if (!products.includes(productNameLowerCase)) {
    notFound();
  }

  const productName =
    params.productName.charAt(0).toUpperCase() + productNameLowerCase.slice(1);

  return (
    <div className="flex justify-around">
      <div className="absolute h-screen w-full flex justify-between items-center z-10">
        <svg
          className="h-4/6"
          viewBox="0 0 91 726"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="-457" width="547" height="726" rx="92" fill="#EF9C3E" />
        </svg>
        <svg
          className="h-4/6"
          viewBox="0 0 91 726"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className="h-full w-[547px]" rx="92" fill="#EF9C3E" />
        </svg>
      </div>
      <div className="absolute z-20">
        <div className="h-screen py-10 md:py-0 flex justify-around items-center">
          <div className="hidden md:block relative aspect-[601/767] md:h-5/6 shadow-lg rounded-3xl overflow-hidden">
            <Image
              src={`/images/${productNameLowerCase}.webp`}
              fill
              alt={productName}
              className="object-cover image"
            />
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center h-full pl-3">
              <h1 className="text-nowrap text-primary pb-3">
                {productName}
                <span className="text-secondary">Toes</span>
              </h1>
              <h2 className="md:pb-20">{productName} Flavoured Aroma</h2>
              <div className="md:hidden aspect-[601/767] my-8 w-full shadow-lg rounded-3xl overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src={`/images/${productNameLowerCase}.webp`}
                    fill
                    alt={productName}
                    className="object-cover image"
                    onErrorCapture={() => notFound()}
                  />
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <div className="w-[200px] sm:w-[420px] h-[55px] shadow-xl bg-secondary rounded-xl flex justify-center items-center hover:scale-110 transition-transform">
                  <p className="text-light select-none">Proceed To Checkout</p>
                  <svg
                    className="w-[24px] h-[24px] ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                      stroke="#EAF0FA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
