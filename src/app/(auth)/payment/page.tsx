"use client";
import { ToastDemo } from "@/components/profile/navbar";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

type cloudProps = { public_id: string };

const UserPayment = () => {
  const [publicIds, setPublicIds] = useState("");
  return (
    <section>
      <ToastDemo />
      <CldUploadWidget
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        uploadPreset="gdbybt2f"
        onSuccess={(result) => {
          console.log(result);
          const results = result.info as cloudProps;
          setPublicIds(results.public_id);
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
      {publicIds && (
        <CldImage src={publicIds} alt="image" width={200} height={200} />
      )}
    </section>
  );
};

export default UserPayment;
