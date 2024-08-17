import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[15%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-red-700 text-white col-span-3 m-4">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
