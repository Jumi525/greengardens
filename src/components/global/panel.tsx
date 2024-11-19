import React from "react";
import {
  Captions,
  CircleDollarSign,
  LocateFixed,
  Timer,
  Users,
} from "lucide-react";
const navlinks = [
  {
    href: "Location",
    link: <LocateFixed />,
  },
  {
    href: "Pay",
    link: <CircleDollarSign />,
  },
  {
    href: "Title",
    link: <Captions />,
  },
  {
    href: "Applicant",
    link: <Users />,
  },
  {
    href: "Time",
    link: <Timer />,
  },
];

const Panel = () => {
  return (
    <section className=" gridchild2 px-1 transition-all">
      <h2 className="font-bold text-2xl hidden  md:ml-2 md:mt-2 md:block">
        Filters
      </h2>
      <ul className="flex flex-col gap-2 mt-3 justify-center items-center">
        {navlinks.map((nav, index) => (
          <button
            key={index}
            className="rounded-lg max-w-max p-3 md:min-w-[220px] w-full flex hover:bg-slate-500 bg-slate-500/50"
          >
            {nav.link}
            <p className="hidden md:block pl-3">{nav.href}</p>
          </button>
        ))}
      </ul>
    </section>
  );
};

export default Panel;

// className="transition-all duration-1000 md:border-none md:flex-row md:mt-0 md:mx-auto md:mr-0 md:w-[50%] md:justify-between flex flex-col border-t mt-8"
