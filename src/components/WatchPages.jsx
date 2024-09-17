import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPages = () => {
  const [searchParams] = useSearchParams(); // to read params
  const videoId = searchParams.get("v"); // get video ID from query parameter
  const [liveText, setLiveText] = useState("");
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen); // Get menu state from Redux

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col pt-4 bg-gray-100 min-h-screen ">
        <div
          className={`flex justify-start ${
            !isMenuOpen ? "ml-[100px]" : ""
          } space-x-5 `}
        >
          {" "}
          {/* if toggleMenu is open then dont give left margin otherwise give leftmargin */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
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
          <div className=" space-x-2 border-4 border-gray-700 rounded-md">
            <div className="w-full">LiveChat</div>
            <div className="flex-grow h-[500px] w-[300px] ">
              <div className="h-full w-full bg-slate-300  rounded-lg overflow-y-scroll flex flex-col-reverse">
                <LiveChat />
              </div>
            </div>
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
