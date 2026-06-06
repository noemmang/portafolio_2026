import { personal } from "../../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer__inner">
        <span className="footer__logo">
          <span style={{ color: "var(--accent-cyan)" }}>&lt;</span>NM
          <span style={{ color: "var(--accent-cyan)" }}>/&gt;</span>
        </span>
        <p className="footer__copy">
          &copy; 2026 {personal.name} — Desarrollado con React + Vite
        </p>
        <div className="footer__links">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </footer>
  );
}
