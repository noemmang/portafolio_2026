import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "portfolio-lang";
const SUPPORTED = ["es", "en"];
const DEFAULT_LANG = "es";

function getInitialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  // t("nav.home") -> looks up translations[lang].nav.home, falls back to es, then to the key itself
  const t = useMemo(() => {
    return (path) => {
      const lookup = (dict) =>
        path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dict);
      return lookup(translations[lang]) ?? lookup(translations[DEFAULT_LANG]) ?? path;
    };
  }, [lang]);

  const value = { lang, setLang, toggleLang, t };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return ctx;
}