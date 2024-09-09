import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  //   console.log("Menu open state:", isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="w-48 p-4 bg-gray-100 h-screen">
      {/* Navigation Links */}
      <ul className="space-y-1">
        <Link to="/" className="hover:bg-gray-200 p-2 rounded cursor-pointer">
          Home
        </Link>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Shorts</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Videos</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Live</li>
      </ul>

      {/* Subscriptions */}
      <h1 className="font-bold mt-4 mb-1">Subscriptions</h1>
      <ul className="space-y-1">
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Music</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Sports</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Gaming</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Movies</li>
      </ul>

      {/* Watch Later */}
      <h1 className="font-bold mt-4 mb-1">Watch Later</h1>
      <ul className="space-y-1">
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Music</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Sports</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Gaming</li>
        <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
