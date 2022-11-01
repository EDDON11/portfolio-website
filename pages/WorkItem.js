import React from "react";

const WorkItem = ({ imgUrl, title, tech, workUrl }) => {
  return (
    <span>
      <a
        href={workUrl}
        target="_blank"
        rel="noreferrer"
        className="bg-body rounded-xl overflow-hidden"
      >
        <div className="relative hover:opacity-75">
          <img
            src={imgUrl}
            alt="work"
            className="w-full max-h-80 md:h-80 object-cover rounded-xl"
          />
          <p className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl font-extrabold minmobile:text-xs text-white">
            Go to github to see the project
          </p>
        </div>
      </a>

      <div className="w-full p-5 text-gray-600 ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1  bg-gradient-to-r from-cyan-500 to-teal-500  p-1 shadow-xl rounded-md text-black font-mono"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </span>
  );
};

export default WorkItem;
