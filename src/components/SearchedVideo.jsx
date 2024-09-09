import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEO } from "../utils/constants";
import SearchVideoCardContainer from "./SearchVideoCardContainer";

const SearchedVideo = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams(); // to read params
  const query = searchParams.get("query"); // get video ID from query parameter
  // console.log("query"+query)
  useEffect(() => {
    getSearchVideosData();
  }, []);
  const getSearchVideosData = async () => {
    const url = `${YOUTUBE_SEARCH_VIDEO}&q=${query}`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div>
      <div className="ml-4">
        {videos.map((video) => (
          
            <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
              <SearchVideoCardContainer
                info={video}
                key={video.id.videoId+1}
              />
            </Link>
        
        ))}
      </div>
    </div>
  );
};

export default SearchedVideo;
