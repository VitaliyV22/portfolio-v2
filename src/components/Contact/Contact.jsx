import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export const Contact = () => {
  return (
    <div>
         <div id="contact" className=" h-[25rem] w-full p-10">
      <div className="flex flex-col justify-center items-center ">
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        </div>
        <div className="w-[20rem] py-6 text-center">
          <p>
            Feel free to reach out to my email with the button below or send me
            a message on Linkedin.
          </p>
        </div>
        <a
          href="mailto:vitanskyyv@gmail.com"
          className="font-bold text-teal-200 group border border-emerald-200 transition hover:-translate-y-1 hover:bg-emerald-600 px-8 py-2 my-2 text-xl "
        >
          Say hello
        </a>
      </div>
      <div className="flex gap-2 w-auto mt-5 items-center justify-center  ">
        <div>
          {" "}
          <Link className="cursor-pointer" to="navbar"
           smooth={true}
           duration={500}>
            <a>Go Top</a>
          </Link>
        </div>

        <div className="text-teal-200 animate-bounce w-6 h-6 ...">
          {" "}
          <FaArrowUp />
        </div>
      </div>
    </div> 
    </div>
  )
}
