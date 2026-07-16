import React, { useState } from "react";
import { motion } from "motion/react";

const info = [
  {
    id: 0,
    questions: "Question1",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    questions: "Question2",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    questions: "Question3",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    questions: "Question4",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Faqs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative z-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
        animate={{ y: 0, opacity: 1, filter: "none" }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="m-8 p-8 text-center text-6xl tracking-tight"
      >
        Frequently asked questions
      </motion.h1>
      <div className="flex flex-col gap-4 rounded-md bg-black p-10 text-white">
        {info.map((items) => {
          return (
            <div key={items.id} className="mb-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl">{items.questions}</h2>
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
              {open === items.id && <p className="">{items.answer}</p>}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Faqs;
