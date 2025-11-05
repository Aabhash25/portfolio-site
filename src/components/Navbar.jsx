import { useState } from "react";

const Navbar = ({ locoScroll }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id) => {
    if (locoScroll.current) {
      locoScroll.current.scrollTo(document.getElementById(id), {
        offset: 0,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg py-4">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-2xl md:text-3xl font-heading font-bold text-gray-900 tracking-tight"
        >
          Aabhash
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-12 text-gray-900 text-lg md:text-xl font-bold font-sans">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollTo(link.id)}
                className="hover:text-indigo-500 cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 text-3xl font-bold"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-full absolute top-full left-0 z-40">
          <ul className="flex flex-col items-center gap-6 py-6">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScrollTo(link.id)}
                  className="text-gray-900 text-lg font-semibold hover:text-indigo-500"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
