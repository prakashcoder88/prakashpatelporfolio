import { useEffect, useRef, useState } from "react";


function useInView(ref, options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "none";
        obs.unobserve(el);
      }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

const facts = [
  { icon: "📍", label: "Location", value: "Ahmedabad, Gujarat, India" },
  {
    icon: "💼", label: "Experience",
    value: <>15+ Years <br/><span className="about-fact-sub">13 Years as IT Executive</span><br/><span className="about-fact-sub">2+ Years Node.js Backend</span></>
  },
  { icon: "🎓", label: "Education", value: "B.C.A." },
  { icon: "🚀", label: "Focus",    value: "NodeJs Backend & SysAdmin" },
];

export default function About() {
  const [imgError, setImgError] = useState(false);
  const textRef = useRef();
  const imgRef  = useRef();
  useInView(textRef);
  useInView(imgRef);

  const initStyle = {
    opacity: 0,
    transform: "translateY(30px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate developer crafting digital experiences</p>

        <div className="about-grid">
          {/* Avatar */}
          <div ref={imgRef} style={initStyle} className="about-img-col">
            <div className="about-img-wrapper">
              <div className="about-img-glow" />
              {imgError ? (
                <div className="about-img-placeholder">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="rgba(129,140,248,0.7)">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              ) : (
                <img
                  src="/profile-placeholder.jpg"
                  alt="Prakash Patel"
                  onError={() => setImgError(true)}
                  className="about-real-img"
                />
              )}
            </div>

            <div className="about-status-badge">
              <div className="about-status-dot" />
              <span className="about-status-label">Available for Work</span>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} style={{ ...initStyle, transitionDelay: "0.15s" }}>
            <h3 className="about-heading">
              Hi, I'm <span className="glow-text">Prakash</span> 👋
            </h3>
            <p className="about-body">
              I'm an experienced <strong>Systems Administrator and Node.js Backend Developer</strong> with
              a Bachelor's degree in Computer Applications. I specialize in designing, building, and
              optimizing backend services, alongside managing extensive IT infrastructures.
            </p>
            <p className="about-body about-body-last">
              With over 15 years in the IT industry, I have a proven track record in technical support,
              physical security, and business process improvement. I bring hands-on experience in planning
              and implementing IT solutions for single and multi-location businesses, always focusing on
              system efficiency and reliability.
            </p>

            <div className="about-facts-grid">
              {facts.map(f => (
                <div key={f.label} className="about-fact-card">
                  <span className="about-fact-icon">{f.icon}</span>
                  <div>
                    <div className="about-fact-label">{f.label}</div>
                    <div className="about-fact-value">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ width: "fit-content" }}
               onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Let's Talk 💬
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
