import Link from "next/link";
import React from "react";
import { Facebook, Instagram, MousePointer2, Twitter } from "lucide-react";
import Image from "next/image";
import Lbanner from "../../../public/asset/partner-left-bg.png";
import Rbanner from "../../../public/asset/partner-right-bg.png";

const footerLink1 = [
  { href: "", link: "About us" },
  { href: "", link: "Features" },
  { href: "", link: "News" },
  { href: "", link: "Menu" },
];
const footerLink2 = [
  { href: "", link: "Why Us" },
  { href: "", link: "Contact us" },
  { href: "", link: "FAQ" },
  { href: "", link: "Feedback" },
];

const Footer = () => {
  return (
    <section className=" px-4 bg-green-400 transition-all relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-4 pb-8 mx-auto gap-6 md:gap-0">
        <div id="contact" className=" flex flex-col gap-4">
          <p className="font-[900] text-2xl text-[#737373] ">Green Garden</p>
          <p className="max-w-[300px] sm:max-w-[250px]">
            We always makes our customer happy by providing as many chances as
            possible
          </p>
          <div className="flex gap-2">
            <span className=" rounded-full p-2 bg-red-700/15 hover:bg-[#052620]/40">
              <Twitter />
            </span>
            <span className="hover:bg-[#052620]/40 bg-red-700/15 rounded-full p-2">
              <Instagram />
            </span>
            <span className="hover:bg-[#052620]/40 bg-red-700/15 rounded-full p-2">
              <Facebook />
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-[1px] sm:pl-4">
          <p className="font-bold pb-1">About</p>
          {footerLink1.map((footer, index) => (
            <Link key={index} href={footer.href}>
              {footer.link}
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col gap-[1px]">
          <p className="font-bold pb-1">Company</p>
          {footerLink2.map((footer, index) => (
            <Link key={index} href={footer.href}>
              {footer.link}
            </Link>
          ))}
        </ul>
        <div id="feedback">
          <p className="font-bold">Get in Touch</p>
          <p className="py-2">
            Question or Feedback? we will love to hear from you ❤️
          </p>
          <div className=" outline-none rounded-full border-2 border-[#052620] max-w-max py-1 pl-4 pr-1 gap-2 flex items-center">
            <input className="outline-none bg-transparent min-w-11" />
            <button className="rounded-full p-1 bg-[#052620]/80">
              <MousePointer2 />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-[#052620]/40 gap-2 flex flex-col sm:flex-row text-sm py-3 justify-center items-center sm:justify-start">
        <span>
          @Copyright 2024 made by{" "}
          <span className="text-[#EAD494]">GreenGarden</span>
        </span>
        <div className="sm:ml-auto flex items-center gap-6  max-w-max">
          <p>Terms and condition</p>
          <p>privacy and policy</p>
        </div>
      </div>
      <Image
        src={Rbanner}
        alt="banner footer"
        height={300}
        width={300}
        className="absolute top-0 right-0 md:h-[200px] md:w-[200px]"
      />
      <Image
        src={Lbanner}
        alt="banner footer"
        height={300}
        width={300}
        className="absolute bottom-0 left-0 md:h-[200px] md:w-[200px]"
      />
    </section>
  );
};

export default Footer;
