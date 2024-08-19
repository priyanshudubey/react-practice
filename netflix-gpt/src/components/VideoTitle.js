import React from "react";
import { FaPlay } from "react-icons/fa";
// import { GiInfo } from "react-icons/gi";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold max-w-full sm:max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-2/4">{overview}</p>
      <div className="flex my-2 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg flex items-center rounded-lg hover:bg-opacity-80">
          <FaPlay />
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-lg items-center rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
