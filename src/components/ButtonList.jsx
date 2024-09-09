import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
    const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
      <div className={`flex overflow-x-auto p-3 bg-white whitespace-nowrap scrollbar-hidden ${isMenuOpen?"ml-10":" ml-36"}`}>
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="C++" />
      <Button name="Dynamic Programming" />
      <Button name="Web Development" />
    </div>
  );
};

export default ButtonList;
