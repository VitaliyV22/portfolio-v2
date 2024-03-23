import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Resume from "../../assets/Vitaliy Vitanskyy Resume.pdf";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const resumeGo = new URL(Resume, import.meta.url).href;

  return (
    <div
      id="navbar"
      className="w-full  h-[80px] lg:flex items-center font-mono justify-between px-20 "
    >
      {/* menu */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex items-center font-mono gap-5 lg:w-full h-auto"
      >
        <div className="z-200 text-4xl font-bold bg-teal-300 rounded-3xl p-1  transition duration-300 ease-in-out transform text-slate-900 hover:scale-100 ">
          VV
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:flex hidden gap-5 text-xl"
      >
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="text-teal-200 z-200  transition duration-300 ease-in-out transform cursor-pointer   hover:scale-100 "
        >
          <a>Projects</a>
        </Link>
        <a
          target="_blank"
          className="cursor-pointer"
          rel="noopener noreferrer"
          href={resumeGo}
        >
          Resume
        </a>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-teal-200  z-200  transition duration-300 ease-in-out transform cursor-pointer    hover:scale-100 "
        >
          <a>Contact</a>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-teal-200  z-200  transition duration-300 ease-in-out transform cursor-pointer    hover:scale-100 "
        >
          <a>About</a>
        </Link>
        <a
          className="hover:text-white   text-teal-300"
          href="https://github.com/VitaliyV22"
          target="_blank"
        >
          {" "}
          <FaGithub size={25} />{" "}
        </a>
        <a
          className="hover:text-white   text-teal-300"
          href="https://www.linkedin.com/in/vitaliy-vitanskyy/"
          target="_blank"
        >
          {" "}
          <FaLinkedin size={28} />{" "}
        </a>
      </motion.div>

      {/* mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute bg-emerald-800  font-bold top-0 left-0 w-screen h-screen flex flex-col items-center justify-center z-200 p-10 gap-10 "
          }
        >
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            {" "}
            <li className="py-4 border p-2 text-white text-4xl">Projects</li>
          </Link>
          <a
            onClick={handleClick}
            target="_blank"
            className="cursor-pointer text-teal-200"
            rel="noopener noreferrer"
            href={resumeGo}
          >
            {" "}
            <li className="py-4 border p-2 text-white text-4xl">Resume</li>
          </a>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {" "}
            <li className="py-2 border p-5 text-white text-4xl">About</li>
          </Link>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {" "}
            <li className="py-2 border p-5 text-white text-4xl">Contact</li>
          </Link>
        </ul>
      </motion.div>

      {/* hamburger */}
      <div onClick={handleClick} className="lg:hidden z-10 ">
        <div className="text-teal-200 absolute left-0  ">
          {!nav ? <FaBars size={40} /> : <FaTimes size={30} />}
        </div>
      </div>
    </div>
  );
};
