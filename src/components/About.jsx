import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <p className='text-4xl font-bold sm:text-right'>Hi. I'm Karan, nice to meet you. Please take a look around</p>
          <div>
            <p>
              I am a self taught frontend developer based in New Delhi. I am a '21 graduate. I have been learning web development for 
              almost a year now. I am also learning backend development(MERN stack) and aspire to be a fullstack developer very soon.

              I am actively looking for opportunities where I can utilize my skills and learn 
              new things at the same time. Do consider me if you have one!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
