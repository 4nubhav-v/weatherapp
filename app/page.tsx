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
import { IconExclamationCircle } from "@tabler/icons-react";
import myScreenshot from "@/app/assets/Screenshot_20260716_154345.png";

export default function Home() {
  return (
    <div className="w-full bg-white selection:bg-black selection:text-white dark:bg-black">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden rounded-md px-4 py-4">
        <BackgroundRippleEffect />
        <Header />
        <div className="mt-60 w-full">
          <div className="flex w-full">
            <motion.h2
              initial={{ y: 10, opacity: 0, filter: "blur(2px)" }}
              animate={{ y: 0, opacity: 1, filter: "none" }}
              transition={{ duration: 0.3 }}
              className="relative z-10 mx-auto max-w-4xl items-baseline justify-center text-center text-2xl font-bold tracking-tight text-neutral-800 [text-shadow:0_4px_8px_rgba(0_0_0/0.2)] md:text-4xl lg:text-7xl dark:text-neutral-100 dark:[text-shadow:0_4px_8px_rgba(255_255_255/0.4)]"
            >
              Get the Weather reports on one
              <CanvasText
                text="click"
                className="m-2 text-9xl [text-shadow:0_4px_8px_rgba(0_0_0/0.2)] md:text-4xl lg:m-4 lg:text-7xl dark:[text-shadow:0_4px_8px_rgba(255_255_255/0.4)]"
                backgroundClassName="bg-neutral-800"
                colors={[
                  "var(--color-neutral-500)",
                  "var(--color-neutral-50)",
                  "var(--color-neutral-800)",
                  "var(--color-white)",
                ]}
                lineGap={10}
                animationDuration={10}
              />
            </motion.h2>
          </div>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto mt-10 max-w-xl text-center text-neutral-500 dark:text-neutral-400"
          >
            It use open metro api to fetch the forcast weather
          </motion.p>

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
          transition={{ delay: 0.3 }}
          className="relative z-10 mt-8 flex flex-col-reverse items-center justify-center gap-8 py-8 text-center md:flex-row md:items-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, filter: "blur(10px)" }}
            whileHover={{ filter: "blur(2px)" }}
            whileTap={{ filter: "blur(0px" }}
            className="rounded-2xl border-3 border-solid border-neutral-600"
          >
            <Image
              alt="img"
              src={myScreenshot}
              width={1000}
              height={800}
              className="rounded-2xl"
            />
          </motion.div>
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ delay: 0.8 }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              className="mb-4 text-center text-6xl font-bold tracking-tight [text-shadow:0_4px_8px_rgba(0_0_0/0.2)] md:text-left dark:[text-shadow:0_4px_8px_rgba(255_255_255/0.4)] dark:text-shadow-none"
            >
              How to use the app ?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              transition={{ delay: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-10 text-center text-neutral-500 md:text-left dark:text-neutral-300"
            >
              Just click the checkout button it will check for your geolocation
              api
            </motion.p>
            <motion.div
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.8 }}
              className="max-w-sm rounded-md border-2 border-red-950 bg-rose-200 px-2 py-4 text-sm text-red-800 shadow-xl dark:border-red-950 dark:bg-rose-950 dark:text-red-400 dark:shadow-none"
            >
              <div className="flex items-center gap-1">
                <IconExclamationCircle stroke={2} />
                <h1 className="mb-2 text-sm font-bold">Warning</h1>
              </div>
              This only works if the your browser supports geolocation api to
              know more Read this docs
              <Link
                className="pl-0.5"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API"
              >
                here
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <div className="mt-180"></div>
        <Faqs />
        <div className="mt-100"></div>
        <hr className="mt-8 bg-white" />
        <Footer />
      </div>
    </div>
  );
}
