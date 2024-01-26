import React from "react";
import shreeraj from "../assets/shreeraj.jpg";
import theshreerajAvatar from "../assets/theshreeraj avatar.png";

const Hero = () => {
  return (
    <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
      <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-gradient-to-tr from-gray-400 from-2% via-white-200 via-30% to-white to-99%  px-12 py-10 rounded-xl max-mdd:max-w-none max-md:p-8">
        <div className="flex">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </span>
          <img
            src={shreeraj}
            alt="Shreeraj Mane"
            className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
          />

          <div className="">
            <p className="ml-5 mt-8 text-md leading-6 -translate-x-[0.01em]">
              Hi, I'm Shreeraj Mane
            </p>
            <p className="ml-5 text-md leading-6 -translate-x-[0.01em]">
              UX Designer & Front-end Developer
            </p>
          </div>
        </div>
        <h3 className="max-md:text-[28px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
          Passionate to persue the
          <br />
          technology <br />
        </h3>
        <p className="text-lg leading-6 -translate-x-[0.01em]">
          <span className="text-[#8a8a93]">
            {" "}
            Enthusiastically pursuing the realm of technology, I am a frontend
            developer dedicated to crafting impactful experiences on the web.
            With a passion for building innovative and user-centric solutions, I
            strive to bring creativity and functionality together in every
            project.
          </span>
        </p>
      </div>
      <img
        className="flex flex-col justify-between items-stretch gap-x-4 gap-y-2 bg-[#131315] text-center  rounded-xl"
        src={theshreerajAvatar}
      ></img>
    </div>
  );
};

export default Hero;
