import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const contactInfo = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#818cf8"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
    label: "Email", value: "patelprakash21@gmail.com", href: "mailto:patelprakash21@gmail.com",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#818cf8"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
    label: "Location", value: "Unjha, Gujarat, India", href: null,
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#818cf8"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>,
    label: "Response Time", value: "Within 24 hours", href: null,
  },
];

const socials = [
  { name: "GitHub",   url: "https://github.com",   path: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" },
  { name: "LinkedIn", url: "https://linkedin.com", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "Twitter",  url: "https://twitter.com",  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

export default function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="contact-blob-right" />
      <div className="contact-blob-top" />
      <div className="contact-blob-bottom" />

      <div className="container contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's build something great together.</p>

        <div className="contact-grid">
          {/* Left column */}
          <div>
            <div className="contact-info-card">
              <h3 className="contact-info-heading">Let's work together</h3>
              <p className="contact-info-text">
                I'm currently open to freelance projects, full-time roles, and interesting collaborations.
                Whether you have a question or just want to say hi — my inbox is always open!
              </p>

              {contactInfo.map(item => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon-wrap">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="contact-info-link">{item.value}</a>
                    ) : (
                      <div className="contact-info-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <p className="contact-social-label">Connect with me</p>
            <div className="contact-socials">
              {socials.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" title={s.name} className="contact-social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={theme === "light" ? "#4f46e5" : "#818cf8"}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success-icon">✅</div>
                <h3 className="contact-success-title">Message Sent!</h3>
                <p className="contact-success-text">I'll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="btn-outline" style={{ fontSize: "0.88rem" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <label className="contact-label">
                        {field === "name" ? "Your Name" : "Email"}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        placeholder={field === "name" ? "John Doe" : "john@example.com"}
                        required
                        value={form[field]}
                        onChange={handleChange}
                        className="contact-input"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="contact-label">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="contact-input"
                    style={{ resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                <button type="submit" disabled={loading} className="contact-submit">
                  {loading ? (
                    <><div className="contact-spinner" /> Sending...</>
                  ) : "🚀 Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
