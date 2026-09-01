import { motion } from "framer-motion";
import { personal } from "../../data/portfolio";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Hero.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section id="home" className="hero">
      {/* Grid bg */}
      <div className="hero__grid" aria-hidden />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden />
      <div className="hero__orb hero__orb--2" aria-hidden />

      <div className="section-container hero__content">
        <motion.div
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Photo centered */}
          <motion.div className="hero__avatar-wrap" variants={itemVariants}>
            <img
              src="/img/fotocurriculum.JPG"
              alt={personal.name}
              className="hero__avatar"
            />
          </motion.div>

          {/* Greeting below photo */}
          <motion.p className="hero__greeting section-subtitle" variants={itemVariants}>
            &lt; {t("hero.greetingPrefix")} {personal.name} /&gt;
          </motion.p>

          <motion.p className="hero__bio" variants={itemVariants}>
            {personal.bioSimple[lang][0]}
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <button className="btn btn--primary" onClick={() => scrollTo("contacto")}>
              {t("hero.contact")}
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo("proyectos")}>
              {t("hero.viewProjects")}
            </button>
          </motion.div>

          <motion.div className="hero__socials" variants={itemVariants}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
            <span className="social-line" />
          </motion.div>
        </motion.div>

        {/* Floating code block */}
        <motion.div
          className="hero__code-card"
          initial={{ opacity: 0, x: 60, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="code-card__dots">
            <span style={{ background: "#ff5f57" }} />
            <span style={{ background: "#febc2e" }} />
            <span style={{ background: "#28c840" }} />
          </div>
          <pre className="code-card__code">
            <span className="c-keyword">const</span>{" "}
            <span className="c-var">developer</span>{" = {"}
            {"\n"}{"  "}<span className="c-prop">{t("hero.code.name")}</span>:{" "}
            <span className="c-str">"{personal.name}"</span>,{"\n"}
            {"  "}<span className="c-prop">{t("hero.code.role")}</span>:{" "}
            <span className="c-str">"{personal.role[lang]}"</span>,{"\n"}
            {"  "}<span className="c-prop">{t("hero.code.location")}</span>:{" "}
            <span className="c-str">"{personal.location[lang]}"</span>,{"\n"}
            {"  "}<span className="c-prop">{t("hero.code.stack")}</span>: [{"\n"}
            {"    "}<span className="c-str">"HTML, CSS3"</span>,{"\n"}
            {"    "}<span className="c-str">"JavaScript, TypeScript, Python, Java"</span>,{"\n"}
            {"    "}<span className="c-str">"React, Angular, Laravel, Node.js"</span>,{"\n"}
            {"    "}<span className="c-str">"MySQL, PostgreSQL, SQLServer"</span>,{"\n"}
            {"    "}<span className="c-str">"Git, GitHub, Azure, Docker"</span>,{"\n"}
            {"  "}],{"\n"}
            {"  "}<span className="c-prop">{t("hero.code.available")}</span>:{" "}
            <span className="c-bool">true</span>,{"\n"}
            {"}"};
          </pre>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span>{t("hero.scroll")}</span>
        <motion.span
          className="hero__scroll-arrow"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}