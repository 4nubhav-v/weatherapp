import React, { useState } from "react";
import { motion } from "motion/react";

const info = [
  {
    id: 0,
    questions: "What all tech related tools are used ?",
    answer:
      "It uses React for frontend, Nextjs for react Framework, tailwindcss for styling, and Motion for animations ",
  },
  {
    id: 1,
    questions: "What api it use to fetch the temperature ?",
    answer:
      "It use openmetro api to fetch the current temperature, humdity, UI Index, ",
  },
  {
    id: 2,
    questions: "Is this hardcoded ?",
    answer: "No.",
  },
];

function Faqs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="h-7xl relative z-10 w-screen"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
        animate={{ y: 0, opacity: 1, filter: "none" }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-48 p-8 text-center text-6xl font-bold tracking-tight [text-shadow:0_4px_8px_rgba(0_0_0/0.2)] dark:[text-shadow:0_4px_8px_rgba(255_255_255/0.4)]"
      >
        Frequently asked questions
      </motion.h1>
      <div className="flex flex-col gap-10 rounded-md bg-white p-10 text-black dark:bg-black dark:text-white">
        {info.map((items) => {
          return (
            <div
              key={items.id}
              className="mb-4 flex flex-1 flex-col gap-10 px-1 md:px-36"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-neutral-200">
                  {items.questions}
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 cursor-pointer rounded-sm"
                  onClick={() => {
                    setOpen(open === items.id ? null : items.id);
                  }}
                >
                  {open === items.id ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  )}
                </svg>
              </div>
              {open === items.id && (
                <p className="text-neutral-400">{items.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Faqs;
