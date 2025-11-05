import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-start px-8 md:px-24 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-32 md:pt-40">
        <h1
          className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
          data-scroll
          data-scroll-speed="2"
        >
          <Typewriter
            words={["Hi, I’m Aabhash Basnet"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <p
          className="text-lg md:text-2xl font-sans mb-8 max-w-xl"
          data-scroll
          data-scroll-speed="1"
        >
          AI & Full-Stack Engineer — I build intelligent tools that automate
          engineering workflows and create smart solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
