import React from "react";

const About = () => {
  const techStack = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  const experiences = [
    { year: "2024 - Present", role: "AI & Full-Stack Engineer at XYZ Company" },
    { year: "2022 - 2024", role: "Software Developer at ABC Solutions" },
    { year: "2020 - 2022", role: "Internships & Personal Projects" },
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "25+", label: "Projects Completed" },
    { value: "10+", label: "Companies Worked" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-50/90 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-12 w-full">
        {/* About Text */}
        <div data-scroll data-scroll-speed="1.5">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            data-scroll
            data-scroll-speed="1.7"
          >
            About Me
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mb-4"
            data-scroll
            data-scroll-speed="1.5"
          >
            I’m Aabhash Basnet, an AI & Full-Stack Engineer. I build intelligent
            tools that automate engineering workflows and create smart
            solutions.
          </p>
          <p
            className="text-lg md:text-xl max-w-2xl"
            data-scroll
            data-scroll-speed="1.3"
          >
            I love working at the intersection of AI, web development, and user
            experience. My goal is to create clean, efficient, and innovative
            solutions that solve real-world problems.
          </p>
        </div>

        {/* Tech Stack */}
        <div
          className="flex flex-wrap gap-4 justify-start items-center"
          data-scroll
          data-scroll-speed="1.2"
        >
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="bg-white/20 p-3 rounded-lg text-center shadow-lg w-20"
              data-scroll
              data-scroll-speed={1 + (i % 5) * 0.1} // small parallax difference for each logo
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="mx-auto w-10 h-10 mb-1"
              />
              <p className="text-xs">{tech.name}</p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div
          className="grid md:grid-cols-3 gap-8"
          data-scroll
          data-scroll-speed="1"
        >
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border-l-2 border-gray-300 pl-6"
              data-scroll
              data-scroll-speed={1 + i * 0.2}
            >
              <h4 className="font-semibold">{exp.year}</h4>
              <p>{exp.role}</p>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div
          className="flex flex-wrap gap-8 mt-6"
          data-scroll
          data-scroll-speed="1"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center w-36"
              data-scroll
              data-scroll-speed={1 + i * 0.2}
            >
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12" data-scroll data-scroll-speed="1.5">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
