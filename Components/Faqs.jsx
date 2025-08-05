import React, { useState } from "react";
import faqs from "../Constants/faqs.js";
import faqsImage from "../src/assets/faqsImage.webp";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <section id="faqs" className="scroll-mt-14 max-w-7xl mx-auto px-10 py-2">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 underline">FAQs</h2>
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 pb-6 border-b-2 border-b-gray-400">
        <div className="max-w-xl md:max-w-md space-y-4 ">
          {faqs.map((ques, index) => (
            <div key={index} className="border rounded-xl">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center px-4 py-3"
              >
                <span>{ques.question}</span>
                <span>{openIndex === index ? "-" : "+ "}</span>
              </button>

              <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out text-gray-600 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                {ques.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="-order-1 md:order-1 ">
          <img
            src={faqsImage}
            alt="FAQs"
            className="w-[200px] sm:w-[200px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
