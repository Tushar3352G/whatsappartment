import { useState } from "react";

const Accordions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title:
        "On average, how long does it take to find a home through Rentbird?",
      content:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
    },
    {
      title: "How does WhatApartment work?",
      content:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
    },
    {
      title: "Do you also rent out homes?",
      content:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
    },
    {
      title: "Why should I pay for WhatApartment?",
      content:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
    },
    {
      title: "Do you guarantee it works?",
      content:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
    },
    {
      title: "I see a property I like. How can I view it?",
      content:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
    },
    {
      title: "What if I'm unhappy?",
      content:
        "Sit back and relax as we scan +100 listing websites every minute. Less time searching, more time imagining where to put your couch.",
    },
  ];

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-10">
      {accordionData.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-xl overflow-hidden mb-5">
          <div
            className={`flex justify-between items-center py-3 px-3 cursor-pointer transition-all ${
              openIndex === index ? "bg-gray-300" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <i className="ri-arrow-down-s-line text-2xl"></i>
            </span>
          </div>
          <div
            className="overflow-hidden transition-all duration-500 !px-[10px]"
            style={{
              maxHeight: openIndex === index ? "200px" : "0",
              padding: openIndex === index ? "20px" : "0",
            }}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordions;
