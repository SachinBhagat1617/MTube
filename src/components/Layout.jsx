import React from "react";
import Head from "./Head";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Head />
      <div className="flex">
        <Sidebar className="w-64" />
        <Outlet className="flex-1" />
      </div>
    </div>
  );
};

export default Layout;
