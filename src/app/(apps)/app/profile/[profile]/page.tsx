"use client";
import DashboardCard from "@/components/profile/profileCard";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import CommunityCard from "@/components/profile/communityCard";
import Produce from "@/components/profile/Produce";

type HomeProps = {
  id: string;
  location: string;
  title: string;
  time: string;
  date: string;
  name: string;
  price: string;
}[];

const Dashboardpage = () => {
  const paths = usePathname();
  const path = paths.split("profile")[1].split("/")[1];
  const [home] = useState<HomeProps>([]);

  return (
    <>
      {path === "home" && (
        <>
          <section className="p-4 max-w-[1090px] mx-auto">
            <h1 className="font-bold text-3xl pt-6 pb-3 ">{"hellos"}</h1>

            <div className="grid grid-cols-1 cardgrid md:grid-cols-4 gap-3 justify-center px-2">
              <DashboardCard title="Revenue" heading={"0"} increase="+10%" />
              <DashboardCard title="Bookings" heading={"0"} increase="+34" />
              <DashboardCard
                title="Application"
                heading={"20"}
                increase="+28"
              />
              <DashboardCard
                title="Ratings"
                heading={"0"}
                increase="Average Rating"
              />
            </div>
          </section>
          <section>
            <section className="deGrid items-center rounded-lg mx-auto text-center mb-4 grid sm:grid-cols-[70px_1.5fr_1fr_1fr_150px] max-w-[945px] bg-[#052620]/50 h-11">
              <p>Id</p>
              <p>Title</p>
              <p className="block desecondG">Date</p>
              <p className="hidden sm:block">Payment</p>
              <p className="hidden sm:block">Status</p>
            </section>
            <section className="scrollparent mx-auto">
              {home.map((val, index) =>
                home.length ? (
                  <p key={index}>hello</p>
                ) : (
                  <p key={index}>No data in table</p>
                )
              )}
            </section>
          </section>
          <div className="h-[400px] w-[400px] absolute top-0 left-0 -z-10 bg-[#052620]/20 rounded-full blur-3xl"></div>
        </>
      )}
      {path === "community" && <CommunityCard />}
      {path === "shop" && <Produce />}
      {path === "revenue" && (
        <section className="flex items-center justify-center h-full">
          No Revenue
        </section>
      )}
    </>
  );
};

export default Dashboardpage;
