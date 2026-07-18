"use client";

import React from "react";
import Link from "next/link";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { motion } from "motion/react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { CanvasText } from "@/components/ui/canvas-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { IconChevronRight } from "@tabler/icons-react";
import myScreenshot from "@/app/assets/Screenshot_20260716_154345.png";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden rounded-md px-4 py-4">
        <BackgroundRippleEffect />
        <Header />
        <div className="mt-60 w-full">
          <div className="flex">
            <motion.h2
              initial={{ y: 10, opacity: 0, filter: "blur(2px)" }}
              animate={{ y: 0, opacity: 1, filter: "none" }}
              transition={{ duration: 0.3 }}
              className="relative z-10 mx-auto max-w-4xl items-baseline justify-center text-center text-2xl font-bold tracking-tight text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100"
            >
              Get the Weather reports on one
              <CanvasText
                text="click"
                className="m-2 text-2xl md:text-4xl lg:m-4 lg:text-7xl"
                backgroundClassName="bg-neutral-800"
                colors={[
                  "var(--color-blue-500)",
                  "var(--color-sky-500)",
                  "var(--color-violet-500)",
                  "var(--color-teal-500)",
                ]}
                lineGap={10}
                animationDuration={10}
              />
            </motion.h2>
          </div>
          <p className="relative z-10 mx-auto mt-10 max-w-xl text-center text-neutral-100 dark:text-neutral-500">
            It use open metro api to fetch the forcast weather
          </p>

          <div className="relative z-10 mt-8 flex justify-center">
            <Link href="/status">
              <MagneticButton>
                <button className="from-white-500 flex cursor-pointer rounded-lg bg-white px-4 py-2 font-medium text-black ring-1 ring-white/20 ring-offset-1 ring-offset-neutral-500 transition-transform duration-150 ring-inset active:scale-98">
                  Checkout
                  <IconChevronRight stroke={2} />
                </button>
              </MagneticButton>
            </Link>
          </div>
        </div>
        <div className="mt-180"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 mt-8 flex flex-col-reverse items-center justify-center gap-8 py-8 text-center md:flex-row md:items-center md:text-left"
        >
          <Image alt="img" src={myScreenshot} width={1000} height={800} />
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <h1 className="text-center text-6xl font-bold tracking-tight md:text-left">
              How to use the app ?
            </h1>
            <p className="text-center text-neutral-300 md:text-left">
              just click the checkout button it will check for ur geolocation
              api{" "}
            </p>
            <div className="max-w-sm rounded-sm border-2 border-red-950 bg-rose-950 px-2 py-4 text-sm text-red-400">
              <h1 className="mb-4 text-sm font-bold">Warning</h1>
              This only works if the your browser supports geolocation api to
              know more Read this docs
              <Link
                className="pl-0.5"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API"
              >
                here
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="mt-100"></div>
        <Faqs />
        <div className="mt-100"></div>
        <hr className="mt-8 bg-white" />
        <Footer />
      </div>
    </div>
  );
}
