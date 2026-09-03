// ─── PERSONAL INFO ───────────────────────────────────────────────────────────
// Todo el contenido con textos "es" / "en" está traducido y revisado a mano
// (no se usa traducción automática) para evitar errores de traducción.
export const personal = {
  name: "Noe Mmang",
  role: { es: "Desarrollador", en: "Developer" },
  location: { es: "Madrid, España", en: "Madrid, Spain" },
  email: "nnguemamifumu@gmail.com",
  age: 21,
  bioSimple: {
    es: ["Desarrollador Full Stack de Madrid, España."],
    en: ["Full Stack Developer from Madrid, Spain."],
  },
  bio: {
    es: [
      "Desarrollador de aplicaciones web con formación Full Stack. Se interesa por participar en todas las etapas del desarrollo de software, desde la interfaz de usuario hasta la lógica del servidor y la gestión de bases de datos.",
      "Inició este camino motivado por la experiencia y el trabajo de otras personas, lo que despertó su interés por crear soluciones tecnológicas que aporten valor a los usuarios.",
      "Tiene interés por el cloud computing, el hardware y el 3D, el cual disfruta con herramientas como Blender y Houdini.",
    ],
    en: [
      "Web application developer with Full Stack training. Interested in taking part in every stage of software development, from the user interface to server-side logic and database management.",
      "He started this path inspired by the experience and work of other people, which sparked his interest in creating technological solutions that bring real value to users.",
      "He's interested in cloud computing, hardware and 3D, which he enjoys exploring with tools like Blender and Houdini.",
    ],
  },
  linkedin: "https://www.linkedin.com/in/noe-mmang-obono",
  github: "https://github.com/noemmang",
  cv: {
    es: "/documentos/cv noe 2026 ES.pdf",
    en: "/documentos/cv noe 2026 EN.pdf",
  },
};

// ─── HARD SKILLS ─────────────────────────────────────────────────────────────
export const hardSkills = [
  { label: { es: "Backend", en: "Backend" }, value: 85 },
  { label: { es: "Frontend", en: "Frontend" }, value: 70 },
  { label: { es: "Bases de datos", en: "Databases" }, value: 90 },
  { label: { es: "CI/CD", en: "CI/CD" }, value: 70 },
  { label: { es: "Cloud/DevOps", en: "Cloud/DevOps" }, value: 70 },
  { label: { es: "Control de versiones", en: "Version control" }, value: 80 },
  { label: { es: "Testing", en: "Testing" }, value: 45 },
];

// ─── SERVICES ────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: "fa-solid fa-computer",
    title: { es: "Desarrollo Web", en: "Web Development" },
    desc: {
      es: "Transformo ideas en soluciones web sólidas, desde la arquitectura, la lógica de negocio hasta interfaces modernas, rápidas y fáciles de usar.",
      en: "I turn ideas into solid web solutions, from architecture and business logic to modern, fast and user-friendly interfaces.",
    },
  },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const education = [
  {
    period: "2024 – 2026",
    company: "Prometeo By ThePower FP",
    title: { es: "Desarrollo de Aplicaciones Web", en: "Web Application Development" },
    description: {
      es: [
        "Formación en desarrollo web Full Stack, aprendiendo a construir aplicaciones funcionales y responsivas desde la interfaz hasta el servidor.",
        "Creación y consumo de APIs REST, implementación de CRUDs completos y gestión de bases de datos relacionales.",
        "Tecnologías trabajadas: HTML, CSS, JavaScript, TypeScript, PHP, Java y frameworks como React y Angular.",
      ],
      en: [
        "Full Stack web development training, learning to build functional and responsive applications from the interface to the server.",
        "Creation and consumption of REST APIs, implementation of complete CRUDs and management of relational databases.",
        "Technologies used: HTML, CSS, JavaScript, TypeScript, PHP, Java and frameworks such as React and Angular.",
      ],
    },
    type: "education",
  },
];

export const experience = [
  {
    period: { es: "Febrero 2026 – Mayo 2026", en: "February 2026 – May 2026" },
    company: "Mercanza",
    title: { es: "Desarrollador Web", en: "Web Developer" },
    description: {
      es: [
        "Participación en el desarrollo de un ERP comercial multiempresarial desarrollado sobre ASP.NET Core.",
        "Desarrollo de funcionalidades frontend fluidas y de servicios backend en C#, incluyendo la implementación de lógica de negocio y acceso a datos.",
        "Frontend: React, librería DevExtreme. Backend: C#. Herramientas: Visual Studio, Git, GitHub. Bases de datos: SQL Server.",
      ],
      en: [
        "Took part in the development of a multi-company commercial ERP built on ASP.NET Core.",
        "Development of smooth frontend features and backend services in C#, including business logic implementation and data access.",
        "Frontend: React, DevExtreme library. Backend: C#. Tools: Visual Studio, Git, GitHub. Databases: SQL Server.",
      ],
    },
    type: "experience",
  },
];

export const certificates = [
  { title: { es: "AZ-900: Fundamentos de Microsoft Azure", en: "AZ-900: Microsoft Azure Fundamentals" }, id: "sTeQ-XMSn", date: "27/08/2026", img: "/img/certificados/Azure%20Fundamentals.pdf", logo: "/img/certificados/Microsoft%20Certified%20Fundamentals.png" },
];

// ─── SKILL TREE ───────────────────────────────────────────────────────────────
// Los nombres de tecnologías son nombres propios y no se traducen.
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
  { id: "express", label: "Express", icon: "fa-solid fa-e",        category: "frontend", parent: "nodejs", done: true },

  // BACKEND
  { id: "java", label: "Java", icon: "fa-brands fa-java", category: "backend", parent: "root", done: true },
  { id: "php", label: "PHP", icon: "fa-brands fa-php", category: "backend", parent: "root", done: true },
  { id: "python", label: "Python", icon: "fa-brands fa-python", category: "backend", parent: "root", done: true },
  { id: "laravel", label: "Laravel", icon: "fa-solid fa-l", category: "backend", parent: "php", done: true },
  { id: "springboot", label: "Spring Boot", icon: "fa-solid fa-leaf", category: "backend", parent: "java", done: false },
  { id: "fastapi", label: "FastAPI", icon: "fa-solid fa-f", category: "backend", parent: "python", done: false },
  { id: "csharp", label: "C#", icon: "devicon-csharp-plain", category: "backend", parent: "root", done: true },
  { id: "puntonet", label: ".NET Framework", icon: "devicon-dot-net-plain", category: "backend", parent: "csharp", done: false },

  // TOOLS
  { id: "git", label: "Git", icon: "fa-brands fa-git-alt", category: "tools", parent: "root", done: true },
  { id: "github", label: "GitHub", icon: "fa-brands fa-github", category: "tools", parent: "git", done: true },
  { id: "docker", label: "Docker", icon: "fa-brands fa-docker", category: "tools", parent: "git", done: true },
  { id: "kubernetes", label: "Kubernetes", icon: "devicon-kubernetes-plain", category: "tools", parent: "docker", done: false },
  { id: "aws", label: "AWS", icon: "fa-brands fa-aws", category: "tools", parent: "docker", done: false },
  { id: "azure", label: "Azure", icon: "fa-brands fa-microsoft", category: "tools", parent: "docker", done: true },

  { id: "sql", label: "SQL", icon: "fa-solid fa-database", category: "tools", parent: "root", done: true },
  { id: "mysql", label: "MySQL", icon: "devicon-mysql-plain", category: "tools", parent: "sql", done: true },
  { id: "postgresql", label: "PostgreSQL", icon: "devicon-postgresql-plain", category: "tools", parent: "sql", done: true },
  { id: "sqlserver", label: "SQL Server", icon: "devicon-microsoftsqlserver-plain", category: "tools", parent: "sql", done: true },
  { id: "mongodb", label: "MongoDB", icon: "devicon-mongodb-plain", category: "tools", parent: "sql", done: false },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
// `details` usa claves semánticas fijas (frontend, backend, database, features,
// deployment, contact, visualization); las etiquetas visibles se traducen en
// src/i18n/translations.js → projects.detailLabels
export const projects = [
  {
    id: 1,
    title: "Portfolio Web",
    description: {
      es: "Portafolio personal 2026 rediseñado en React. SPA totalmente responsive con navegación suave, árbol de habilidades interactivo con D3.js, animaciones con Framer Motion y formulario de contacto integrado con EmailJS.",
      en: "2026 personal portfolio redesigned in React. Fully responsive SPA with smooth navigation, an interactive skill tree built with D3.js, Framer Motion animations and a contact form integrated with EmailJS.",
    },
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
    live: "https://www.noemmang.com",
    details: {
      es: {
        frontend: "SPA construida en React 18 con Vite como bundler. Arquitectura basada en componentes funcionales y hooks (useState, useEffect, useRef). Animaciones de entrada y transiciones con Framer Motion usando useInView para activarlas al hacer scroll. Navegación entre secciones con scroll suave y detección de sección activa. CSS modular por componente con variables globales, totalmente responsive con CSS Grid y Flexbox.",
        visualization: "Árbol de habilidades construido con D3.js usando d3.stratify() y d3.tree() en layout radial. Soporta zoom y pan nativo de D3, tooltips personalizados y animación de pulso CSS en nodos activos. Los nodos y conexiones se colorean por categoría (frontend, backend, tools) y estado (aprendido / pendiente).",
        contact: "Formulario de contacto integrado con EmailJS (@emailjs/browser). Validación nativa HTML5, feedback visual de estado (enviando / éxito / error) con animaciones Framer Motion y reset automático tras envío exitoso.",
        deployment: "Proyecto configurado con Vite para build de producción optimizado. Preparado para despliegue en Netlify o Vercel desde la carpeta dist/.",
      },
      en: {
        frontend: "SPA built with React 18 using Vite as the bundler. Component-based architecture with functional components and hooks (useState, useEffect, useRef). Entry animations and transitions with Framer Motion, using useInView to trigger them on scroll. Smooth-scroll navigation between sections with active-section detection. Modular CSS per component with global variables, fully responsive with CSS Grid and Flexbox.",
        visualization: "Skill tree built with D3.js using d3.stratify() and d3.tree() in a radial layout. Supports D3's native zoom and pan, custom tooltips and a CSS pulse animation on active nodes. Nodes and connections are colored by category (frontend, backend, tools) and status (learned / pending).",
        contact: "Contact form integrated with EmailJS (@emailjs/browser). Native HTML5 validation, visual status feedback (sending / success / error) with Framer Motion animations, and automatic reset after a successful submission.",
        deployment: "Project configured with Vite for an optimized production build. Ready for deployment on Netlify or Vercel from the dist/ folder.",
      },
    },
  },
  {
    id: 2,
    title: "MasterBuild",
    description: {
      es: "Comparador de precios de componentes de PC en España, con doble enfoque full stack (Angular + Laravel) y cloud/DevOps: scraping real, alertas por email y en la web, configurador con compatibilidad y visor 3D. Desplegado en Azure con dominio propio en Cloudflare.",
      en: "PC component price comparison tool for Spain, blending full stack (Angular + Laravel) and cloud/DevOps: real scraping, email and in-app alerts, a compatibility-aware configurator and a 3D viewer. Deployed on Azure with a custom domain on Cloudflare.",
    },
    images: [
      "/img/MasterBuild/MasterBuild_1.png",
      "/img/MasterBuild/MasterBuild_2.png",
      "/img/MasterBuild/MasterBuild_3.png",
      "/img/MasterBuild/MasterBuild_4.png",
      "/img/MasterBuild/MasterBuild_5.png",
    ],
    tags: ["Angular", "Laravel", "TypeScript", "PostgreSQL", "Azure", "Docker", "Cloudflare", "Three.js", "ApexCharts"],
    tagIcons: [
      "fa-brands fa-angular",
      "fa-solid fa-l",
      "fa-solid fa-t",
      "fa-solid fa-database",
      "fa-brands fa-microsoft",
      "fa-brands fa-docker",
      "fa-brands fa-cloudflare",
      "fa-solid fa-cube",
      "fa-solid fa-chart-line",
    ],
    github: "https://github.com/noemmang/masterBuuild.git",
    live: "https://masterbuild.noemmang.com",
    details: {
      es: {
        frontend: "SPA en Angular 21 con arquitectura standalone components y Signals para el estado reactivo (por ejemplo, el contador de notificaciones no leídas). Organización por features (buscador, configurador, comparador de specs, visor de gabinetes, guardados, perfil, auth), cada una con sus propios componentes, servicios y modelos TypeScript. Servicios con HttpClient e interceptores para consumir la API REST. Modo claro/oscuro con variables CSS y persistencia en localStorage.",
        backend: "API REST en Laravel 13 (PHP 8.4) sobre FrankenPHP, empaquetada en Docker. Estructura MVC completa: controladores por recurso, modelos Eloquent con relaciones, migraciones y seeders. Autenticación con Laravel Sanctum. Los scrapers de cada tienda (Coolmod, Neobyte…) implementan una interfaz común y extraen los datos JSON-LD (schema.org/Product) directamente de la ficha de producto real.",
        database: "PostgreSQL alojado en Neon (serverless). Esquema relacional con componentes, tiendas, precios actuales e históricos, usuarios, configuraciones guardadas y alertas de precio. El historial permite consultar hasta 3 años de precios por componente y tienda.",
        cloud: "Infraestructura 100% en Azure: frontend en Static Web Apps, backend y scraping en Container Apps. Un Container Apps Job programado (cron diario) ejecuta el scraping real y, justo después, revisa las alertas de precio pendientes. CI/CD con GitHub Actions: un workflow construye y publica el frontend en cada push a main, y otro construye la imagen Docker del backend, la sube a Azure Container Registry y actualiza tanto la Container App como el Job con el nuevo tag. Dominio propio (masterbuild.noemmang.com) gestionado en Cloudflare.",
        features: "Buscador filtrado por tipo de componente con precios reales de varias tiendas (scraping real, ya no datos ficticios). Configurador con filtrado por compatibilidad y dimensiones. Historial de precios con gráficas ApexCharts (línea media + rango min-máx, anotaciones de mínimo y máximo histórico). Visor 3D de dimensiones de PC con Three.js. Comparador de especificaciones técnicas. Alertas de bajada de precio con aviso por email y en la web (panel de notificaciones con contador en tiempo real). Guardado de componentes y configuraciones completas.",
      },
      en: {
        frontend: "SPA in Angular 21 with a standalone components architecture and Signals for reactive state (e.g. the unread-notifications counter). Organized by feature (search, configurator, spec comparator, case viewer, saved items, profile, auth), each with its own components, services and TypeScript models. Services use HttpClient and interceptors to consume the REST API. Light/dark mode with CSS variables and localStorage persistence.",
        backend: "REST API in Laravel 13 (PHP 8.4) on FrankenPHP, packaged in Docker. Full MVC structure: resource controllers, Eloquent models with relationships, migrations and seeders. Authentication with Laravel Sanctum. Each store's scraper (Coolmod, Neobyte…) implements a common interface and extracts JSON-LD (schema.org/Product) data straight from the real product page.",
        database: "PostgreSQL hosted on Neon (serverless). Relational schema with components, stores, current and historical prices, users, saved configurations and price alerts. The history allows querying up to 3 years of prices per component and store.",
        cloud: "Infrastructure fully on Azure: frontend on Static Web Apps, backend and scraping on Container Apps. A scheduled Container Apps Job (daily cron) runs the real scraping and, right after, checks pending price alerts. CI/CD with GitHub Actions: one workflow builds and publishes the frontend on every push to main, and another builds the backend's Docker image, pushes it to Azure Container Registry and updates both the Container App and the Job with the new tag. Custom domain (masterbuild.noemmang.com) managed on Cloudflare.",
        features: "Search engine filtered by component type with real prices from several stores (real scraping, no more mock data). Configurator with compatibility and dimension filtering. Price history with ApexCharts graphs (average line + min-max range, historical min/max annotations). 3D PC-dimension viewer built with Three.js. Technical spec comparator. Price-drop alerts sent by email and in-app (a notification panel with a live counter). Saving of components and full configurations.",
      },
    },
  },
];

// ─── EMAILJS ──────────────────────────────────────────────────────────────────
export const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};