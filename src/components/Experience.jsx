import React from "react";

import node from "../assets/node.png";
import sql from "../assets/sql.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import reactImage from "../assets/react.png";

const Experience = () => {
  // List the tools inside of the array with appropriate properties
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: sql,
      title: "SQL",
      style: "shadow-cyan-500",
    },
    {
      id: 3,
      src: python,
      title: "Python",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-teal-500",
    },
    {
      id: 5,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next.js",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl ml-2 mr-2 mt-5 font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 ml-2 mr-2">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
