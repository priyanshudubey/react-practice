import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { APP_BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="text-red">
      <div className="absolute -z-10">
        <img
          alt="background"
          src={APP_BACKGROUND}
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
