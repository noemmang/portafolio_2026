import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, experience, certificates } from "../../data/portfolio";
import "./Education.css";

function TimelineItem({ item, index, inView }) {
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
          <span className="timeline-item__period">{item.period}</span>
          <span className="timeline-item__company">{item.company}</span>
        </div>
        <h4 className="timeline-item__title">{item.title}</h4>
        {Array.isArray(item.description)
          ? item.description.map((p, i) => (
              <p key={i} className="timeline-item__desc">{p}</p>
            ))
          : <p className="timeline-item__desc">{item.description}</p>
        }
      </div>
    </motion.article>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="estudios" className="education section-pad">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">// trayectoria</p>
          <h2 className="section-title">
            Estudios y <span className="neon-text">Experiencia</span>
          </h2>
        </motion.div>

        <div className="education__grid">
          {/* Formación */}
          <div className="education__col">
            <h3 className="education__col-title">
              <i className="fa-solid fa-graduation-cap" /> Formación
            </h3>
            <div className="timeline">
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Experiencia */}
          <div className="education__col">
            <h3 className="education__col-title">
              <i className="fa-solid fa-briefcase" /> Experiencia
            </h3>
            <div className="timeline">
              {experience.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} inView={inView} />
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
              <i className="fa-solid fa-certificate" /> Certificados
            </h3>
            <div className="certs-grid">
              {certificates.map((cert, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-card__icon">
                    <i className="fa-solid fa-award" />
                  </div>
                  <div>
                    <h4 className="cert-card__title">{cert.title}</h4>
                    <span className="cert-card__meta">ID: {cert.id}</span>
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