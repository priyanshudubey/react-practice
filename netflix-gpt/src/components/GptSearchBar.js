import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    try {
      console.log(searchText.current.value);
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Hungama, Dhamal";
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      console.log("GPT Result: ", gptResults.choices);
    } catch (error) {
      console.error("Error making API call:", error);
      if (error.response) {
        console.error("API Response Error:", error.response.data);
      }
    }
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className=" bg-black w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          type="submit"
          className="py-2 px-4 bg-red-700 text-white col-span-3 m-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
