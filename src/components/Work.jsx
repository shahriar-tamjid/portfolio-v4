import React from "react";
import CompanyImage1 from "../assets/pridesys.jpg"; // Update this path to change the profile pic

const Work = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl ml-2 mr-2 font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6 ml-2 mr-2">
            Here are the details about my work experience
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between items-start h-full">
          {/* Left side - Job description */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white">Software Engineer</h2>
            <h4 className="text-2xl font-bold text-white mt-2">
              Jul 2023 - Aug 2024
            </h4>
            <ul className="text-white py-4 space-y-3">
              <li>
                • Built various features for Oracle Database based ERP systems.
              </li>
              <li>
                • Wrote complex SQL and PL/SQL queries to fix bugs and ensure
                robust data pipelines.
              </li>
              <li>
                • Improved old codebase for faster and more efficient
                performance with large dataset.
              </li>
              <li>
                • Worked with critical financial and inventory data for smooth
                financial transactions and stock maintenance.
              </li>
              <li>
                • Worked closely with the government, ready-made garment,
                chemical, and ceramic companies to automate various processes
                related to production and the supply chain.
              </li>
            </ul>
          </div>

          {/* Right side - Company logo */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={CompanyImage1}
              alt="company logo"
              className="rounded-2xl ml-10 mb-10 mr-10 w-2/3 md:w-[400px]"
              //   className="rounded-2xl w-full max-w-[300px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
