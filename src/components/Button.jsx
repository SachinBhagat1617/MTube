import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen); // Get menu state from Redux

  return (
    <button
      className={`w-20 sm:w-28 px-3 py-2 bg-slate-400 text-white rounded-lg hover:bg-slate-700 transition-all duration-300 ease-in-out text-center text-xs sm:text-sm  ${
        isMenuOpen ? "ml-[10px]" : "ml-[12px] "
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
