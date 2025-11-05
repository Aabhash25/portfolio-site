import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null); // store LocomotiveScroll instance

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.0,
    });

    return () => locoScroll.current.destroy();
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Navbar locoScroll={locoScroll} />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
