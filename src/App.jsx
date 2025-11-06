import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.0,
    });

    // Detect scroll direction
    locoScroll.current.on("scroll", (args) => {
      const currentY = args.scroll.y;
      const direction = currentY > lastScrollY.current ? "down" : "up";

      if (direction === "down") {
        locoScroll.current.smooth = true; // enable smooth scroll when scrolling down
      } else {
        locoScroll.current.smooth = false; // disable when scrolling up
      }

      lastScrollY.current = currentY;
    });

    // Refresh height after content/images load
    const handleResize = () => locoScroll.current.update();
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      locoScroll.current.destroy();
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
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
