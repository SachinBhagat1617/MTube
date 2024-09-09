import React from "react";

const SearchVideoCardContainer = ({ info }) => {
  return (
    <div>
      <div className="flex m-4 gap-4">
        <img
          src={info.snippet.thumbnails.medium.url}
          alt=""
          className="rounded-lg"
        />
        <div>
          <p className="text-gray-600 font-bold p-1">
            {info.snippet.channelTitle}
          </p>
          <p className=" text-[15px]  text-gray-600 p-1">
            {info.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCardContainer;
