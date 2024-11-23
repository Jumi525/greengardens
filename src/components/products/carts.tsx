"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Minus, Plus } from "lucide-react";
import { useFarmState } from "@/lib/farmerProvider";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Carts = ({ isOpen, setIsOpen }: NavbarProps) => {
  const { state, dispatch } = useFarmState();
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
      className={`sidebar fixed top-0 left-0 h-full w-56 bg-[#737373] text-white flex flex-col
      transition-transform transform z-40  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="menu-icon text-2xl p-1 ml-auto mt-4 mr-4 hover:bg-[#7373FF] cursor-pointer z-50 rounded-xl"
      >
        <IoMdClose />
      </div>
      <div className="pt-12 scrollparent py-4 px-2 w-full ">
        {state.workspaces.product.map((value, index) => (
          <div
            key={index}
            className="grid grid-cols-4 scrollchild items-center border-b-2 border-solid border-[#737399] text-sm w-full py-2 first-of-type:border-t-2 first-of-type:border-solid first-of-type:border-[#737399]"
          >
            <Image
              src={value.photoId}
              alt="cart"
              height={50}
              width={50}
              className="block"
            />
            <p className="max-w-max text-green-900">{value.name}</p>
            <p className="max-w-max text-green-600">${value.price}</p>
            <div className="h-4 max-w-max w-full -ml-3 flex items-center gap-1">
              <div
                className="w-6 h-6 bg-green-400 hover:bg-foreground rounded-full"
                onClick={() =>
                  dispatch({
                    type: "INC_CART",
                    payload: {
                      produce: {
                        id: value.id,
                        name: value.name,
                        photoId: value.photoId,
                        price: value.price,
                        quantity: 1,
                      },
                      produceId: value.id,
                    },
                  })
                }
              >
                <Plus />
              </div>
              <p>{value.quantity}</p>
              <div
                className="w-6  h-6 bg-green-400 hover:bg-foreground rounded-full "
                onClick={() =>
                  dispatch({
                    type: "DEC_CART",
                    payload: {
                      produce: {
                        id: value.id,
                        name: value.name,
                        photoId: value.photoId,
                        price: value.price,
                        quantity: 1,
                      },
                      produceId: value.id,
                    },
                  })
                }
              >
                <Minus />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carts;

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

// state.workspaces.product.map((cart) =>
//   cart.id === id
//     ? dispatch({
//         type: "ADD_CART",
//         payload: {
//           produce: {
//             id: id,
//             name: title,
//             photoId: image,
//             price: price,
//             quantity: 1,
//           },
//         },
//       })
//     : console.log("hello")
// )

// state.workspaces.product.length !== 0
//               ? state.workspaces.product.map((product) => {
//                   console.log(product.id !== id, "ids");
//                   console.log(product.id, id, "ids check");
//                   product.id !== id &&
//                     dispatch({
//                       type: "ADD_CART",
//                       payload: {
//                         produce: {
//                           id: id,
//                           name: title,
//                           photoId: image,
//                           price: price,
//                           quantity: 1,
//                         },
//                       },
//                     });
//                 })
//               : dispatch({
//                   type: "ADD_CART",
//                   payload: {
//                     produce: {
//                       id: id,
//                       name: title,
//                       photoId: image,
//                       price: price,
//                       quantity: 1,
//                     },
//                   },
//                 });
