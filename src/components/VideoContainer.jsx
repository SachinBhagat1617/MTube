import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen); // Get menu state from Redux

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const json = await response.json();
    setVideos(json.items);
  };

  return (
    <div
      className={`flex flex-wrap gap-4 p-4 justify-start transition-all duration-300 ${
        isMenuOpen ? "ml-[50px]" : "ml-[150px]"
      }`}
    >
      {videos.map((video) => (
        <div className="flex-none w-[300px] h-[340px]" key={video.id}>
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
