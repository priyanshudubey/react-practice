import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/c47eb5b8-07f7-400e-9d54-49630857116d/GB-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_37d05758-e321-4b45-a195-519d45729021_large.jpg"
        />
      </div>
      <form className="absolute m-36 p-12 w-3/12 mx-auto right-0 left-0 text-white bg-opacity-80 bg-black">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full rounded-lg bg-gray-900"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full rounded-lg bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full rounded-lg bg-gray-900"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="m-2 p-2 cursor-pointer"
          onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
