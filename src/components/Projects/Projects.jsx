import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../../data/portfolio";
import "./Projects.css";

// ── Carousel ──────────────────────────────────────────────────────────────────
function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!images || images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 2800);
  };

  const stopTimer = () => clearInterval(timerRef.current);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [images?.length]);

  const goTo = (i) => {
    setCurrent(i);
    stopTimer();
    startTimer();
  };

  if (!images || images.length === 0) {
    return (
      <div className="project-card__img">
        <div className="project-card__img-placeholder">
          <i className="fa-solid fa-code" />
        </div>
      </div>
    );
  }

  return (
    <div className="project-card__img" onMouseEnter={stopTimer} onMouseLeave={startTimer}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} — imagen ${i + 1}`}
          className={`carousel-img ${i === current ? "carousel-img--active" : ""}`}
        />
      ))}

      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? "carousel-dot--active" : ""}`}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className="carousel-counter">{current + 1} / {images.length}</div>
      )}
    </div>
  );
}

// ── Details Modal ─────────────────────────────────────────────────────────────
function DetailsModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-panel"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-panel__header">
            <div>
              <p className="modal-panel__subtitle">Detalles técnicos</p>
              <h3 className="modal-panel__title">{project.title}</h3>
            </div>
            <button className="modal-panel__close" onClick={onClose}>
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          {/* Links */}
          <div className="modal-panel__links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
              <i className="fa-brands fa-github" /> GitHub
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="modal-link modal-link--live">
                <i className="fa-solid fa-globe" /> Ver web
              </a>
            )}
          </div>

          {/* Details */}
          <div className="modal-panel__details">
            {Object.entries(project.details).map(([k, v]) => (
              <div className="modal-detail" key={k}>
                <span className="modal-detail__key">
                  <i className="fa-solid fa-chevron-right" />
                  {k.charAt(0).toUpperCase() + k.slice(1)}
                </span>
                <p className="modal-detail__val">{v}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="modal-panel__tags">
            {project.tags.map((tag, i) => (
              <span className="tag" key={i}>
                <i className={project.tagIcons[i]} />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index, inView }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="project-card-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        <div className="project-card">
          <div className="project-card__face project-card__front">
            <ImageCarousel images={project.images} title={project.title} />

            <div className="project-card__body">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__links">
                  <button
                    className="proj-btn proj-btn--info"
                    onClick={() => setModalOpen(true)}
                    title="Detalles técnicos"
                  >
                    <i className="fa-solid fa-circle-info" />
                  </button>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-btn">
                    <i className="fa-brands fa-github" />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn--live">
                      <i className="fa-solid fa-globe" />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    <i className={project.tagIcons[i]} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {modalOpen && (
        <DetailsModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proyectos" className="projects section-pad">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">// portfolio</p>
          <h2 className="section-title">
            Mis <span className="neon-text">Proyectos</span>
          </h2>
        </motion.div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}