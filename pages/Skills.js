import React from "react";
import { FaCode } from "react-icons/fa";
import { SiGoogleoptimize } from "react-icons/si";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element id="slills" name="skills">
      <section className="max-w-90 m-auto  mobilelm:m-0  minmobile:m-0">
        <div>
          <h3 className="text-4xl py-1 text-white font-extrabold">
            Skills
          </h3>

          <p className="text-lg py-2 leading-8 text-gray-200">
            From the very beginning of my career as a developer, I studied
            programming at various schools, took simple projects on freelance
            exchanges, practiced on educational projects using the most modern
            stack of technologies. I have experience in promoting websites in
            search engines and analytics.
          </p>
          <p className="text-lg py-2 leading-8 text-gray-200">
            I offer a range of services,{" "}
            <span className="text-teal-500"> programming </span> and layout,{" "}
            <span className="text-teal-500">search engine optimization</span>, analytics.
          </p>
        </div>
        <div className="lg:flex gap-10 mt-16">
          <div className="text-center shadow-lg p-10 mobiletext:p-5 rounded-xl my-10 bigscreen:w-full">
            <div className="flex justify-center">
              <FaCode className="w-32 h-32 mobiletext:w-20 mobiletext:h-20 bg-transparent  text-red-600 m-3 p-1 shadow-xl rounded-md" />
            </div>
            <h3 className="text-3xl font-extrabold pt-6 pb-8 mobiletext:pt-3 mobiletext:pb-6 text-white">
              Web development
            </h3>

            <p className="text-secondary text-lg font-mono minmobile:text-xs mobiletext:text-start">
              HTML/CSS, JavaScript, React, TypeScript, Next.js, Express.js,
              MongoDB, SQL, LESS, SASS, Bootstrap, Tailwind CSS, Wordpress.
            </p>
          </div>

         
        </div>
      </section>
    </Element>
  );
};

export default Skills;
