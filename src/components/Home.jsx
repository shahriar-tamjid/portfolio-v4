import React from "react";
import HeroImage from "../assets/profile.png"; // Update this path to change the profile pic
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          {/* ================ Job Title ================ */}
          <h2 className="text-4xl ml-2 mr-2 font-bold text-white">{`<Front-End Developer />`}</h2>

          {/* ================ Bio ================ */}
          <p className="text-white py-4 ml-2 mr-2 max-w-md">
            I'm Shahriar Tamjid, a front-end developer specializing in React and
            React Native. With 3 years of programming experience, I excel at
            transforming UI designs into seamless and intuitive applications. I
            am committed to delivering exceptional results from responsive
            websites to dynamic web and mobile apps.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              My Works
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl ml-10 mb-10 mr-10 w-2/3 md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
