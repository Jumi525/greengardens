"use client";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { cn } from "../../lib/utils/cn";
import Link from "next/link";
import { ArrowBigLeft, Home, Settings, User, Users2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const navlinks = [
  { name: "Home", link: <Home />, href: "home" },
  { name: "Community", link: <Users2 />, href: "community" },
  { name: "Shop", link: <Home />, href: "shop" },
  { name: "Revenue", link: <User />, href: "revenue" },
  { name: "Settings", link: <Settings />, href: "settings" },
];

const AsideNavLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");
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
          <>
            {value.href === "settings" ? (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button
                    key={index}
                    onClick={() => setIsActive(value.href)}
                    className={cn(
                      " p-1 border-2 border-solid flex items-center rounded-lg px-1 text-gray-900",
                      {
                        "border-green-900 hover:bg-[#7373FF]": !isOpen,
                        " hover:bg-[#7373FF] pl-2": isOpen,
                        "bg-[#7373FF]": isActive === value.href,
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
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{value.name}</DialogTitle>
                  </DialogHeader>
                  <DialogDescription asChild>
                    <form className="flex flex-col gap-2">
                      <input
                        placeholder="Full name"
                        className="py-1 pl-2 border-2 border-solid border-black"
                      />
                      <input
                        placeholder="Title"
                        // value={state.workspaces.map}
                        className="py-1 pl-2 border-2 border-solid border-black"
                      />
                      <input
                        placeholder="Location"
                        className="py-1 pl-2 border-2 border-solid border-black"
                      />
                      <button
                        type="submit"
                        className="bg-black py-2 w-full text-white rounded-md mt-auto mb-1"
                      >
                        Submit
                      </button>
                    </form>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            ) : (
              <Link
                key={index}
                href={`${value.href}`}
                onClick={() => setIsActive(value.href)}
                className={cn(
                  " p-1 border-2 border-solid flex items-center rounded-lg px-1 text-gray-900",
                  {
                    "border-green-900 hover:bg-[#7373FF]": !isOpen,
                    " hover:bg-[#7373FF] pl-2": isOpen,
                    "bg-[#7373FF]": isActive === value.href,
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
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default AsideNavLink;
