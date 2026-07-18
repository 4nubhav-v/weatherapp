import { motion } from "motion/react";
const footerUrl = [
  {
    id: 0,
    title: "Solutions",
    subtitle: [
      { topics: "Marking", url: "https:example.com" },
      { topics: "Analytics", url: "https:example.com" },
      { topics: "Commerce", url: "https:example.com" },
      { topics: "Insights", url: "https:example.com" },
    ],
  },
  {
    id: 1,
    title: "Support",
    subtitle: [
      { topics: "Pricing", url: "https:example.com" },
      { topics: "Documentation", url: "https:example.com" },
      { topics: "Guides", url: "https:example.com" },
      { topics: "API Status", url: "https:example.com" },
    ],
  },
  {
    id: 2,
    title: "Company",
    subtitle: [
      { topics: "About", url: "https:example.com" },
      { topics: "Blog", url: "https:example.com" },
      { topics: "Jobs", url: "https:example.com" },
      { topics: "Press", url: "https:example.com" },
      { topics: "Partners", url: "https:example.com" },
    ],
  },
  {
    id: 3,
    title: "Legal",
    subtitle: [
      { topics: "Claim", url: "https:example.com" },
      { topics: "Privacy", url: "https:example.com" },
      { topics: "Terms", url: "https:example.com" },
    ],
  },
];

const getFooterUrl = () => {
  return footerUrl.map((item) => (
    <div
      key={item.id}
      className="flex max-w-4xl flex-col gap-2 px-4 md:w-24 md:px-12 lg:px-24"
    >
      <h3 className="text-normal mb-4 font-semibold">{item.title}</h3>
      <ul>
        {item.subtitle.map((subItem) => (
          <li
            key={subItem.topics}
            className="text-normal gap-2 py-2 text-gray-500 hover:text-gray-900"
          >
            <a href={subItem.url} target="_blank" rel="noopener noreferrer">
              {subItem.topics}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ));
};

const Footer = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 flex flex-col items-center justify-between bg-white p-10 text-black md:flex-row dark:bg-black dark:text-white"
      >
        <div className="flex flex-col gap-4 md:max-w-2xl">
          {" "}
          <p className="text-center md:text-left">logo</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            laboriosam voluptatum odit maiores voluptatem consequuntur ratione,
            cupiditate reiciendis cum voluptate, assumenda labore ex enim id
            consectetur ducimus repellendus ea quos!
          </p>
          <p className="text-center md:text-left">icons</p>
        </div>
        <div className="flex flex-row md:gap-4">{getFooterUrl()}</div>
      </motion.div>
      <hr className="mt-25 mb-10 bg-gray-300" />
      <h1 className="text-center md:text-left">
        Copyright © {new Date().getFullYear()} Your Company. All rights
        reserved.
      </h1>
      <a
        className="relative z-10 text-center md:text-left"
        href="mailto:4nubhav@proton.me"
      >
        Email Me
      </a>
    </div>
  );
};

export default Footer;
