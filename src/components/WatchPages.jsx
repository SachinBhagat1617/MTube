import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPages = () => {
  const [searchParams] = useSearchParams(); // to read params
  const videoId = searchParams.get("v"); // get video ID from query parameter

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen); // Get menu state from Redux

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col pt-4 bg-gray-100 min-h-screen">
        <div
          className={`flex justify-start ${!isMenuOpen ? "ml-[100px]" : ""}`}
        >
          {" "}
          {/* if toggleMenu is open then dont give left margin otherwise give leftmargin */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              className="w-[60vw] h-[400px] md:h-[450px] lg:h-[550px] object-cover"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              autoPlay
              muted
            ></iframe>
          </div>
        </div>
        {/* Pass className to CommentsContainer */}
        <CommentsContainer
          className={`flex justify-start ${!isMenuOpen ? "ml-[100px]" : ""}`}
        />
      </div>
    </>
  );
};

export default WatchPages;
