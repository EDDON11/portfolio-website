import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className=" fixed z-20 bg-body w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full ">
            <div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" text-xl cursor-pointer text-white font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-500  text-xl mobilesm:text-base minmobile:text-base">
                    &#60;/
                  </span>{" "}
                  Eduard Donkeev{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-500  text-xl mobilesm:text-base minmobile:text-base">
                    &#62;
                  </span>
                </h1>
              </div>
              <div className="hidden md:block tablet:hidden">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="Home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-teal-500 px-3 py-2 "
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="skills"
                    to="skills"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer  text-white  px-3 py-2  hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-1  hover:text-black block hover:font-mono rounded-md"
                  >
                    Skills
                  </Link>
                  <Link
                    activeClass="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer  text-white px-3 py-2  hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-1  hover:text-black block hover:font-mono rounded-md"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>

              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link to="contact"   >
                  <button className="px-6 py-2 text-black font-bold bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-teal-700 p-1 shadow-xl rounded-md font-mono invisible mobile:visible tablet:pr-2 mobilelm:hidden screenbtn:hidden">
                    Contact me
                  </button>
                </Link>
              </div>
            </div>
            <div className="mr-14 flex md:hidden   ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-black font-bold bg-gradient-to-r from-cyan-500 to-teal-500   shadow-xl rounded-md inline-flex items-center justify-center p-2 mobilesm:p-1  minmobile:p-1 hover:bg-black focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-body  rounded-md mx-4 mr-20 pt-4 pb-4 space-y-1 shadow-2xl"
              >
                <Link
               
                  activeClass="Home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-1  text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
              
                  activeClass="skills"
                  to="skills"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-1  text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Skills
                </Link>

                <Link
              
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-1  text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Portfolio
                </Link>

                <Link
                
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-teal-500  p-1  text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
