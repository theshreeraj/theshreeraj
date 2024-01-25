import React from "react";
import Container from "./Container";
import shreeraj from "../assets/shreeraj.jpg";
import theshreerajAvatar from "../assets/theshreeraj avatar.png";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";

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
              <div>
                <p className="text-lg leading-6 -translate-x-[0.01em]">
                  Hi, I'm Shreeraj Mane
                </p>
                <p className="text-lg leading-6 -translate-x-[0.01em]">
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
            className="flex flex-col justify-between items-stretch gap-x-4 gap-y-2 bg-[#131315] text-center  rounded-xl max-md:p-8"
            src={theshreerajAvatar}
          ></img>
        </div>
      </FadeIn>
      <FadeIn>
        <Socials />
      </FadeIn>
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            I am a passionate Frontend developer with a love for frontend and
            design. Currently working on a side project called theshutterstory.{" "}
            <span className="text-[#8a8a93]">
              {" "}
              join me to explore my unique projects and creative solutions.
            </span>
          </h3>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Home;
