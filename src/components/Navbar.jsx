import React from "react";
import Head from "./Head";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <Head />
      <Sidebar className="w-64" />
    </>
  );
};

export default Navbar;
