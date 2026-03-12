import { useRef, useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const roles = ["Node.js Backend Developer", "Systems Administrator", "IT Executive"];

function Typewriter({ texts }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = texts[idx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => { setDisplay(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 35);
        return () => clearTimeout(t);
      } else {
        setIdx(i => (i + 1) % texts.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, idx, texts]);

  return (
    <span className="hero-name">
      {display}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

const stats = [
  { value: "15+", label: "Years IT Exp." },
  { value: "5+", label: "Major Projects" },
  { value: "450+", label: "Users Managed" },
  { value: "100%", label: "Uptime Focus" },
];

export default function Hero3D() {
  const { theme } = useTheme();

  const overlayBg = theme === "dark" 
    ? "linear-gradient(100deg, rgba(2,6,23,0.96) 0%, rgba(2,6,23,0.82) 45%, rgba(2,6,23,0.2) 75%, transparent 100%)"
    : "linear-gradient(100deg, rgba(248,250,252,0.96) 0%, rgba(248,250,252,0.82) 45%, rgba(248,250,252,0.2) 75%, transparent 100%)";

  return (
    <section id="home" className="hero-section" style={{ background: "var(--gradient-hero)" }}>

      {/* Decorative blobs behind text */}
      <div className="hero-glow-blob" />

      {/* Dark-left gradient so text reads clearly */}
      <div className="hero-overlay" style={{ background: overlayBg }} />

      {/* Hero Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span className="hero-badge-text">OPEN TO WORK</span>
        </div>

        {/* Name */}
        <h1 className="hero-title">
          <span>Hi, I'm</span>
          <br />
          <span className="hero-name">Prakash Patel</span>
        </h1>

        {/* Typewriter */}
        <p className="hero-typewriter">
          I'm a&nbsp;<Typewriter texts={roles} />
        </p>

        {/* Description */}
        <p className="hero-description">
          Experienced IT professional with a strong foundation in backend development and systems administration. Passionate about building robust Node.js architectures and maintaining highly efficient IT infrastructure.
        </p>

        {/* Stats row */}
        <div className="hero-stats-row">
          {stats.map(s => (
            <div key={s.label}>
              <div className="hero-stat-value">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <a href="/Prakash_Patel_Resume.pdf" download className="btn-primary">
            📄 Download Resume
          </a>
          <a href="#projects" className="btn-outline"
             onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            🚀 View Projects
          </a>
          <a href="#contact" className="btn-outline"
             onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            💬 Let's Talk
          </a>
        </div>

        {/* Social Icons */}
        <div className="hero-socials">
          <span className="hero-social-text">Find me on</span>
          {[
            { label: "GitHub",   url: "https://github.com/pmpatel",   svg: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" },
            { label: "LinkedIn", url: "https://linkedin.com/in/pmpatel", svg: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            { label: "Email",    url: "mailto:patelprakash21@gmail.com", svg: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" },
          ].map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label} className="hero-social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill={theme === "dark" ? "#818cf8" : "#ffffff"}>
                <path d={s.svg} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
}