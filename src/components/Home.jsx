import React from "react";
import Container from "./Container";
import shreeraj from "../assets/shreeraj.jpg";
import intro from "../assets/intro.png";
import theshreerajAvatar from "../assets/theshreeraj avatar.png";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Projects";

function Home() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-gradient-to-tr from-gray-400 from-2% via-white-200 via-30% to-white to-99%  px-12 py-10 rounded-xl max-mdd:max-w-none max-md:p-8">
            <div className="flex">
              <img
                src={shreeraj}
                alt="Shreeraj Mane"
                className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
              />
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
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
                Enthusiastically pursuing the realm of technology, I am a
                frontend developer dedicated to crafting impactful experiences
                on the web. With a passion for building innovative and
                user-centric solutions, I strive to bring creativity and
                functionality together in every project.
              </span>
            </p>
          </div>
          <img
            className="flex flex-col justify-between items-stretch gap-x-4 gap-y-2 bg-[#131315] text-center  rounded-xl"
            src={theshreerajAvatar}
          ></img>
        </div>
      </FadeIn>
      <FadeIn>
        <Socials />
      </FadeIn>
      <FadeIn>
        <div className="md:flex justify-between w-full grid-cols-8 items-start gap-x-8 gap-y-8 bg-gradient-to-tr from-gray-400 from-2% via-white-200 via-30% to-white to-99%  px-12 py-10 mt-3 rounded-xl max-mdd:max-w-none max-md:p-8">
          <div className="md:mt-8">
            <p className="max-md:text-[32px] text-2xl font-bold max-md:leading-10 col-span-5 max-md:tracking-[-0.01em]">
              After Office Hours{" "}
            </p>
            <p className="text-[#8a8a93] text-lg">
              we can be nostalgic about IRC & Web1 but mostly stick to memes in
              Web3.
            </p>
            <button>
              <a
                href="https://cal.com/theshreeraj"
                target="_blank"
                class="relative inline-flex items-center justify-start px-6 py-3 mt-4 overflow-hidden font-medium transition-all bg-black rounded-md group"
              >
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-gray-500 rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Let's Connect
                </span>
              </a>
            </button>
          </div>
          <div className="">
            <img className="rounded-md w-44" src={intro} />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Home;
