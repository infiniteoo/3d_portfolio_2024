import { Link } from "react-router-dom";

import CTA from "../components/CTA";
import { projects } from "../constants";
import arrow from "../assets/icons/arrow.svg";

const Projects = () => {
  console.log(projects);
  return (
    <section className="max-container">
      <h1 className="head-text text-center">
        <span className="blue-gradient_text drop-shadow font-semibold">
          My Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Coding is a passion which I hope to one day turn into a career. When I'm
        not sleeping or driving a forklift, I'm writing code, studying
        documentation, or learning new technologies. For the past six months
        I've been highly engaged in developing warehouse and logistics focused
        applications, even building an entire WMS. Recently, I've become
        captivated by 3D web technologies such as Three.js, and plan on
        venturing down that path to see where it takes me. Check out some of my
        highlights below!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-20 h-20">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center ">
                <img
                  src={project.image}
                  alt="threads"
                  className="w-16 h-16 object-contain "
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins justify-between">
                <Link
                  to={project.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <Link
                  to={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Github
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
