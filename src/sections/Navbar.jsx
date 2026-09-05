import React, { useEffect, useMemo, useState } from "react";
import { navLinks } from "../constants";
import { CodeIcon, DownloadIcon } from "../components/Icons";
import { useScrollSpy } from "../hooks/useScrollSpy";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => ["hero", ...navLinks.map(({ link }) => link.replace("#", ""))],
    []
  );
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          <span className="flex-center size-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
            <CodeIcon className="size-4" />
          </span>
          Khushi
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => {
              const isActive = activeId === link.replace("#", "");
              return (
                <li key={name} className={isActive ? "active" : ""}>
                  <a href={link}>
                    <span>{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Let's Connect</span>
            </div>
          </a>

          <button
            className="lg:hidden text-white size-10 rounded-lg glass flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <img src="/images/menu.svg" alt="menu" className="size-5 invert" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 bg-[#08080f]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mx-auto max-w-7xl shadow-2xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ name, link }) => {
              const isActive = activeId === link.replace("#", "");
              return (
                <li key={name}>
                  <a
                    href={link}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 text-white"
                        : "text-white-50 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="/resume.pdf"
            download
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold"
          >
            <DownloadIcon className="size-4" />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
