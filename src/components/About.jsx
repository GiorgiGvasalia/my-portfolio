import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-blue-900 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Giorgi, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a self-taught front-end developer, although I have learned a
              lot of free and paid resources on the Internet to improve my
              knowledge, as a result of this and tireless work, I can
              confidently present to you this portfolio where you can get to
              know my work and capabilities in detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
