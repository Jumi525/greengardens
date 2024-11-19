"use client";
import Image from "next/image";

type JobcardProps = {
  price: number;
  title: string;
  image: string;
};

const Jobcard = ({ image, price, title }: JobcardProps) => {
  return (
    <section className="scroll-child relative bg-green-300/30 flex justify-center items-center rounded-lg">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="object-cover absolute top-0 left-0 right-0 bottom-0 object-center m-auto"
      />
      <div className="z-10 flex flex-col h-full py-2 justify-between">
        <p className="font-bold text-green-900 mx-auto">{title}</p>
        <button className="bg-green-600 mx-auto px-3 py-2 rounded-full">
          Add to Cart
        </button>
        <p className="text-green-400 mx-auto border-2 border-solid border-green-600/20 px-2 py-1 rounded-full">
          <del className="text-black/30 pr-2">${price}</del>${price * 0.9}
        </p>
      </div>
    </section>
  );
};

export default Jobcard;
