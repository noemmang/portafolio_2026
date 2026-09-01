import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, experience, certificates } from "../../data/portfolio";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Education.css";

// item.period, item.title y item.description pueden ser un valor plano
// (igual en ambos idiomas) o un objeto bilingüe { es, en }
function localized(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang];
  }
  return value;
}

function TimelineItem({ item, index, inView, lang }) {
  const description = localized(item.description, lang);

  return (
    <motion.article
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <div className="timeline-item__dot" />
      <div className="timeline-item__content">
        <div className="timeline-item__meta">
          <span className="timeline-item__period">{localized(item.period, lang)}</span>
          <span className="timeline-item__company">{item.company}</span>
        </div>
        <h4 className="timeline-item__title">{localized(item.title, lang)}</h4>
        {Array.isArray(description)
          ? description.map((p, i) => (
              <p key={i} className="timeline-item__desc">{p}</p>
            ))
          : <p className="timeline-item__desc">{description}</p>
        }
      </div>
    </motion.article>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang, t } = useLanguage();

  return (
    <section id="estudios" className="education section-pad">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">{t("education.subtitle")}</p>
          <h2 className="section-title">
            {t("education.titlePrefix")} <span className="neon-text">{t("education.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="education__grid">
          {/* Formación */}
          <div className="education__col">
            <h3 className="education__col-title">
              <i className="fa-solid fa-graduation-cap" /> {t("education.education")}
            </h3>
            <div className="timeline">
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} inView={inView} lang={lang} />
              ))}
            </div>
          </div>

          {/* Experiencia */}
          <div className="education__col">
            <h3 className="education__col-title">
              <i className="fa-solid fa-briefcase" /> {t("education.experience")}
            </h3>
            <div className="timeline">
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} inView={inView} lang={lang} />
              ))}
            </div>
          </div>
        </div>

        {/* Certificados — solo visible si hay alguno */}
        {certificates.length > 0 && (
          <motion.div
            className="education__certs"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="education__col-title">
              <i className="fa-solid fa-certificate" /> {t("education.certificates")}
            </h3>
            <div className="certs-grid">
              {certificates.map((cert, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-card__icon">
                    <i className="fa-solid fa-award" />
                  </div>
                  <div>
                    <h4 className="cert-card__title">{localized(cert.title, lang)}</h4>
                    <span className="cert-card__meta">{t("education.certId")}: {cert.id}</span>
                    <span className="cert-card__meta">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}