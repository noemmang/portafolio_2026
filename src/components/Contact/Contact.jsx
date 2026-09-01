import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { emailConfig, personal } from "../../data/portfolio";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();
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
          <p className="section-subtitle">{t("contact.subtitle")}</p>
          <h2 className="section-title">
            {t("contact.titlePrefix")} <span className="neon-text">{t("contact.titleHighlight")}</span>
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
              {t("contact.infoText")}
            </p>

            <div className="contact__info-items">
              <a href={`mailto:${personal.email}`} className="contact-info-item">
                <div className="contact-info-item__icon"><i className="fa-solid fa-envelope" /></div>
                <div>
                  <span className="contact-info-item__label">{t("contact.email")}</span>
                  <span className="contact-info-item__val">{personal.email}</span>
                </div>
              </a>

              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-info-item__icon"><i className="fa-brands fa-linkedin" /></div>
                <div>
                  <span className="contact-info-item__label">{t("contact.linkedin")}</span>
                  <span className="contact-info-item__val">noe-mmang-obono</span>
                </div>
              </a>

              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-info-item__icon"><i className="fa-brands fa-github" /></div>
                <div>
                  <span className="contact-info-item__label">{t("contact.github")}</span>
                  <span className="contact-info-item__val">noemmang</span>
                </div>
              </a>
            </div>

            <div className="contact__available">
              <span className="available-dot" />
              {t("contact.available")}
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
                <label className="form-label">{t("contact.form.name")}</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder={t("contact.form.namePlaceholder")}
                  value={fields.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t("contact.form.email")}</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder={t("contact.form.emailPlaceholder")}
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t("contact.form.subject")}</label>
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder={t("contact.form.subjectPlaceholder")}
                value={fields.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t("contact.form.message")}</label>
              <textarea
                name="message"
                className="form-input form-textarea"
                placeholder={t("contact.form.messagePlaceholder")}
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
                <><i className="fa-solid fa-circle-notch fa-spin" /> {t("contact.form.sending")}</>
              ) : (
                <><i className="fa-solid fa-paper-plane" /> {t("contact.form.send")}</>
              )}
            </button>

            {status === "success" && (
              <motion.div
                className="form-feedback form-feedback--success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fa-solid fa-circle-check" /> {t("contact.form.success")}
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                className="form-feedback form-feedback--error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fa-solid fa-circle-xmark" /> {t("contact.form.error")}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}