import { useTheme } from "../context/ThemeContext";


const experience = [
  {
    role: "NodeJS Developer",
    company: "Virtual Height IT Services Pvt. Ltd.",
    period: "Sept 2023 – Present",
    desc: "Designed backend apps using Node.js & Express. Built RESTful APIs, managed MongoDB/MySQL, and resolved performance bottlenecks.",
    tags: ["Node.js", "Express", "MongoDB", "MySQL"],
    icon: "💻",
  },
  {
    role: "IT-Executive (System Admin)",
    company: "Hester Biosciences Ltd.",
    period: "Sept 2021 – Jan 2023",
    desc: "Managed IT operations for 450+ users. Handled servers, VMs, backups, AD accounts, and international technical support.",
    tags: ["Windows Server", "Active Directory", "VMs"],
    icon: "🖥️",
  },
  {
    role: "System Admin",
    company: "Solution Enterprise Pvt Ltd",
    period: "2016 – 2021",
    desc: "Performed maintenance and installation of network equipment, system administration, and user technical support.",
    tags: ["SysAdmin", "Networking", "Support"],
    icon: "🛡️",
  },
  {
    role: "System Admin",
    company: "Mitushi Healthcare Pvt Ltd",
    period: "2015 – 2016",
    desc: "Managed internal IT infrastructure, OS updates, user access access control, and daily computing operations.",
    tags: ["IT Infrastructure", "Security"],
    icon: "🔌",
  },
  {
    role: "Junior Associate",
    company: "3i Infotech Consultancy Services",
    period: "2011 – 2014",
    desc: "Provided IT support and consultancy. Handled basic system configuration and user troubleshooting.",
    tags: ["Consultancy", "Support"],
    icon: "🤝",
  },
  {
    role: "Customer Support",
    company: "PCS Technology Ltd",
    period: "2008 – 2011",
    desc: "Started IT career providing frontline customer support and troubleshooting assistance for computing hardware and software.",
    tags: ["Customer Support", "Hardware"],
    icon: "📞",
  },
];

const education = [
  {
    role: "B.C.A. (Computer Applications)",
    company: "Mangalam School of Management & Technology",
    period: "Graduated",
    desc: "Bachelor of Program in Computer Application, building a strong theoretical and practical IT foundation.",
    tags: ["Programming", "IT Systems"],
    icon: "🎓",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="experience-blob-left" />
      <div className="experience-blob-right" />

      <div className="container experience-content">
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="section-subtitle">My journey so far</p>

        <div className="exp-edu-grid">
          {/* Experience Column */}
          <div>
            <h3 className="exp-col-title">
              <span className="exp-col-title-icon">💼</span> Experience
            </h3>
            <div className="timeline-wrapper">
              <div className="timeline-line timeline-line-exp" />
              {experience.map((item, i) => (
                <div key={i} className="timeline-item" style={{ animation: `fadeInLeft 0.6s ease ${i * 0.15}s both` }}>
                  <div className="timeline-icon timeline-icon-exp">{item.icon}</div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-card-header">
                      <h3 className="timeline-role">{item.role}</h3>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <p className="timeline-company timeline-company-exp">@ {item.company}</p>
                    <p className="timeline-desc">{item.desc}</p>
                    <div className="timeline-tags">
                      {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="exp-col-title">
              <span className="exp-col-title-icon">🎓</span> Education
            </h3>
            <div className="timeline-wrapper">
              <div className="timeline-line timeline-line-edu" />
              {education.map((item, i) => (
                <div key={i} className="timeline-item" style={{ animation: `fadeInRight 0.6s ease ${i * 0.15}s both` }}>
                  <div className="timeline-icon timeline-icon-edu">{item.icon}</div>
                  <div className="glass-card timeline-card">
                    <div className="timeline-card-header">
                      <h3 className="timeline-role">{item.role}</h3>
                      <span className="timeline-period timeline-period-edu">{item.period}</span>
                    </div>
                    <p className="timeline-company timeline-company-edu">@ {item.company}</p>
                    <p className="timeline-desc">{item.desc}</p>
                    <div className="timeline-tags">
                      {item.tags.map(t => (
                        <span key={t} className="tag" style={{ background: "rgba(34,197,94,0.06)", color: "#16a34a", borderColor: "rgba(34,197,94,0.2)" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
