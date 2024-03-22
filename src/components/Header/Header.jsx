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

      <div className="hidden  lg:flex items-center font-mono gap-5  lg:w-full  h-auto">
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
              : "absolute bg-emerald-800 border font-bold top-0 left-0 w-[20rem]  h-[30rem] flex flex-col items-start z-200 p-10 gap-10  "
          }
        >
          <Link>
            {" "}
            <li className="  py-4 border p-2 text-white  text-4xl">Projects</li>
          </Link>
          <Link>
            {" "}
            <li className=" py-4  border p-2 text-white text-4xl">Resume</li>
          </Link>
          <Link>
            {" "}
            <li className=" py-2  border p-5 text-white text-4xl">Contact</li>
          </Link>
          <Link>
            {" "}
            <li className="  py-2  border p-5 text-white text-4xl">
              Projects
            </li>
          </Link>
        </ul>
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className="lg:hidden z-10 ">
        <div className="text-teal-200 absolute left-0  ">
          {!nav ? <FaBars size={40} /> : <FaTimes size={30} />}
        </div>
      </div>
    </div>
  );
};
