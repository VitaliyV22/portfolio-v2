import React from "react";
import Css from "../../assets/icons8-css-480.png";
import Html from "../../assets/icons8-html-5-480.png";
import Tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import Js from "../../assets/icons8-javascript-480.png";
import NextJs from "../../assets/next-js.svg";
import { motion } from "framer-motion";

export const About = () => {
  const skills = [
    { name: "HTML", Image: Html },
    { name: "CSS", Image: Css },
    { name: "Javascript", Image: Js },
    { name: "React", Image: react },
    { name: "Tailwind Css", Image: Tailwind },
    { name: "Next JS", Image: NextJs },
  ];

  return (
    <div id="about">
      <div className="lg:h-[70rem] mx-auto px-4 lg:flex items-center justify-center gap-20">
        <div className="lg:flex flex-col h-auto lg:w-1/2 justify-center items-start gap-3">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl my-5 font-bold"
          >
            About Me
          </motion.h2>
          <div className="lg:flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className=" max-w-[700px]">
                I bring a distinctive perspective to front-end software
                development, having transitioned from
                <span className="p-1 text-teal-200">
                  a robust background in banking to cultivate a passion for
                  coding.
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="py-8 max-w-[700px]">
                My proficiency in analytical thinking, and experience in the
                financial sector, complements my creative process in designing
                <span className="text-teal-200 p-1">
                  seamless user experiences.
                </span>
                I am always committed to continuous improvement and the
                learning of new technologies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p>
                <span className="text-teal-200">
                  When I'm not looking at the screen
                </span>
                , I devote my free time to music production, working out, and
                playing Catan with my friends.
              </p>
            </motion.div>
          </div>
        </div>
        <div
          name="skills"
          className="w-[30rem]  h-auto lg:flex justify-center flex-col"
        >
          <div>
            <h2 className="text-4xl my-5 font-bold">Technologies I use</h2>
          </div>
          <div className="lg:flex flex-col gap-5">
            {skills.map((skill, index) => (
              <ul key={index} className="flex">
                <div
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.8 }}
                    src={skill.Image}
                    alt={skill.name}
                    className="w-10 mx-auto transition hover:translate-x-3"
                  />
                </div>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 1, duration: 0.8 }}
                  className="text-teal-200 font-inter font-bold px-5"
                >
                  {skill.name}
                </motion.li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
