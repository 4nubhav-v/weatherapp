"use client";

import Link from "next/link";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="m-8 rounded-md px-4 py-4">
        <Header />
        <div className="mt-8 flex flex-col items-center justify-between gap-8 rounded-lg bg-red-700 p-8 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <h1 className="mb-8 text-center text-6xl font-bold tracking-tight md:text-left">
              Get the Weather reports as{" "}
              <span className="text-yellow-500 italic">fast</span> as possible
            </h1>
            <Link href="/status">
              <button className="flex cursor-pointer items-center gap-1 rounded-lg bg-white px-4 py-2 text-black duration-200 hover:bg-yellow-500">
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
            <div className="m-8 size-64 bg-pink-500 p-8"></div>
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse items-center justify-center gap-8 py-8 text-center md:flex-row md:items-center md:text-left">
          <div className="size-128 bg-white"></div>
          <h1 className="text-center text-6xl font-bold tracking-tight md:text-right">
            How to use the app ?
          </h1>
        </div>
        <Faqs />
        <hr className="mt-8 bg-white" />
        <Footer />
      </div>
    </div>
  );
}
