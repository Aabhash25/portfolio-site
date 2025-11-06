import React from "react";

const About = () => {
  const techStack = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Deployment",
      icon: "https://cdn-icons-png.flaticon.com/512/2889/2889631.png", // generic deploy/hosting icon
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Django REST Framework",
      icon: "https://cdn.worldvectorlogo.com/logos/django.svg",
    },
    {
      name: "FastAPI",
      icon: "https://seeklogo.com/images/F/fastapi-logo-0B6C1D09FC-seeklogo.com.png",
    },
    {
      name: "AI/ML",
      icon: "https://cdn-icons-png.flaticon.com/512/921/921071.png", // generic AI/ML icon
    },
  ];

  const experiences = [
    {
      year: "2025 May - Present",
      role: "Frontend Engineer at SSN Corporation",
    },
    {
      year: "2025 Feb - 2025 May",
      role: "Frontend Developer Internship at SSN Corporation",
    },
    { year: "2022 March - 2022 June", role: "Data Annotator at Cloud Factory" },
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
              className="bg-white/20 p-3 rounded-lg text-center shadow-lg w-24"
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
