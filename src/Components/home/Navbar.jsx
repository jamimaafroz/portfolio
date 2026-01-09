import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Projects", id: "project-section" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
  }, [navOpen]);

  // Active section observer
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const handleNavigate = (id) => {
    setNavOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-md bg-slate-900/90 border-b bg-slate-900/90 shadow-xl"
          : "py-5 bg-slate-950/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <RouterLink to="/" className="group">
          <h1 className="text-2xl font-bold tracking-tight text-slate-100">
            <span className="text-emerald-400">&lt;</span>
            Usha
            <span className="text-emerald-400 group-hover:translate-x-1 inline-block transition-transform">
              /&gt;
            </span>
          </h1>
        </RouterLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ name, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNavigate(id)}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  activeSection === id
                    ? "text-emerald-400"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-400 transition-all duration-300 ${
                    activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
            aria-label="Download Resume"
          >
            Resume <FaDownload size={14} />
          </a>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-100"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

     {/* Mobile Menu Dropdown */}
<div
  className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ${
    navOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
  } bg-slate-900 border-b border-slate-800`}
>
  <ul className="flex flex-col items-center py-8 gap-6">
    {navLinks.map(({ name, id }) => (
      <li key={id}>
        <button
          onClick={() => handleNavigate(id)}
          className="text-lg font-medium text-slate-100 hover:text-emerald-400 transition-colors"
        >
          {name}
      </button>
      </li>
    ))}
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 px-6 py-2 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition"
    >
      Resume
    </a>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
