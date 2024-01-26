import React from "react";
import DownloadResumeButton from "./DownloadResumeButton";

const navlinks = [
  {
    id: "1",
    name: "home.",
    link: "#home",
  },
  {
    id: "2",
    name: "projects",
    link: "#projects",
  },
  {
    id: "3",
    name: "connect.",
    link: "#connect",
  },
];
function Navbar() {
  return (
    <div>
      <div className="flex max-w-[1240px] justify-between max-sm:justify-center items-center mx-auto px-2 max-lg:mx-2 rounded-[9px] mt-6">
        <span className="text-lg leading-6 -translate-x-[0.01em] ">
          theshreeraj
        </span>
        <div className="flex justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden">
          {navlinks.map((navlink) => (
            <a
              key={navlink.id}
              href={navlink.link}
              className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-black ${
                navlink.link === "#home" ? "text-[#8a8a93]" : ""
              }`}
            >
              {navlink.name}
            </a>
          ))}
        </div>
        <div className="hidden sm:block">
          <DownloadResumeButton />
        </div>
      </div>

      <div className="flex w-full justify-center items-center sm:hidden">
        <div className="flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px]  bg-[#131315] px-8 py-4 rounded-full fixed bottom-5 mx-auto z-50">
          {navlinks.map((navlink) => (
            <a
              href={navlink.link}
              className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#646464] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-black ${
                navlink.link === "#home" ? "text-black" : ""
              }`}
            >
              {navlink.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
