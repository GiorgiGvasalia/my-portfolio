import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full flex justify-between items-center bg-blue-900 h-[80px] text-white-300">
      <Link to="home" duration={500} smooth={true}>
        <div className="ml-3 font-bold cursor-pointer">
          <h1 className="text-3xl text-cyan-600">
            My<span className="text-gray-200">Portfolio</span>
          </h1>
        </div>
      </Link>

      <ul className="hidden md:flex text-gray-200">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*  hamburger menu */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="mr-3" /> : <FaTimes className="mr-3" />}
      </div>

      {/*  mobile menu  */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute  bg-blue-900 text-white top-0 left-0 w-full h-screen text-center flex flex-col justify-center items-center md:hidden"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*  social icons  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] bg-[blue] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gio-gvasalia-70566522b/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px]  h-[60px] bg-[#333333] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              target="_blank"
              href="https://github.com/GiorgiGvasalia"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] bg-sky-800 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              target="_blank"
              href="ggvasalia4@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] bg-orange-700 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
