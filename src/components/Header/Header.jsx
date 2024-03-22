import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      id="navbar"
      className="w-full h-[80px] lg:flex items-center font-mono justify-between px-20 "
    >
      {/* menu */}

      <div className="hidden  lg:flex items-center font-mono gap-5 w-full  h-auto">
        <Link to="home" smooth={true} duration={500}>
          <a className="z-200 text-4xl font-bold bg-teal-300 rounded-3xl p-1 cursor-pointer transition duration-300 ease-in-out transform text-slate-900 hover:scale-100 ">
            VV
          </a>
        </Link>
      </div>
      <div className="lg:flex hidden gap-5 text-xl">
        <Link
          to="/work"
          smooth={true}
          duration={500}
          className="text-teal-200 z-200  transition duration-300 ease-in-out transform cursor-pointer   hover:scale-100 "
        >
          <a>Projects</a>
        </Link>
        <a
          target="_blank"
          className="cursor-pointer text-teal-200"
          rel="noopener noreferrer"
          href=""
        >
          Resume
        </a>
        <Link
          to="/contact"
          smooth={true}
          duration={500}
          className="text-teal-200  z-200  transition duration-300 ease-in-out transform cursor-pointer    hover:scale-100 "
        >
          <a>Contact</a>
        </Link>
        <a
          className="hover:text-white   text-teal-300"
          href="https://github.com/VitaliyV22 
      "
          target="_blank"
        >
          {" "}
          <FaGithub size={25} />{" "}
        </a>
        <a
          className="hover:text-white   text-teal-300"
          href="https://www.linkedin.com/in/vitaliy-vitanskyy/
      "
          target="_blank"
        >
          {" "}
          <FaLinkedin size={28} />{" "}
        </a>
      </div>

      {/* mobile menu */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute text-white font-bold top-0 left-0 w-full bg-gradient-to-b from-blue-100 via-blue-500 to-blue-300 h-screen flex flex-col justify-center items-center z-10"
          }
        >
          <li className="py-6 text-4xl border-indigo-600">Projects</li>
          <li className="py-6 text-4xl">Resume</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        <div className="">{!nav ? <FaBars /> : <FaTimes />}</div>
      </div>
    </div>
  );
};
