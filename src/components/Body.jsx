import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      {/* Main content takes up the remaining space */}
      <MainContainer className="flex-1" />
    </div>
  );
};

export default Body;
