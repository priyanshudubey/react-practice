import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
// import client from "../utils/openai";yy

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // const genAI = new GoogleGenerativeAI(GEMINI_KEY);

  const handleGptSearchClick = async () => {
    console.log("Search Text: ", searchText.current.value);
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // const result = await model.generateContent(searchText.current.value);
    // console.log("Gemini result: ", result.response.text());
    // const msg = await client.chat({
    //   // model: "claude-3-5-sonnet-20240620",
    //   // max_tokens: 1024,
    //   messages: searchText.current.value,
    // });
    // console.log(msg);
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" bg-black w-full md:w-1/2 grid grid-cols-12 rounded-lg"
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
