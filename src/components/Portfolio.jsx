import React from "react";
import disney_plus from "../assets/portfolio/disney_plus.png";
import fitness_app from "../assets/portfolio/fitness_app.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import nft_marketplace from "../assets/portfolio/nft_marketplace.png";

const Portfolio = () => {
  // List the projects inside the array with appropriate properties
  const portfolios = [
    {
      id: 1,
      src: disney_plus,
      demo: "https://disney-plus-4ec19.web.app/",
      code: "https://github.com/shahriar-tamjid/simple-streaming-service",
    },
    {
      id: 2,
      src: fitness_app,
      demo: "https://shahriar-fitness-club.netlify.app/",
      code: "https://github.com/shahriar-tamjid/gym_app",
    },
    {
      id: 3,
      src: ecommerce,
      demo: "https://ecommerce-sanity-beige.vercel.app/",
      code: "https://github.com/shahriar-tamjid/ecommerce_sanity",
    },
    {
      id: 4,
      src: nft_marketplace,
      demo: "https://shahriar-nft-marketplace.netlify.app/",
      code: "https://github.com/shahriar-tamjid/nft-marketplace",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl ml-2 mr-2 font-bold inline border-b-4 border-gray-500">
            My Works
          </p>
          <p className="py-6 ml-2 mr-2">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Portfolio;
