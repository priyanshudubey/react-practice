import logo from "../../foodielogo.png";

import { LINKEDIN_LINK } from "../../utils/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full flex items-center justify-center gap-[2px] p-[18px]  bg-[#ffffff] shadow-[2px_7px_5px_6px_#0000009c] mt-auto">
      <a
        className="text-purple-900 font-bold"
        href={LINKEDIN_LINK}
        target="_blank">
        Priyanshu Dubey
      </a>
      <div>
        <span className="mx-[5px] text-[20px]">&copy;</span>
        {year}
      </div>
      <strong className="pl-[5px]">
        <img
          className="w-14 h-14 rounded-full cursor-pointer"
          src={logo}
        />
      </strong>
    </div>
  );
};

export default Footer;
