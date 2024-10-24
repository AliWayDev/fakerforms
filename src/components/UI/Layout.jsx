import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const Layout = () => {
  return (
      <div className="max-w-[1140px] mx-auto">
        <Header />
      <Outlet />
      </div>
  );
};
