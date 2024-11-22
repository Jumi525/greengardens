"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const navlinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Shop", link: "#shop" },
  { name: "Blog", link: "#blog" },
  { name: "Product", link: "#product" },
  { name: "Profile", link: "/app/profile/home" },
  { name: "Sign Up", link: "signup" },
];

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Carts = ({ isOpen, setIsOpen }: NavbarProps) => {
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
      className={`sidebar fixed top-0 left-0 h-full w-56 bg-[#737373] text-white 
      transition-transform transform z-40  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="menu-icon text-2xl p-1 fixed top-4 right-4 hover:bg-[#7373FF] cursor-pointer z-50 rounded-xl border-2 border-solid border-green-900"
      >
        <IoMdClose />
      </div>
      <div className="pt-20 p-4">
        {navlinks.map((value) => (
          <Link
            key={value.link}
            href={value.link}
            className={clsx("block py-2 px-4 hover:bg-[#7373FF]", {
              "sm:hidden": value.link === "signup",
            })}
          >
            {value.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Carts;
