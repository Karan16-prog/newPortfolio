import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center h-full">
        <p className="text-pink-600 text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Karan Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a React and React Native Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Adaptable professional with a few months of experience and proven knowledge of web development using MERN stack.
          Aiming to leverage my skills to successfully fill the Front End Developer role at your company.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              className="text-white border-2 py-3 px-6 my-2 flex items-center 
                    hover:bg-pink-600 hover:border-pink-600"
            >
              View Projects <HiArrowNarrowRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
