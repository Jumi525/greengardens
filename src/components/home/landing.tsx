import Image from "next/image";
import React from "react";
import veges from "../../../public/asset/hero-banner.png";
import shipping from "../../../public/asset/service-icon-1.png";
import payment from "../../../public/asset/service-icon-2.png";
import service from "../../../public/asset/service-icon-3.png";
import fresh from "../../../public/asset/filter-1-active.png";
import meat from "../../../public/asset/filter-2.png";
import food from "../../../public/asset/filter-3-active.png";
import product from "../../../public/asset/filter-3.png";
import offer from "../../../public/asset/cta-bg.png";
import Rquote from "../../../public/asset/quote-right.png";
import Lquote from "../../../public/asset/quote-left.png";
import tes1 from "../../../public/asset/testimonial-1.jpg";
import tes2 from "../../../public/asset/testimonial-3.jpg";
import tes3 from "../../../public/asset/testimonial-2.jpg";

import { Star } from "lucide-react";
import Link from "next/link";

const Landing = () => {
  return (
    <main>
      <section className=" grid sm:grid-cols-2 px-4 items-center py-7">
        <div className="flex flex-col gap-3 sm:gap-4 max-w-[330px] md:max-w-[400px] mx-auto pb-4 sm:pb-0">
          <p className="text-green-400">25% off all products</p>
          <h1 className="font-bold text-3xl md:text-4xl">
            Quality <span className="text-green-700">organic</span> fruit &{" "}
            <span className="text-green-700">vegetables</span>
          </h1>
          <p className="text-black/60 text-base">
            `&quot; Experience the purity of naturew with our carefully selected
            organic foods. Grown without synthetic pesticides or GMOs, our
            products sre sustainable sourced to support a healthier lifestyle
            and thriving planet `&quot;
          </p>
          <Link
            href={"/app/products"}
            className="bg-green-700 px-5 py-3 max-w-max rounded-full"
          >
            Shop Now
          </Link>
        </div>

        <Image
          src={veges}
          alt="veges"
          width={300}
          height={300}
          className="mx-auto"
        />
      </section>
      <section className="text-white grid sm:grid-cols-3 bg-green-400 px-4">
        <div className="flex items-center gap-3 mx-auto  justify-center h-32">
          <figure className="bg-green-500 p-2 rounded-full max-w-max ">
            <Image src={shipping} alt="shipping" height={40} width={40} />
          </figure>
          <p>Free Shipping</p>
        </div>
        <div className="flex items-center gap-3 mx-auto h-32 justify-center">
          <figure className="bg-green-500 p-2 rounded-full max-w-max ">
            <Image src={payment} alt="shipping" height={40} width={40} />
          </figure>
          <p>Safe Payment</p>
        </div>
        <div className="flex items-center gap-3 mx-auto justify-center h-32">
          <figure className="bg-green-500 p-2 rounded-full max-w-max ">
            <Image src={service} alt="shipping" height={40} width={40} />
          </figure>
          <p>24/7 support</p>
        </div>
      </section>
      <section className="py-7 px-4">
        <p className="text-green-400 mx-auto max-w-max py-4 ">
          -- Organic Products --
        </p>
        <h2 className="mx-auto max-w-max font-bold text-3xl md:text-4xl pb-4">
          All Organic Products
        </h2>
        <div className=" flex flex-wrap gap-4 justify-center text-black/80">
          <div className="bg-green-400 flex items-center w-48 gap-2 px-2 py-2">
            <Image src={fresh} alt="fresh" />
            <span>Fresh Vegetables</span>
          </div>

          <div className="bg-green-400 flex items-center gap-2 w-48 px-2 py-2">
            <Image src={meat} alt="fresh" />
            <span>Fish & Meat</span>
          </div>
          <div className="bg-green-400 flex items-center gap-2 w-48 px-2 py-2">
            <Image src={product} alt="fresh" />
            <span>Healthy Fruit</span>
          </div>
          <div className="bg-green-400 flex items-center gap-2 w-48 px-2 py-2">
            <Image src={food} alt="fresh" />
            <span>Dairy Products</span>
          </div>
        </div>
      </section>
      <section className="my-7  px-4 relative bg-green-500/40">
        <figure className="h-[300px] relative overflow-hidden -z-10">
          <Image
            src={offer}
            alt="offer"
            width={1024}
            height={250}
            className="absolute w-full top-0 object-left bottom-0 left-0 right-0 h-[300px] object-cover"
          />
        </figure>
        <section className="absolute top-0 bottom-0 left-0 right-0 m-auto  grid place-content-center">
          <div className="flex flex-col gap-3 sm:gap-4 max-w-[400px] md:max-w-[450px] mx-auto pb-4 sm:pb-0">
            <p className="text-green-400 mx-auto">Summer Offer</p>
            <h2 className="font-bold text-3xl md:text-4xl mx-auto">
              Up To 50% Off All Product
            </h2>
            <p className="text-black/70 mx-auto text-center">
              From farm to table we prioritize quality freshness and ethnical
              farming practices
            </p>
            <button className="bg-green-700 mx-auto px-5 py-3 max-w-max rounded-full">
              Shop Now
            </button>
          </div>
        </section>
      </section>
      <section className="px-4 py-7 w-full">
        <p className="text-green-400 mx-auto max-w-max ">Ratings</p>
        <h2 className="font-bold text-3xl md:text-4xl mx-auto max-w-max pt-4">
          Client Feedback
        </h2>
        <div className="verticalsscroll mt-7 flex justify-around max-w-[1024px] mx-auto gap-3">
          <div className="verticalschild flex-shrink-0 bg-green-100 max-w-[315px] px-2 py-4 flex flex-col gap-4 rounded-lg">
            <div className="flex items-center gap-5 justify-center">
              <Image src={Lquote} alt="lQ" />
              <Image
                src={tes1}
                alt="tes1"
                height={45}
                width={45}
                className="rounded-full"
              />
              <Image src={Rquote} alt="RQ" />
            </div>
            <div className="flex gap-1 mx-auto">
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
            </div>
            <p className="text-black/60 text-center text-sm">
              The freshness of the organic produce from this site is unmatched,
              i can taste the difference in every bite
            </p>
            <p className="font-bold mx-auto">Nicolas Eve</p>
          </div>
          <div className="verticalschild flex-shrink-0 bg-green-100 max-w-[315px] px-2 py-4 flex flex-col gap-4 rounded-lg">
            <div className="flex items-center gap-5 justify-center">
              <Image src={Lquote} alt="lQ" />
              <Image
                src={tes2}
                alt="tes1"
                height={45}
                width={45}
                className="rounded-full"
              />
              <Image src={Rquote} alt="RQ" />
            </div>
            <div className="flex gap-1 mx-auto">
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
            </div>
            <p className="text-black/60 text-center text-sm">
              I love knowing that my family is eating free foods from chemical.
              the product gotten from here gives me peace of mind
            </p>
            <p className="font-bold mx-auto">Nico Thompson</p>
          </div>
          <div className="verticalschild flex-shrink-0 bg-green-100 max-w-[315px] px-2 py-4 flex flex-col gap-4 rounded-lg">
            <div className="flex items-center gap-5 justify-center">
              <Image src={Lquote} alt="lQ" />
              <Image
                src={tes3}
                alt="tes1"
                height={45}
                width={45}
                className="rounded-full"
              />
              <Image src={Rquote} alt="RQ" />
            </div>
            <div className="flex gap-1 mx-auto">
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
              <Star className="fill-yellow-400 text-yellow-400 size-4" />
            </div>
            <p className="text-black/60 text-center text-sm">
              I have notice a huge improvemnet in my overall health since
              switching to organic. thank you for your committment to organic
            </p>
            <p className="font-bold mx-auto">Son Sunday</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
