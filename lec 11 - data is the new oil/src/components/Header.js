import { useState, useContext } from "react";
import logo from "../../foodie logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { FaCartArrowDown } from "react-icons/fa";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  return (
    <div className="w-screen h-20 flex justify-between items-center text-[#545454] px-6 py-0 bg-[#ffffff] shadow-[-2px_7px_5px_-6px_#0000009c] font-bold">
      <div className="w-24">
        <img
          className="w-14 h-14 rounded-full cursor-pointer"
          src={logo}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-8 gap-4">
          <li className="px-4  rounded-lg font-extrabold">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4  rounded-lg font-extrabold">
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-orange-700 hover:rounded-[5px]"
              to="/">
              Home
            </Link>
          </li>
          <li className="px-4  rounded-lg font-extrabold">
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-orange-700 hover:rounded-[5px]"
              to="/about">
              About
            </Link>
          </li>
          <li className="px-4  rounded-lg font-extrabold">
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-orange-700 hover:rounded-[5px]"
              to="/contact">
              {" "}
              contacts{" "}
            </Link>
          </li>
          <li className="px-4  rounded-lg font-extrabold">
            <Link
              className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-orange-700 hover:rounded-[5px]"
              to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="p-2 cursor-pointer text-inherit hover:text-white hover:bg-orange-700 hover:rounded-[5px]">
            <FaCartArrowDown />
          </li>
          <li className="px-4  rounded-lg font-extrabold">
            <button
              className="px-2 py-[6px] cursor-pointer text-inherit hover:text-white hover:bg-orange-700 hover:rounded-[5px]"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}>
              {btnName}
            </button>
          </li>
          <li lassName="px-4  rounded-lg font-extrabold">
            {data.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
