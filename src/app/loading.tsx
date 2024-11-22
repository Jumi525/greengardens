import Loader from "@/components/uis/loader";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
