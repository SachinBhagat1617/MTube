import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
    // console.log({snippet,statistics,channelTitle,thumbnails,title})
  // Format view count
  const formatViews = (views) => {
    if (views >= 1_000_000) return `${(views / 1_000_000).toFixed(1)}M`;
    if (views >= 1_000) return `${(views / 1_000).toFixed(1)}K`;
    return views;
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-[180px] object-cover"
        alt="video thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="p-2 flex flex-col flex-grow">
        <div className="font-semibold text-sm md:text-base">{title}</div>
        <div className="text-gray-600 text-xs md:text-sm">{channelTitle}</div>
        <div className="text-gray-600 text-xs md:text-sm">
          {formatViews(statistics.viewCount)} views
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
