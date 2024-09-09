import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { cacheResults } from "../utils/CacheSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowsuggestions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const searchCache = useSelector((store) => store.cache);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleBar = () => {
    dispatch(toggleMenu());
  };

  //debouncing and caching for search optimisation
    useEffect(() => {
      // Debouncing: Set up a timer that will call the API after a delay

      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      }, 200); // Delay of 200ms
      // Cleanup function to clear the timer if searchQuery changes before 3 seconds
      return () => {
        clearTimeout(timer); /// Clear the previous timer if searchQuery changes
      };
      // so how return here
      //when the component unmounts or before the effect runs again due to a change in its dependencies.
      //  It’s used to clean up resources or side effects that the effect may have created
    }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //updating the cacheresults
    // it will store the suggestionsin cacheresults
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );

    //console.log(json[1]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowsuggestions(false);
    navigate(`/search?query=${searchQuery}`);
  };

  const handleSuggestionClick = (searchTerm) => {
    setSearchQuery(searchTerm);
    setShowsuggestions(false);
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center z-0 p-2 pl-4 pr-4">
        <div className="flex">
          <div className="outline-none rounded-md flex items-center w-10 h-8">
            <div className=" cursor-pointer hover:shadow-lg">
              <FontAwesomeIcon icon={faBars} onClick={() => toggleBar()} />
            </div>
          </div>
          <a href="/">
            <div className="outline-none rounded-md flex items-center w-10 h-8 bg-black">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_mzMrgg4IHAfR_c8TX1a2Ozzd3Pu5KUhEuyZaDzw6NZgHM=s900-c-k-c0x00ffffff-no-rj"
                alt="logo"
              ></img>
              MTube
            </div>
          </a>
        </div>

        <form className="flex relative" onSubmit={handleSearch}>
          <input
            type="text"
            className="relative border-2 w-[600px] rounded-l-3xl px-10 p-2 outline-none"
            placeholder="Search Bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
          ></input>
          <div>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              alt="search"
              className="absolute left-2 top-4 w-8"
            />
          </div>
          <button className="border-2 w-20 rounded-r-3xl rounded-l-none">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8" />
          </button>
        </form>

        <div>
          <img
            className="h-8 w-10 "
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt="user"
          ></img>
        </div>
      </div>
      {showSuggestions && (
        <div className="fixed w-[600px] mx-[29rem] z-10 bg-white shadow-lg rounded-lg ">
          <ul>
            {suggestions.map((each, index) => (
              <li
                key={index}
                className="flex items-center py-2 px-3 rounded-xl text-md duration-150 shadow-sm bg-gray-50 cursor-pointer hover:bg-gray-100"
                onMouseDown={() => handleSuggestionClick(each)}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8" />
                <div
                  onClick={(e) => {
                    const searchTerm = each;
                    setSearchQuery(searchTerm);
                    setShowsuggestions(false);
                    navigate(`/search?query=${searchTerm}`);
                  }}
                >
                  {each}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Head;
