import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
export const Home = () => {
  return (
    <>
      <div>
  <div className="lg:flex flex-col justify-center items-start h-full p-5 lg:ml-40 mt-40">
    <div>
      
      <motion.div initial={{ opacity: 0, y: -110 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} >
        <h2 className="mt-2  text-teal-300 drop-shadow-md">Vitaliy Vitanskyy</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} >
        <h3 className="mt-4 font-bold">I write code & build projects</h3>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} >
        <p className="py-8 max-w-[700px]">
          Hi, I'm Vitaliy. I am a front-end developer that loves building
          things with code. I focus on creating modern, responsive and
          beautfiul applications.
        </p>
      </motion.div>
    </div>
    <div>
      <motion.div className="w-48 cursor-pointer">
        <Link
          className="z-200 font-bold group border border-emerald-200 rounded-lg transition hover:-translate-y-1 hover:bg-emerald-600 px-8 py-2 my-2 text-xl flex items-center "
          to="work"
          smooth={true}
          duration={500}
        >
          <a> My Work</a>
          <span className="group-hover:rotate-90 ml-3 text-teal-200 text-2xl">
            <HiArrowNarrowRight />
          </span>
        </Link>{" "}
      </motion.div>
    </div>
  </div>
</div>;
    </>
  );
};
