

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="container footer-inner">
        <span className="footer-logo">&lt;Prakash /&gt;</span>

        <p className="footer-copy">
          © {year} Prakash. Built with ⚛️ React &amp; Vite
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="footer-top-btn"
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}
