"use client";
import React, { useRef, useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

type cloudProps = { public_id: string };

const Produce = () => {
  const [publicIds, setPublicIds] = useState<string[]>([]);
  const [close, setClose] = useState(false);
  const name = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  console.log(publicIds);
  return (
    <section className="grid grid-rows-[50px_1fr] gap-2 relative px-3 h-screen">
      <button onClick={() => setClose(!close)} className="bg-green-400">
        Upload A produce
      </button>
      {close && (
        <div className="absolute pointer-events-none h-screen w-screen top-0 right-0 left-0 bottom-0 bg-white/50 z-20"></div>
      )}
      <CldUploadWidget
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        uploadPreset="gdbybt2f"
        onSuccess={(result) => {
          console.log(result);
          setClose(false);
          const results = result.info as cloudProps;
          setPublicIds((prev) => [...prev, results.public_id]);
        }}
      >
        {({ open }) => {
          return (
            <>
              {close && (
                <div className="flex flex-col gap-2 p-4 absolute z-30 top-0 bottom-0 text-white left-0 right-0 m-auto max-h-max rounded-md bg-green-400 max-w-[600px] w-full">
                  <input
                    ref={name}
                    placeholder="Name"
                    className="py-[5px] pl-2 text-black rounded-md"
                  />
                  <input
                    placeholder="Price"
                    ref={price}
                    className="py-[5px] pl-2 text-black rounded-md"
                  />
                  <button
                    onClick={() => open()}
                    className=" px-2 py-[5px] rounded-md max-w-max bg-black"
                  >
                    Upload an Image
                  </button>
                </div>
              )}
            </>
          );
        }}
      </CldUploadWidget>
      <div className="flex items-center gap-2 flex-wrap">
        {publicIds.map((value, index) => (
          <section
            key={index}
            className="scroll-child relative bg-green-300/30 flex justify-center items-center rounded-lg"
          >
            <figure className="border-2 border-green-700 border-solid object-cover w-[270px] h-[270px] absolute top-0 rounded-lg left-0 right-0 bottom-0 object-center m-auto overflow-hidden">
              <CldImage
                src={value}
                alt="image"
                width={200}
                height={200}
                className="object-cover object-center aspect-square w-[270px] h-[270px]"
              />
            </figure>
            <div className="z-10 flex flex-col h-full py-2 justify-between">
              <p className="font-bold text-green-900 mx-auto text-lg">
                {name.current?.value || "fruit"}
              </p>
              <p className="text-green-400 mx-auto border-2 border-solid border-green-600/20 px-2 py-1 rounded-full">
                <del className="text-black/30 pr-2">
                  ${price.current?.value}
                </del>
                ${parseInt(price.current?.value || "0") * 0.9}
              </p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Produce;

{
  /* <Dialog>
              <DialogTrigger asChild>
                <button
                  className={" p-1 rounded-lg px-1 text-gray-900 bg-green-700 "}
                >
                  {"Upload"}
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{"Upload a Produce"}</DialogTitle>
                </DialogHeader>
                <DialogDescription asChild>
                  <form className="flex flex-col gap-2">
                    <input
                      placeholder="Name"
                      className="py-1 pl-2 border-2 border-solid border-black"
                    />
                    <input
                      placeholder="Price"
                      // value={state.workspaces.map}
                      className="py-1 pl-2 border-2 border-solid border-black"
                    />
                    <button
                      onClick={() => open()}
                      className=" px-2 py-2 rounded-md max-w-max bg-black"
                    >
                      Upload an Image
                    </button>
                    <button
                      onClick={() => open()}
                      className="px-2 py-2 rounded-md bg-black"
                    >
                      Complete Upload
                    </button>
                  </form>
                </DialogDescription>
              </DialogContent>
            </Dialog> */
}
