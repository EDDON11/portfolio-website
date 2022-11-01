import React from "react";
import { FaCode } from "react-icons/fa";
import { SiGoogleoptimize } from "react-icons/si";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element id="slills" name="skills">
      <section className="max-w-90 m-auto">
        <div>
          <h3 className="text-4xl py-1 dark:text-white font-extrabold">
            Skills
          </h3>

          <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
            From the very beginning of my career as a developer, I studied
            programming at various schools, took simple projects on freelance
            exchanges, practiced on educational projects using the most modern
            stack of technologies. I have experience in promoting websites in
            search engines and analytics.
          </p>
          <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer a range of services,{" "}
            <span className="text-teal-500"> programming </span> and layout,{" "}
            <span className="text-teal-500">search engine optimization</span>,
            semantics, analytics and application generation for business.
          </p>
        </div>
        <div className="lg:flex gap-10 mt-16">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bigscreen:w-1/2">
            <div className="flex justify-center">
              <FaCode className="w-32 h-32  bg-transparent  text-red-600 m-3 p-1 shadow-xl rounded-md" />
            </div>
            <h3 className="text-2xl font-extrabold pt-6 pb-8 text-white">
              Web development
            </h3>

            <p className="text-secondary text-sm font-mono minmobile:text-xs">
              HTML/CSS, JavaScript, React, TypeScript, Next.js, Express.js,
              MongoDB, LESS, SASS, Bootstrap, Tailwind CSS, Wordpress
            </p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 bigscreen:w-1/2">
            <div className="flex justify-center">
              <SiGoogleoptimize className="w-32 h-32  bg-transparent  text-blue-600 m-3 p-1 shadow-xl rounded-md" />
            </div>
            <h3 className="text-2xl text-white pt-6 pb-8 font-extrabold">
              Traffic Sales
            </h3>

            <p className=" text-secondary text-sm font-mono minmobile:text-xs">
              Search Optimization, SEO, Analysis, Link Building, PPC, Strategic
              Campaign Creation
            </p>
            <p className="text-secondary  text-xl"></p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
