import React, { useRef, useEffect } from "react";

const techTools = [
  {
    name: "React",
    link: "#",
  },
  {
    name: "HTML",
    link: "#",
  },
  {
    name: "CSS",
    link: "#",
  },
  {
    name: "JS",
    link: "#",
  },
  {
    name: "Figma",
    link: "#",
  },
  {
    name: "Node.js",
    link: "#",
  },
];

function Techstack() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let counter = 0;

    const slideItems = () => {
      counter = (counter + 1) % socialData.length;
      slider.style.transform = `translateX(-${counter * 100}%)`;
    };

    const interval = setInterval(slideItems, 3000); // Change slide duration here (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex overflow-hidden my-2 max-md:grid max-md:auto-cols-[1fr] max-md:gap-x-2 max-md:gap-y-2 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]"
      ref={sliderRef}
      style={{ transition: "transform 0.5s ease-in-out" }}
    >
      {techTools.map((social, index) => (
        <a
          key={index}
          href={social.link}
          className="flex w-full min-h-[56px] justify-center items-center bg-[#131315] transition-[background-color] duration-300 ease-[ease-out] text-white text-lg leading-6 text-center tracking-[-0.01em] px-6 py-4 rounded-[99px]"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
}

export default Techstack;
