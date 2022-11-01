import React from "react";
import data from "../utils/data";
import Image from "next/image";
import gitImage from "../public/images/git2.png";
import { Element } from "react-scroll";


import WorkItem from "../components/WorkItem";

const Work = () => {
 
  return (
	<Element id='work' name='work'>
     <div className="max-w-90 m-auto mt-24 mobilelm:m-0  minmobile:m-0">
      <h3 className='text-4xl py-1 dark:text-white font-extrabold'>Portfolio</h3>
   
        <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
        Below you can see some of the <span className="text-teal-500">projects</span> and tutorials I`ve been <span className="text-teal-500">working</span> on lately. The use of modern <span className="text-teal-500">technologies</span> allows you to make a website or application fast, unique and scalable.
        </p>
    </div>
  
    <div className="w-full mb-20 mt-16  h-auto flex flex-col justify-center items-center max-w-90 m-auto  mobilelm:m-0 mobilelm:pt-10  minmobile:m-0 minmobile:pt-10">
   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  w-full ">
        {data.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          />
        ))}
      </div>

      <h1 className="text-secondary text-base my-10  flex items-center tabletxl:text-sm minmobile:text-xs">
        Discover all projects on{" "}
        <a href="https://github.com/EDDON11" className="text-white font-semibold pr-2 pl-2 tabletxl:text-sm hover:text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-500">
          GutHub{" "}
        </a>
        <Image  className="pl=2" src={gitImage} width={20} height={20} alt="Avatar" />
      </h1>
    </div>

	</Element>
  );
};

export default Work;
