import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO } from "../utils/constants";
import { toogleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toogleGptSearchView());
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={APP_LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex items-center p-2">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            className="w-12 h-12 rounded-sm mr-4"
            alt="user icon"
            src={user?.photoURL}
          />
          <button
            onClick={handleGptSearchClick}
            className="border border-spacing-4 bg-red-700 p-[10px] text-white font-bold rounded-lg mx-2">
            {showGptSearch ? "Home" : "Netflix-GPT"}
          </button>
          <button
            onClick={handleSignout}
            className="border border-spacing-4 bg-red-700 p-[10px] text-white font-bold rounded-lg">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
