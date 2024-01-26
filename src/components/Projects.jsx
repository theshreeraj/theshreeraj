import React from "react";
// import pro1 from "../assets/pro1.webp";
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/Unboxproj.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";
import pro6 from "../assets/pro6.png";
import pro7 from "../assets/pro7.png";
// import { ArrowIcon } from "./Icons";
import arrowDiagonal from "../assets/top-right.png";
// import pro8 from "../assets/pro8.png";

const projectData = [
  {
    name: "linkedin",
    img: pro1,
    link: "#",
  },
  {
    name: "linkedin",
    img: pro2,
    link: "#",
  },
  {
    name: "linkedin",
    img: pro3,
    link: "#",
  },
  {
    name: "linkedin",
    img: pro4,
    link: "#",
  },
  {
    name: "linkedin",
    img: pro5,
    link: "#",
  },
  {
    name: "linkedin",
    img: pro6,
    link: "#",
  },
  {
    name: "linkedin",
    img: pro7,
    link: "#",
  },
  // Add other image data here...
];

function Projects() {
  return (
    <div
      className="grid auto-rows-[300px] grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2"
      id="projects"
    >
      {projectData.map((project, index) => (
        <a
          key={index}
          href={project.link}
          className={`rounded-xl  bg-[#131315]  dark:bg-neutral-900 ${
            (index === 3 || index === 6) && "md:col-span-2"
          }`}
          style={{ height: "300px" }}
        >
          {project.img ? (
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-full bg-gray-300"></div> // Placeholder if image is missing
          )}
          {/* <div className="flex justify-between">
            <p>Project One</p>
            <img
              src={arrowDiagonal}
              className="rounded-3xl bg-[#fcfcfc] dark:bg-[#ffffff] h-6 w-6 opacity-100"
              style={{ borderRadius: "50px" }}
            />
          </div> */}
        </a>
      ))}
    </div>
  );
}

export default Projects;
