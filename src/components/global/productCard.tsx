"use client";
import Image from "next/image";
import { useFarmState } from "@/lib/farmerProvider";
import { useState } from "react";

type JobcardProps = {
  id: string;
  price: number;
  title: string;
  image: string;
  quantity: number;
};

const ProductCard = ({ image, price, title, id, quantity }: JobcardProps) => {
  const { dispatch } = useFarmState();
  const [click, setClick] = useState(0);
  return (
    <section className="scroll-child relative bg-green-300/30 flex justify-center items-center rounded-lg">
      <p className="absolute top-0 bottom-0 left-0 right-0 grid place-content-center rounded-full bg-green-700 h-8 w-8 text-black">
        {quantity}
      </p>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="object-cover absolute top-0 left-0 right-0 bottom-0 object-center m-auto"
      />
      <div className="z-10 flex flex-col h-full py-2 justify-between">
        <p className="font-bold text-green-900 mx-auto">{title}</p>
        <button
          className="bg-green-600 hover:bg-green-900 mx-auto px-3 py-2 rounded-full"
          onClick={() => {
            setClick((prev) => prev + 1);
            click > 0
              ? dispatch({
                  type: "INC_CART",
                  payload: {
                    produce: {
                      id: id,
                      name: title,
                      photoId: image,
                      price: price,
                      quantity: 1,
                    },
                    produceId: id,
                    price: price,
                  },
                })
              : dispatch({
                  type: "ADD_CART",
                  payload: {
                    produce: {
                      id: id,
                      name: title,
                      photoId: image,
                      price: price,
                      quantity: 1,
                    },
                  },
                });
          }}
        >
          Add to Cart
        </button>
        <p className="text-green-400 mx-auto border-2 border-solid border-green-600/20 px-2 py-1 rounded-full">
          <del className="text-black/30 pr-2">${price}</del>${price * 0.9}
        </p>
      </div>
    </section>
  );
};

export default ProductCard;

// {
//   ...state.workspaces,
//   product:
//     state.workspaces.product.length > 0
//       ? state.workspaces.product.map((product) => {
//           if (product.id === action.payload.produceId)
//             return { ...product, quantity: product.quantity + 1 };
//           return product;
//         })
//       : [...state.workspaces.product, action.payload.produce],
// }

// return {
//   ...state,
//   workspaces: {
//     ...state.workspaces,
//     product: state.workspaces.product
//       .filter(
//         (produce) =>
//           produce.id !== action.payload.produceId ||
//           produce.quantity !== 0
//       )
//       .map((value) => ({ ...value, quantity: value.quantity - 1 })),
//   },
// };
