import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <>
      <div>
        <div className="  lg:flex flex-col justify-center items-start h-full p-5 border lg:ml-40 mt-40">
          <div>
            {" "}
            <h2 className="mt-2 drop-shadow-md">Vitaliy Vitanskyy</h2>
            <h3 className="mt-4 font-bold">I write code & build projects</h3>
            <p className="py-8 max-w-[700px]">
              Hi, I'm Vitaliy. I am a front-end developer that loves building
              things with code. I focus on creating modern, responsive and
              beautfiul applications.
            </p>
            <div>
              <div className="w-48 cursor-pointer">
                {" "}
                <Link
                  className="z-200 font-bold group border border-emerald-200 transition hover:-translate-y-1 hover:bg-emerald-600 px-8 py-2 my-2 text-xl flex items-center "
                  to="work"
                  smooth={true}
                  duration={500}
                >
                  <a> My Work</a>
                  <span className="group-hover:rotate-90 ml-3 text-teal-200 text-2xl">
                    <HiArrowNarrowRight />
                  </span>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};