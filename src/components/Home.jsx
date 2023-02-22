import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-blue-900 w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-600">Hi, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-stone-300 ">
          Giorgi Gvasalia
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">
          Junior Front-end developer
        </h2>
        <p className="text-gray-400 max-w-[700px] py-4">
          I am junior front-end developer from Georgia. here is some information
          about me and I tried to keep it short and simple so you can easily
          learn about me if you are interested.
        </p>
        <div>
          <Link to="work" duration={500} smooth={true}>
            <button className="text-white group border-2 px-4 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 hover:" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
