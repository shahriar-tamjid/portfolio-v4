import React from "react";
import HeroImage from "../assets/profile-2024.png"; // Update this path to change the profile pic
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
          <h2 className="text-4xl ml-2 mr-2 font-bold text-white">
            Software Engineer
          </h2>

          {/* ================ Bio ================ */}
          <p className="text-white py-4 ml-2 mr-2 max-w-md">
            As a Software Engineer with a passion for building impactful
            solutions, I specialize in ERP systems, designing and implementing
            custom tools to automate factory operations like bookkeeping,
            inventory, and supply chain management, backed by my SQL expertise
            and experience with Oracle Database. With 3+ years of JavaScript
            programming experience, I am also proficient in developing web
            applications using Node.js, React.js, and Next.js. Driven by
            continuous learning, I am currently exploring modern front-end
            technologies like TailwindCSS, Three.js, and Framer Motion,
            alongside diving into iOS development with Swift.
          </p>

          <div className="flex space-x-5">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              My Works
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            {/* ==================== Resume ==================== */}
            <a
              href="/Shahriar_Tamjid_Resume.pdf"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              My Resume
              <span>
                <BsFillPersonLinesFill size={20} className="ml-1" />
              </span>
            </a>
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
