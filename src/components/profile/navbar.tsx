"use client";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { cn } from "../../lib/utils/cn";
import { ArrowBigLeft, Home, Hourglass } from "lucide-react";

const navlinks = [
  { name: "Home", link: <Home /> },
  { name: "About", link: <Hourglass /> },
  { name: "Shop", link: <Home /> },
  { name: "Blog", link: <Home /> },
  { name: "Product", link: <Home /> },
  { name: "Contact", link: <Home /> },
];

const AsideNavButton = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      className={cn(
        "sidebar fixed bottom-0 left-0 [height:calc(100vh-70px)] w-56 bg-[#737373] text-white transition-transform transform z-40",
        {
          "translate-x-0": isOpen,
          "-translate-x-40 rounded-tr-3xl rounded-br-3xl": !isOpen,
        }
      )}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="menu-icon text-2xl p-1 fixed top-4 right-4 hover:bg-[#7373FF] cursor-pointer z-50 rounded-xl border-2 border-solid border-green-900"
      >
        {!isOpen ? <IoMdClose /> : <ArrowBigLeft />}
      </div>
      <div
        className={cn("p-4 mt-20 flex flex-col gap-5", {
          "max-w-max ml-auto": !isOpen,
        })}
      >
        {navlinks.map((value, index) => (
          <button
            key={index}
            className={cn(
              " p-1 border-2 border-solid flex items-center rounded-lg px-1 text-gray-900",
              {
                "border-green-900 hover:bg-[#7373FF]": !isOpen,
                " hover:bg-[#7373FF] pl-2": isOpen,
              }
            )}
          >
            {value.link}
            <p
              className={cn("pl-3 hidden", {
                block: isOpen,
              })}
            >
              {value.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default AsideNavButton;
