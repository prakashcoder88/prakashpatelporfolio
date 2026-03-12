import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "Mini RWA",
    desc: "A platform allowing users to buy real-world properties using cryptocurrency in a simple and secure way.",
    longDesc: "Built on blockchain infrastructure, enabling tokenized real estate ownership with crypto payments, smart contract verification, and a seamless user experience.",
    tags: ["Node.js", "Crypto", "Web3", "Blockchain"],
    emoji: "🏠",
    github: "#",
    live: "#",
    accent: "#6366f1",
    gradient: "linear-gradient(135deg, #0f0a2e 0%, #1e1b4b 50%, #312e81 100%)",
  },
  {
    title: "Suuvo Application",
    desc: "A social media platform combining networking features with e-commerce capabilities.",
    tags: ["Node.js", "Social", "E-commerce"],
    emoji: "🛒",
    github: "#",
    live: "#",
    accent: "#f59e0b",
    gradient: "linear-gradient(135deg, #1c1001 0%, #431407 100%)",
  },
  {
    title: "COA Application",
    desc: "End-to-end solar system installation and maintenance platform.",
    tags: ["Node.js", "Green Energy", "Management"],
    emoji: "☀️",
    github: "#",
    live: "#",
    accent: "#22c55e",
    gradient: "linear-gradient(135deg, #052e16 0%, #14532d 100%)",
  },
  {
    title: "InvestEdge Analytics",
    desc: "A trading suggestion platform providing buy/sell recommendations based on market analysis.",
    tags: ["Node.js", "Trading", "Analytics"],
    emoji: "📈",
    github: "#",
    live: "#",
    accent: "#38bdf8",
    gradient: "linear-gradient(135deg, #072538 0%, #0c4a6e 100%)",
  },
  {
    title: "Connplex Cinema",
    desc: "A multiplex ticketing platform for a comfortable, entertaining movie-watching experience.",
    tags: ["Node.js", "Ticketing", "Entertainment"],
    emoji: "🎬",
    github: "#",
    live: "#",
    accent: "#a855f7",
    gradient: "linear-gradient(135deg, #1a0533 0%, #2e1065 100%)",
  },
];

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
  </svg>
);

export default function Projects() {
  const { theme } = useTheme();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-padding projects-section">
      {/* Decorative background elements */}
      <div className="projects-bg-elements">
        <div className="projects-blob-1" />
        <div className="projects-blob-2" />
      </div>

      <div className="container projects-content">
        {/* Section header */}
        <div className="projects-header">
          <div className="projects-title-wrap">
            <div className="projects-badge">
              <span className="projects-badge-dot" />
              <span className="projects-badge-label">PORTFOLIO</span>
            </div>
            <h2 className="section-title projects-title">Visualizing Innovation</h2>
            <p className="projects-subtitle">A collection of professional projects exploring the intersection of design and functionality.</p>
          </div>
          <a href="https://github.com/pmpatel" target="_blank" rel="noreferrer" className="projects-github-btn">
            <GitHubIcon /> GitHub Repositories
          </a>
        </div>

        {/* Featured Card */}
        <div className="featured-card-wrapper" style={{ animation: "fadeInUp 0.8s ease both" }}>
          <div className="featured-card">
            <div className="featured-visual">
              <div className="featured-visual-overlay" />
              <div 
                className="featured-visual-bg" 
                style={{ 
                  background: featured.gradient,
                  backgroundOpacity: 0.8 
                }} 
              />
              <div className="featured-emoji-wrap">
                {featured.emoji}
              </div>
              <div className="featured-badge" style={{ 
                position: "absolute", top: "2rem", left: "2rem", zIndex: 5,
                padding: "0.5rem 1.2rem", background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "99px", color: "white", fontSize: "0.75rem", fontWeight: "800"
              }}>
                MOST RECENT
              </div>
            </div>

            <div className="featured-content">
              <span className="featured-project-num" style={{ color: featured.accent }}>
                Project 01 — System Architecture
              </span>
              <h3 className="featured-title">{featured.title}</h3>
              <p className="featured-desc">{featured.longDesc || featured.desc}</p>
              
              <div className="featured-tags">
                {featured.tags.map(tag => (
                  <span key={tag} className="featured-tag">{tag}</span>
                ))}
              </div>

              <div className="featured-actions">
                <a href={featured.live} className="btn-primary" style={{ flex: 1, textAlign: "center", justifyContent: "center" }}>
                  Live Experience ↗
                </a>
                <a href={featured.github} className="btn-outline" style={{ display: "flex", gap: "0.8rem" }}>
                  <GitHubIcon /> Source
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid for other projects */}
        <div className="projects-grid">
          {rest.map((p, i) => (
            <div key={p.title} className="project-card" style={{ animation: `fadeInUp 0.6s ease ${0.2 + i * 0.1}s both` }}>
              <div className="project-header">
                <div className="project-header-bg" style={{ background: p.gradient }} />
                <span className="project-emoji">{p.emoji}</span>
                <span className="project-num">0{i + 2}</span>
              </div>
              
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                
                <div className="project-tags">
                  {p.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    <GitHubIcon /> View Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link live">
                    Preview Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
