import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import REACT from "../assets/react.png";
import TAILWINDCSS from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-blue-900 text-gray-300 w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600">
            Skills
          </p>
          <p className="py-4">// Those are technologies I can work with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML-LOGO" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML-LOGO" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="HTML-LOGO" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACT} alt="HTML-LOGO" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-gray-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TAILWINDCSS} alt="HTML-LOGO" />
            <p className="my-4">Tailwindcss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
