// ─── PERSONAL INFO ───────────────────────────────────────────────────────────
export const personal = {
  name: "Noe Mmang",
  role: "Desarrollador Web",
  roleEn: "Web Developer",
  location: "Madrid, España",
  email: "nnguemamifumu@gmail.com",
  age: 20,
  bioSimple: [
    "Desarrollador de aplicaciones Full Stack de Madrid, España.",
  ],
  bio: [
    "Desarrollador de aplicaciones web con formación Full Stack. Se interesa por participar en todas las etapas del desarrollo de software, desde la interfaz de usuario hasta la lógica del servidor y la gestión de bases de datos.",
    "Inició este camino motivado por la experiencia y el trabajo de otras personas, lo que despertó su interés por crear soluciones tecnológicas que aporten valor a los usuarios.",
    "Tiene interés por la tecnología, el hardware y el 3D, el cual disfruta con herramientas como Blender y Houdini."
  ],
  linkedin: "https://www.linkedin.com/in/noe-mmang-obono",
  github: "https://github.com/noemmang?tab=repositories",
  cv: "/documentos/cv_noe_mmang_2026.pdf",
};

// ─── SOFT SKILLS ─────────────────────────────────────────────────────────────
export const softSkills = [
  { label: "Comunicación efectiva", value: 80 },
  { label: "Desarrollo continuo", value: 85 },
  { label: "Resiliencia", value: 80 },
  { label: "Trabajo en equipo", value: 80 },
  { label: "Proactividad", value: 85 },
  { label: "Resolución de problemas", value: 80 },
  { label: "Pensamiento analítico", value: 95 },
];

// ─── SERVICES ────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: "fa-solid fa-computer",
    title: "Desarrollo Web",
    desc: "Transformo ideas en soluciones web sólidas, desde la arquitectura, la lógica de negocio hasta interfaces modernas, rápidas y fáciles de usar.",
  },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const education = [
  {
    period: "2024 – 2026",
    company: "Prometeo By ThePower FP",
    title: "Desarrollo de Aplicaciones Web",
    description: [
      "Formación en desarrollo web Full Stack, aprendiendo a construir aplicaciones funcionales y responsivas desde la interfaz hasta el servidor.",
      "Creación y consumo de APIs REST, implementación de CRUDs completos y gestión de bases de datos relacionales.",
      "Tecnologías trabajadas: HTML, CSS, JavaScript, TypeScript, PHP, Java y frameworks como React y Angular.",
    ],
    type: "education",
  },
];

export const experience = [
  {
    period: "Febrero 2026 – Mayo 2026",
    company: "Mercanza",
    title: "Desarrollador Web",
    description: [
      "Participación en el desarrollo de un ERP comercial, donde se implementaron funcionalidades tanto frontend como backend, además de migraciones de base de datos.",
      "Encargado de la creación de secciones completas, abarcando la gestión de la base de datos, la lógica de negocio (modelos, servicios y controladores) y el desarrollo de una interfaz de usuario fluida y funcional.",
      "tecnologías usadas: C#, React, SQL, MySQL, PostgreSQL, Visual Studio y control de versiones con Git."
    ],
    type: "experience",
  },
];

export const certificates = [
  // { title: "Certificado de muestra", id: "xxxxxxx", date: "2026", img: null },
  // { title: "Certificado de muestra", id: "xxxxxxx", date: "2026", img: null },
  // { title: "Certificado de muestra", id: "xxxxxxx", date: "2026", img: null },
];

// ─── SKILL TREE ───────────────────────────────────────────────────────────────
export const skillNodes = [
  // ROOT
  { id: "root", label: "Dev", icon: "fa-solid fa-user", category: "root", parent: null, done: true },

  // FRONTEND
  { id: "html", label: "HTML5", icon: "fa-brands fa-html5", category: "frontend", parent: "root", done: true },
  { id: "css", label: "CSS3", icon: "fa-brands fa-css3-alt", category: "frontend", parent: "html", done: true },
  { id: "javascript", label: "JavaScript", icon: "fa-brands fa-js", category: "frontend", parent: "css", done: true },
  { id: "angular", label: "Angular", icon: "fa-brands fa-angular", category: "frontend", parent: "typescript", done: true },
  { id: "react", label: "React", icon: "fa-brands fa-react", category: "frontend", parent: "javascript", done: true },
  { id: "typescript", label: "TypeScript", icon: "fa-solid fa-t", category: "frontend", parent: "javascript", done: true },
  { id: "nextjs", label: "Next.js", icon: "fa-solid fa-n", category: "frontend", parent: "javascript", done: false },
  { id: "nodejs", label: "Node.js", icon: "fa-brands fa-node-js", category: "frontend", parent: "javascript", done: true },
  { id: "express", label: "Express", icon: "fa-solid fa-e",        category: "frontend", parent: "nodejs",     done: false },

  // BACKEND
  { id: "java", label: "Java", icon: "fa-brands fa-java", category: "backend", parent: "root", done: true },
  { id: "php", label: "PHP", icon: "fa-brands fa-php", category: "backend", parent: "root", done: true },
  { id: "python", label: "Python", icon: "fa-brands fa-python", category: "backend", parent: "root", done: true },
  { id: "laravel", label: "Laravel", icon: "fa-solid fa-l", category: "backend", parent: "php", done: true },
  { id: "springboot", label: "Spring Boot", icon: "fa-solid fa-leaf", category: "backend", parent: "java", done: false },
  { id: "django", label: "Django", icon: "fa-solid fa-d", category: "backend", parent: "python", done: true },

  // TOOLS
  { id: "git", label: "Git", icon: "fa-brands fa-git-alt", category: "tools", parent: "root", done: true },
  { id: "github", label: "GitHub", icon: "fa-brands fa-github", category: "tools", parent: "git", done: true },
  { id: "docker", label: "Docker", icon: "fa-brands fa-docker", category: "tools", parent: "git", done: false },
  { id: "aws", label: "AWS", icon: "fa-brands fa-aws", category: "tools", parent: "docker", done: false },
  { id: "mysql", label: "MySQL", icon: "fa-solid fa-database", category: "tools", parent: "root", done: true },
  { id: "postgresql", label: "PostgreSQL", icon: "fa-solid fa-database", category: "tools", parent: "mysql", done: true },
  { id: "mongodb", label: "MongoDB", icon: "fa-solid fa-leaf", category: "tools", parent: "postgresql", done: false },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Portfolio Web",
    description:
      "Portafolio personal 2026 rediseñado en React. SPA totalmente responsive con navegación suave, árbol de habilidades interactivo con D3.js, animaciones con Framer Motion y formulario de contacto integrado con EmailJS.",
    images: [
              "/img/portafolio-2026/portafolio2026_1.png",
              "/img/portafolio-2026/portafolio2026_2.png",
            ],
    tags: ["React", "Vite", "D3.js", "Framer Motion", "EmailJS", "CSS3"],
    tagIcons: [
      "fa-brands fa-react",
      "fa-solid fa-bolt",
      "fa-solid fa-circle-nodes",
      "fa-solid fa-wand-magic-sparkles",
      "fa-solid fa-envelope",
      "fa-brands fa-css3-alt",
    ],
    github: "https://github.com/noemmang/portafolio_2026.git",
    live: "https://portafolio-2026-flax-eta.vercel.app",
    details: {
      frontend: "SPA construida en React 18 con Vite como bundler. Arquitectura basada en componentes funcionales y hooks (useState, useEffect, useRef). Animaciones de entrada y transiciones con Framer Motion usando useInView para activarlas al hacer scroll. Navegación entre secciones con scroll suave y detección de sección activa. CSS modular por componente con variables globales, totalmente responsive con CSS Grid y Flexbox.",
      visualizacion: "Árbol de habilidades construido con D3.js usando d3.stratify() y d3.tree() en layout radial. Soporta zoom y pan nativo de D3, tooltips personalizados y animación de pulso CSS en nodos activos. Los nodos y conexiones se colorean por categoría (frontend, backend, tools) y estado (aprendido / pendiente).",
      contacto: "Formulario de contacto integrado con EmailJS (@emailjs/browser). Validación nativa HTML5, feedback visual de estado (enviando / éxito / error) con animaciones Framer Motion y reset automático tras envío exitoso.",
      despliegue: "Proyecto configurado con Vite para build de producción optimizado. Preparado para despliegue en Netlify o Vercel desde la carpeta dist/.",
    },
  },
  {
    id: 2,
    title: "MasterBuild",
    description: "Comparador de precios de componentes PC en España. Buscador, configurador con compatibilidad, historial de precios 3 años, comparador de specs, visor 3D y alertas de precio.",
    images: [
              "/img/MasterBuild/MasterBuild_1.png",
              "/img/MasterBuild/MasterBuild_2.png",
              "/img/MasterBuild/MasterBuild_3.png",
              "/img/MasterBuild/MasterBuild_4.png",
              "/img/MasterBuild/MasterBuild_5.png",
            ],
    tags: ["Angular", "Laravel", "TypeScript", "PostgreSQL", "PHP", "Three.js", "ApexCharts"],
    tagIcons: [
      "fa-brands fa-angular",
      "fa-solid fa-l",
      "fa-solid fa-t",
      "fa-solid fa-database",
      "fa-brands fa-php",
      "fa-solid fa-cube",
      "fa-solid fa-chart-line",
    ],
    github: "https://github.com/noemmang/masterBuuild.git",
    live: "https://master-buuild.vercel.app/home",
    details: {
      frontend: "SPA en Angular 17 con arquitectura standalone components. Cada sección (buscador, configurador, comparador, guardados, perfil) está organizada en módulos con sus propios componentes, servicios y modelos TypeScript. Servicios con HttpClient e inyección de dependencias para consumir la API REST. Modo claro/oscuro con variables CSS y persistencia en localStorage.",
      backend: "API REST construida en Laravel (PHP). Estructura MVC completa: controladores por recurso (ComponenteController, ConfiguracionController, AlertaController…), modelos Eloquent con relaciones, migraciones para el esquema de base de datos y seeders para poblar datos iniciales de componentes y tiendas. Autenticación con Laravel Sanctum.",
      baseDeDatos: "PostgreSQL alojado en Neon (serverless). Esquema relacional con tablas de componentes, tiendas, precios históricos, usuarios, configuraciones guardadas y alertas de precio. El historial de precios almacena registros mensuales por tienda, permitiendo consultas de hasta 3 años atrás filtradas por período y tienda.",
      funcionalidades: "Buscador filtrado por tipo de componente con barra lateral de tiendas, precios, cupones y regalos. Configurador con filtrado por compatibilidad y dimensiones. Historial de precios con gráficas ApexCharts (línea media + rango min-máx, anotaciones de mínimo y máximo histórico). Visor 3D de dimensiones de PC con Three.js. Comparador de especificaciones técnicas. Alertas de bajada de precio y guardado de componentes y configuraciones completas.",
      despliegue: "Frontend desplegado en Vercel, backend Laravel en Railway. Base de datos PostgreSQL en Neon.",
    },
  },
];

// ─── EMAILJS ──────────────────────────────────────────────────────────────────
export const emailConfig = {
  publicKey: "Kgynd6YTZGXQWxVCN",
  serviceId: "service_ky9fhfk",
  templateId: "template_48kbsxv",
};
