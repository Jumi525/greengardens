"use client";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { cn } from "../../lib/utils/cn";
import Link from "next/link";
import {
  ArrowBigLeft,
  BookDown,
  Home,
  Settings,
  User,
  Users2,
} from "lucide-react";

const navlinks = [
  { name: "Home", link: <Home />, href: "home" },
  { name: "About", link: <Users2 />, href: "recommendation" },
  { name: "Shop", link: <Home />, href: "revenue" },
  { name: "Blog", link: <BookDown />, href: "bookings" },
  { name: "Product", link: <User />, href: "feedback" },
  { name: "Contact", link: <Settings />, href: "settings" },
];

const AsideNavLink = () => {
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
        "sidebar fixed top-0 left-0 h-full w-56 bg-[#737373] text-white transition-transform transform z-40",
        {
          "translate-x-0": isOpen,
          "-translate-x-40 rounded-tr-3xl rounded-br-3xl": !isOpen,
        }
      )}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="menu-icon text-2xl p-1 fixed bottom-4 right-4 hover:bg-[#7373FF] cursor-pointer z-50 rounded-xl border-2 border-solid border-green-900"
      >
        {!isOpen ? <IoMdClose /> : <ArrowBigLeft />}
      </div>
      <div
        className={cn("p-4 flex flex-col gap-5", {
          "max-w-max ml-auto": !isOpen,
        })}
      >
        {navlinks.map((value, index) => (
          <Link
            key={index}
            href={`${value.href}`}
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AsideNavLink;
