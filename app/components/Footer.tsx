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
    <div key={item.id} className="flex w-24 max-w-4xl flex-col gap-2 px-24">
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
      <div className="flex items-center justify-between bg-white p-10 text-black">
        <div className="flex max-w-2xl flex-col gap-4">
          {" "}
          <p>logo</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            laboriosam voluptatum odit maiores voluptatem consequuntur ratione,
            cupiditate reiciendis cum voluptate, assumenda labore ex enim id
            consectetur ducimus repellendus ea quos!
          </p>
          <p>icons</p>
        </div>
        <div className="flex flex-row gap-4">{getFooterUrl()}</div>
      </div>
      <hr className="mt-24 mb-10 bg-gray-300" />
      <h1>
        Copyright © {new Date().getFullYear()} Your Company. All rights
        reserved.
      </h1>
    </div>
  );
};

export default Footer;
