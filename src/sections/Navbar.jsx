import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
      {/* Logo */}
      <a href="#home" onClick={(e) => handleNav(e, "#home")} className="nav-logo">
        &lt;Prakash /&gt;
      </a>

      {/* Desktop links */}
      <ul className="nav-links hidden-mobile">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className={`nav-link${active === l.href ? " active" : ""}`}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="btn-primary"
             style={{ padding: "0.45rem 1.2rem", fontSize: "0.88rem", marginLeft: "0.5rem" }}>
            Hire Me
          </a>
        </li>
        <li>
          <button onClick={toggleTheme} className="nav-theme-btn" aria-label="Toggle Theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="nav-mobile-toggle show-mobile">
        <button onClick={toggleTheme} className="nav-theme-btn">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger-btn" aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)}
               className={`nav-mobile-link${active === l.href ? " active" : ""}`}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
