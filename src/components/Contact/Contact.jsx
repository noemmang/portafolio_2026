import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { emailConfig, personal } from "../../data/portfolio";
import "./Contact.css";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      emailjs.init(emailConfig.publicKey);
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, formRef.current);
      setStatus("success");
      setFields({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contacto" className="contact section-pad">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">// hablemos</p>
          <h2 className="section-title">
            ¿Cómo puedo <span className="neon-text">Ayudarte?</span>
          </h2>
        </motion.div>

        <div className="contact__grid">
          {/* Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="contact__info-text">
              Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología. No dudes en escribirme.
            </p>

            <div className="contact__info-items">
              <a href={`mailto:${personal.email}`} className="contact-info-item">
                <div className="contact-info-item__icon"><i className="fa-solid fa-envelope" /></div>
                <div>
                  <span className="contact-info-item__label">Email</span>
                  <span className="contact-info-item__val">{personal.email}</span>
                </div>
              </a>

              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-info-item__icon"><i className="fa-brands fa-linkedin" /></div>
                <div>
                  <span className="contact-info-item__label">LinkedIn</span>
                  <span className="contact-info-item__val">noe-mmang-obono</span>
                </div>
              </a>

              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-info-item__icon"><i className="fa-brands fa-github" /></div>
                <div>
                  <span className="contact-info-item__label">GitHub</span>
                  <span className="contact-info-item__val">noemmang</span>
                </div>
              </a>
            </div>

            <div className="contact__available">
              <span className="available-dot" />
              Disponible para nuevas oportunidades
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Tu nombre"
                  value={fields.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="tu@email.com"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Asunto</label>
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="¿De qué quieres hablar?"
                value={fields.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea
                name="message"
                className="form-input form-textarea"
                placeholder="Cuéntame tu proyecto o idea..."
                value={fields.message}
                onChange={handleChange}
                required
                rows={6}
              />
            </div>

            <button
              type="submit"
              className={`form-submit ${status === "sending" ? "sending" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <><i className="fa-solid fa-circle-notch fa-spin" /> Enviando...</>
              ) : (
                <><i className="fa-solid fa-paper-plane" /> Enviar mensaje</>
              )}
            </button>

            {status === "success" && (
              <motion.div
                className="form-feedback form-feedback--success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fa-solid fa-circle-check" /> ¡Mensaje enviado correctamente!
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                className="form-feedback form-feedback--error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fa-solid fa-circle-xmark" /> Error al enviar. Inténtalo de nuevo.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
