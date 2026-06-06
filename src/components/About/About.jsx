import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personal, softSkills, services } from "../../data/portfolio";
import "./About.css";

function SkillBar({ label, value, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__label">{label}</span>
        <span className="skill-bar__value">{value}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre-mi" className="about section-pad">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">// sobre mí</p>
          <h2 className="section-title">
            Quién <span className="neon-text">Soy</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          {/* Bio + data */}
          <motion.div
            className="about__left"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="about__bio">
              {personal.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <ul className="about__data">
              <li><span className="data__key">Edad</span><span className="data__sep">//</span><span className="data__val">{personal.age}</span></li>
              <li><span className="data__key">País</span><span className="data__sep">//</span><span className="data__val">{personal.location}</span></li>
              <li><span className="data__key">Email</span><span className="data__sep">//</span><a href={`mailto:${personal.email}`} className="data__val data__link">{personal.email}</a></li>
            </ul>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            className="about__right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="about__skills-title">Fortalezas <span className="neon-text">Personales</span></h3>
            <div className="about__skills">
              {softSkills.map((s, i) => (
                <SkillBar key={s.label} label={s.label} value={s.value} index={i} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="about__services">
              {services.map((s, i) => (
                <div className="service-card" key={i}>
                  <div className="service-card__icon">
                    <i className={s.icon} />
                  </div>
                  <div>
                    <h4 className="service-card__title">{s.title}</h4>
                    <p className="service-card__desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
}
