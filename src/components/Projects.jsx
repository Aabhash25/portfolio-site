import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start items-start px-8 md:px-24 py-12 bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-50/90 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-8 w-full">
        {/* Header */}
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-scroll
            data-scroll-speed="1.7"
          >
            Projects
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mb-2 text-gray-700"
            data-scroll
            data-scroll-speed="1.5"
          >
            I’ve built a variety of projects at the crossroads of AI, full-stack
            development, and scalable systems. Each one tackles real challenges
            with clean code and innovative tech.
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl text-gray-700"
            data-scroll
            data-scroll-speed="1.3"
          >
            From automating workflows to creating interactive dashboards, these
            showcase my passion for efficient, user-centric solutions.
          </p>
        </div>

        {/* Projects Grid (static, no scroll) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.name}
                </h3>
                <p className="text-sm mb-3 text-gray-700 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-gray-100 text-gray-800 border border-gray-200 rounded-md text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* GitHub Link (static) */}
        <div className="text-center w-full mt-6">
          <p className="text-lg md:text-xl text-gray-700">
            For more projects, visit my{" "}
            <a
              href="https://github.com/aabhashbasnet"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              GitHub Profile →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
