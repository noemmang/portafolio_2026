import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#estudios", label: "Estudios" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Update active link based on scroll position
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        {/* Logo */}
        <a href="#home" className="header__logo" onClick={() => handleNav("#home")}>
          <span className="logo__bracket">&lt;</span>
          <span className="logo__name">NM</span>
          <span className="logo__bracket">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={`nav__link ${active === link.href ? "nav__link--active" : ""}`}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  className="nav__underline"
                  layoutId="nav-underline"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a href="/documentos/cv_noe_mmang_2026.pdf" target="_blank" className="header__cta">
          Descargar CV
        </a>

        {/* Hamburger */}
        <button
          className={`header__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="header__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                className={`mobile-nav__link ${active === link.href ? "active" : ""}`}
                onClick={() => handleNav(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="mobile-nav__num">0{i + 1}</span>
                {link.label}
              </motion.button>
            ))}
            <a href="/assets/pdf/NoeMmang_CV.pdf" target="_blank" className="mobile-nav__cta">
              Descargar CV
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
