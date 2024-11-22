"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Filter, HomeIcon, MousePointer2 } from "lucide-react";
import { IoMdCart } from "react-icons/io";
import { signOut } from "@/lib/queries";
import Carts from "@/components/products/carts";
import ProductCard from "@/components/global/productCard";
import { useFarmState } from "@/lib/farmerProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Jobpages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useFarmState();
  console.log(state);
  const [product] = useState([
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
      <section className="bg-green-900 py-4 items-center gap-2 flex justify-between px-[16px] gridchild1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Filter className="h-[35px] w-[35px] p-2 min-w-max bg-[#737373] rounded-full cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              Price
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Name</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <HomeIcon className="h-[35px] cursor-pointer w-[35px] p-2 min-w-max bg-[#737373]  rounded-full hover:bg-[#737399]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => signOut()}
                className="cursor-pointer"
              >
                Log out
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={"/app/profile/home"}>Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <IoMdCart
            onClick={() => setIsOpen(!isOpen)}
            className="h-[35px] w-[35px] p-2 min-w-max bg-[#737373] cursor-pointer rounded-full"
          />
        </div>
      </section>
      <Carts isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className="gridchild2 has-scroll">
        {product.map((val, index) => (
          <ProductCard
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
