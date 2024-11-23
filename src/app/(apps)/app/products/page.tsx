import React from "react";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Jobpages from "./products";

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

const Jobpage = async () => {
  const user = await auth();
  if (!user?.user) redirect("/login");
  return (
    <main className="gridmain bg-[#9A8499]/50">
      <Jobpages />
    </main>
  );
};

export default Jobpage;

// import {
//   Captions,
//   CircleDollarSign,
//   HomeIcon,
//   LocateFixed,
//   MousePointer2,
//   Timer,
//   Users,
// } from "lucide-react";
