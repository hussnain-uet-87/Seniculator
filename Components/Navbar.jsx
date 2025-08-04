import React, { useState } from "react";
import LINKS from "../Constants/navabr";

const Navbar = () => {
  // variables for navbar expand and closure
  const [isOpen, setIsOpen] = useState(false);
  const toggleMemu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav  className="border-b-2 mx-6 mt-3">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        {/* top logo text + hamburger for mobile screens */}
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center">
            <p className="text-lg md:text-2xl font-bold"> Seniculator</p>
            <p className="hidden lg:block md:text-xl ">
              {" "}
              &nbsp;- Simplify Your Scores
            </p>
          </div>
        </div>
        <button
          onClick={toggleMemu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-menu-3-line"></i>
          )}
        </button>
        {/* desktop view */}
        <div className="hidden tracking-wide md:flex space-x-6 items-center justify-end">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
        </div>
        {/* Mobile view */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 tracking-wide items-center mt-4 py-4 bg-neutral-50 border-t-1">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="uppercase font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
    </nav>
  );
};

export default Navbar;
