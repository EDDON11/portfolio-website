import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element id="contact" name="contact">
      <section className="max-w-90 m-auto pt-4">
        <h3 className="text-4xl py-1 dark:text-white font-extrabold">
          Contact me
        </h3>
        <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
          You can <span className="text-teal-600">contact me</span> in any
          convenient way.
        </p>
        <div className="pt-16 pb-8">
          <div className="flex justify-between tabletxl:flex-col minmobile:flex-col tabletxxl:flex-col">
          
              <div className="flex items-center tabletxl:pb-2 tabletxxl:pt-4 hover:animate-pulse">
                <AiOutlineMail className="w-10 h-10 minmobile:w-7 minmobile:h-7  bg-gradient-to-r from-cyan-500 to-teal-500  p-1 shadow-xl rounded-md m-0 text-lg  mr-2 md:text-sm " />
                <p className="text-secondary minmobile:text-xs hover:text-teal-600 font-mono">
                  donkeev.ed@gmail.com
                </p>
              </div>
         
            <a href="https://t.me/eduarddonkeev">
              <div className="flex items-center tabletxl:pb-2 tabletxxl:pt-4 hover:animate-pulse">
                <FaTelegramPlane className="w-10 h-10 minmobile:w-7 minmobile:h-7 bg-gradient-to-r from-cyan-500 to-teal-500  p-1 shadow-xl rounded-md m-0 text-lg   mr-2" />
               
                  <p className="text-secondary minmobile:text-xs hover:text-teal-600 font-mono">
                    t.me/eduarddonkeev
                  </p>
              
              </div>
            </a>
            <a href="https://www.linkedin.com/in/eduard-donkeev-324053240">
              <div className="flex items-center tabletxl:pb-2 tabletxxl:pt-4 hover:animate-pulse">
                <AiOutlineLinkedin className="w-10 h-10 minmobile:w-7 minmobile:h-7 bg-gradient-to-r from-cyan-500 to-teal-500  p-1 shadow-xl rounded-md m-0 text-lg   mr-2" />
                
                  <p className="text-secondary minmobile:text-xs hover:text-teal-600 font-mono">
                    eduard-donkeev
                  </p>
                
              </div>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
