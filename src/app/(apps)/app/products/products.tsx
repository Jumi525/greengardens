"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Filter, HomeIcon, MousePointer2 } from "lucide-react";
import Jobcard from "@/components/global/productCard";

import { IoMdCart } from "react-icons/io";
import { signOut } from "@/lib/queries";

// const navlinks = [
//   {
//     href: "Location",
//     link: <LocateFixed />,
//   },
//   {
//     href: "Pay",
//     link: <CircleDollarSign />,
//   },
//   {
//     href: "Title",
//     link: <Captions />,
//   },
//   {
//     href: "Applicant",
//     link: <Users />,
//   },
//   {
//     href: "Time",
//     link: <Timer />,
//   },
// ];

const Jobpages = () => {
  const [profileJob] = useState([
    {
      price: 200,
      title: "Orange",
      image: "/asset/product-1.png",
    },
    {
      price: 200,
      title: "Orange",
      image: "/asset/product-2.png",
    },
    {
      price: 200,
      title: "Orange",
      image: "/asset/product-3.png",
    },
    {
      price: 200,
      title: "Orange",
      image: "/asset/product-4.png",
    },
    {
      price: 200,
      title: "Orange",
      image: "/asset/product-5.png",
    },
    {
      price: 200,
      title: "Orange",
      image: "/asset/product-6.png",
    },
    {
      price: 200,
      title: "Orange",
      image: "/asset/product-7.png",
    },
    {
      price: 200,
      title: "Orange",
      image: "/asset/product-8.png",
    },
  ]);

  return (
    <main className="gridmain bg-[#9A8499]/50">
      <section className="bg-[#052620] py-4 items-center gap-2 flex justify-between px-[16px] gridchild1">
        <Filter
          className="h-[35px] w-[35px] p-2 min-w-max bg-[#EAD494]/90 rounded-full"
          onClick={() => signOut()}
        />
        <form className=" outline-none w-full max-w-[300px] sm:max-w-[350px] rounded-full bg-[#9A8499]/20 focus-within:outline-[#EAD494] py-[3px] pl-4 pr-1 gap-2 flex items-center">
          <input
            placeholder="Search"
            className="outline-none bg-transparent w-full"
          />
          <button className="rounded-full p-1 bg-[#052620]/80">
            <MousePointer2 />
          </button>
        </form>
        <div className="flex space-x-2">
          <Link href={"/app/profile"}>
            <HomeIcon className="h-[35px] w-[35px] p-2 min-w-max bg-[#EAD494]/90  rounded-full" />
          </Link>
          <IoMdCart className="h-[35px] w-[35px] p-2 min-w-max bg-[#EAD494]/90  rounded-full" />
        </div>
      </section>
      <section className="gridchild2 has-scroll">
        {profileJob.map((val, index) => (
          <Jobcard
            key={index}
            price={val.price}
            title={val.title}
            image={val.image}
          />
        ))}
      </section>
    </main>
  );
};

export default Jobpages;

// import {
//   Captions,
//   CircleDollarSign,
//   HomeIcon,
//   LocateFixed,
//   MousePointer2,
//   Timer,
//   Users,
// } from "lucide-react";
