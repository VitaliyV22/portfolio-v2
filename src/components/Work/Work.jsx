import React from "react";
import LOR from "../../assets/projects/lor.png";
import Ergo from "../../assets/projects/ergo.png";
import MovieClips from "../../assets/projects/MovieClips.png";

export const Work = () => {
  const projects = [
    {
      name: "Movie Clips",
      description:
        "Movie Clips is a movie rating website I built for my portofolio. It uses the TMBD API to fetch data. You can search movies and shows based on different criteria and also add them to your favorites list.",
      languages: ["React Js", "Tailwind CSS", "Axios","TMBD API", "Vite"],
      previewImage: MovieClips,
      githubLink: "https://github.com/VitaliyV22/Movie-Clips",
      demoLink: "https://main.dw23q6nv8tu6w.amplifyapp.com/",
    },
    {
      name: "Ergo Style",
      description:
        "ErgoStyle showcases a range of ergonomic chairs and desks, along with features and benefits, to attract potential customers interested in improving their workspace setup.",
      languages: ["React JS", "Tailwind CSS", "Next JS"],
      previewImage: Ergo,
      githubLink: "https://github.com/VitaliyV22/Waybeyond",
      demoLink: "https://master.d2nv73m0bi1w8n.amplifyapp.com/",
    },
    {
      name: "Lord of the Rings Librarian",
      description:
        "Welcome to the Lord of the Rings Search Project! This project allows users to search for characters, books, movies, and quotes related to the beloved fantasy series The Lord of the Rings",
      languages: ["React JS", "Tailwind CSS", "Next JS","The One API"],
      previewImage: LOR,
      githubLink: "https://github.com/VitaliyV22/Lord-of-The-Rings-Library",
      demoLink: "https://master.dznzdu9yy1b1u.amplifyapp.com/",
    },
  ];
  return (
    <div id="work">
      <div>
        <div className="max-w-7xl h-full my-48 mx-auto px-4">
          <div className="p-10">    <h2 className="text-4xl font-bold text-center">Projects</h2></div>
      
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border hover:bg-emerald-900 transition-colors duration-500  border-white p-6 rounded-lg flex flex-col justify-between"
              >
                <img
                  src={project.previewImage}
                  alt={project.name}
                  className="mb-4 rounded-lg h-48 w-full  object-cover"
                />
                <div className="border h-[12rem] rounded-lg p-2 mb-3 ">
                  <h3 className="text-xl text-indigo-200 font-bold mb-2">
                    {project.name}
                  </h3>
                  <p className="cursor-default">{project.description}</p>
                </div>
                <div className="lg:flex h-[5rem] flex-wrap">
                  {project.languages.map((language, index) => (
                    <span key={index} className="p-2 font-inter cursor-default text-teal-200">
                      {language}
                    </span>
                  ))}
                </div>
                <hr />
                <div className="lg:flex gap-3 mt-4">
                  <a
                    href={project.githubLink}
                    className=" text-teal-200 text-xl hover:bg-slate-900    -500 rounded-lg p-2 font-bold"
                  >
                    Github
                  </a>
                  <a
                    href={project.demoLink}
                    className=" text-teal-200   text-xl hover:bg-slate-900 rounded-lg p-2 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
