import React from "react";
import logo from "../public/images/ed3.png";
import Image from "next/image"
import { Element } from "react-scroll";

const HomePage = () => {
  return (
    <Element id='home' name='home'>
    <section className="min-h-screen">
      <nav className="pb-10 mb-12 flex justify-between text-white"></nav>
      <div className="relative mx-auto bg-body from-teal-500 shadow-md rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 minmobile:h-60 minmobile:w-60">
        <Image src={logo} layout="fill" objectFit="cover" alt="photo"/>
      </div>
      <div className="text-center p-10 mobiletext:p-0 mobiletext:pt-10">
        <h2 className="text-5xl py-2 text-teal-600 font-extrabold  md:text-6xl mobilelm:text-4xl minmobile:text-3xl">
          Eduard Donkeev
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl text-secondary font-bold mobiletext:text-xl ">
          Junior Web Developer | Traffic Sales
        </h3>
        <p className="text-md py-5 leading-8 md:text-3xl text-gray-200  mx-auto mobiletext:pt-3 mobiletext:text:lg">
          I provide programming, SEO and strategic campaign creation.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400 "></div>
    </section>
    </Element>
  );
};

export default HomePage;
