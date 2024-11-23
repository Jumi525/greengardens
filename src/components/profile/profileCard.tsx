import React from "react";
type DashboardCardprops = {
  title: string;
  heading: string;
  increase: string;
};

const DashboardCard = ({ heading, increase, title }: DashboardCardprops) => {
  return (
    <section className="bg-green-300 sm:max-w-[200px] text-center sm:text-left px-3 rounded-lg py-3 flex flex-col justify-between">
      <p>{title}</p>
      <h3 className="mt-3 mb-2 font-bold text-3xl">{heading}</h3>
      <p className="text-sm">
        {increase} <span className="opacity-55">last month</span>
      </p>
    </section>
  );
};

export default DashboardCard;
