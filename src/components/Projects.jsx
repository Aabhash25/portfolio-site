import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "AI Workflow Automator",
      description:
        "An intelligent tool that automates engineering workflows using ML models to predict and optimize task sequences.",
      tech: ["React", "Node.js", "Python", "TensorFlow"],
      link: "#",
    },
    {
      name: "Smart E-Commerce Platform",
      description:
        "Full-stack e-commerce app with real-time inventory management, recommendation engine, and secure payments.",
      tech: ["Next.js", "Express.js", "MongoDB", "AWS"],
      link: "#",
    },
    {
      name: "Collaborative Code Editor",
      description:
        "Real-time multiplayer code editor with syntax highlighting, version control integration, and AI-assisted debugging.",
      tech: ["TypeScript", "GraphQL", "Socket.io", "Docker"],
      link: "#",
    },
    {
      name: "Health Monitoring Dashboard",
      description:
        "IoT-based dashboard for tracking vital signs with predictive analytics and alert systems powered by Firebase.",
      tech: ["React", "Python", "PostgreSQL", "Firebase"],
      link: "#",
    },
  ];

  const stats = [
    { value: "25+", label: "Projects Completed" },
    { value: "15+", label: "Live Deployments" },
    { value: "50K+", label: "Users Served" },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-50/90 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-12 w-full">
        {/* Projects Text */}
        <div data-scroll data-scroll-speed="1.5">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            data-scroll
            data-scroll-speed="1.7"
          >
            Projects
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mb-4"
            data-scroll
            data-scroll-speed="1.5"
          >
            I’ve built a variety of projects at the crossroads of AI, full-stack
            development, and scalable systems. Each one tackles real challenges
            with clean code and innovative tech.
          </p>
          <p
            className="text-lg md:text-xl max-w-2xl"
            data-scroll
            data-scroll-speed="1.3"
          >
            From automating workflows to creating interactive dashboards, these
            showcase my passion for efficient, user-centric solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid md:grid-cols-2 gap-8 w-full"
          data-scroll
          data-scroll-speed="1.2"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              data-scroll
              data-scroll-speed={1 + (i % 4) * 0.1}
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-4 text-gray-700">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-white/30 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-gray-900 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
