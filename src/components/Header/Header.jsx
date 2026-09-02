import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { personal } from "../../data/portfolio";
import "./Header.css";

const navKeys = [
  { href: "#home", key: "nav.home" },
  { href: "#sobre-mi", key: "nav.about" },
  { href: "#estudios", key: "nav.education" },
  { href: "#habilidades", key: "nav.skills" },
  { href: "#proyectos", key: "nav.projects" },
  { href: "#contacto", key: "nav.contact" },
];

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const navLinks = navKeys.map((l) => ({ ...l, label: t(l.key) }));
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

        {/* Language switcher */}
        <button
          className="header__lang"
          onClick={toggleLang}
          aria-label={lang === "es" ? t("langSwitch.switchToEn") : t("langSwitch.switchToEs")}
          title={lang === "es" ? t("langSwitch.switchToEn") : t("langSwitch.switchToEs")}
        >
          <span className={lang === "es" ? "header__lang-active" : ""}>{t("langSwitch.es")}</span>
          <span className="header__lang-sep">/</span>
          <span className={lang === "en" ? "header__lang-active" : ""}>{t("langSwitch.en")}</span>
        </button>

        {/* CTA */}
        <a href={personal.cv[lang]} target="_blank" rel="noopener noreferrer" className="header__cta">
          {t("nav.downloadCV")}
        </a>

        {/* Hamburger */}
        <button
          className={`header__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t("nav.menu")}
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
            <button
              className="mobile-nav__lang"
              onClick={toggleLang}
              aria-label={lang === "es" ? t("langSwitch.switchToEn") : t("langSwitch.switchToEs")}
            >
              <i className="fa-solid fa-language" />
              <span className={lang === "es" ? "header__lang-active" : ""}>{t("langSwitch.es")}</span>
              <span className="header__lang-sep">/</span>
              <span className={lang === "en" ? "header__lang-active" : ""}>{t("langSwitch.en")}</span>
            </button>

            <a href={personal.cv[lang]} target="_blank" rel="noopener noreferrer" className="mobile-nav__cta">
              {t("nav.downloadCV")}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}