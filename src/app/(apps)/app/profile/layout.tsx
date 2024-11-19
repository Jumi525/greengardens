import AsideNavLink from "@/components/profile/navlink";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="gap-1 bg-green-200">
      <AsideNavLink />
      <section className="ml-16 pl-1 min-h-screen py-4">{children}</section>
    </main>
  );
};

export default layout;
