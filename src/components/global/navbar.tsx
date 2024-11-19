"use client";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const navlinks = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Shop", link: "shop" },
  { name: "Blog", link: "blog" },
  { name: "Product", link: "product" },
  { name: "Contact", link: "contact" },
];

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: NavbarProps) => {
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as Element;
      if (!target?.closest(".sidebar") && !target?.closest(".menu-icon")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);
  return (
    <section
      className={`sidebar fixed top-0 left-0 h-full w-56 bg-[#737373] md:text-[#737373] md:bg-transparent text-white 
      transition-transform transform z-40 md:static md:w-[500px] md:z-0  ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="menu-icon md:hidden text-2xl p-1 fixed top-4 right-4 hover:bg-[#7373FF] cursor-pointer z-50 rounded-xl border-2 border-solid border-green-900"
      >
        <IoMdClose />
      </div>
      <div className="pt-20 md:pt-0 p-4 md:p-0 md:flex md:justify-around">
        {navlinks.map((value) => (
          <a
            key={value.link}
            href="#"
            className="block py-2 px-4 hover:bg-[#7373FF] md:hover:text-[#7373FF] md:hover:bg-transparent"
          >
            {value.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Navbar;

// sm:bg-red-500 sm:max-w-max sm:z-0 sm:mx-auto sm:static sm:max-h-max sm:flex sm:flex-grow md:flex-row md:static md:w-full md:flex-grow md:max-w-[500px] md:mx-auto md:justify-between md:text-[#EAD494] sm:text-black
