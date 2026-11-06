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
  { title: { es: "AZ-900: Fundamentos de Microsoft Azure", en: "AZ-900: Microsoft Azure Fundamentals" }, id: "sTeQ-XMSn", date: "27/08/2026", img: "/img/certificados/Azure_Fundamentals.pdf", logo: "/img/certificados/Microsoft%20Certified%20Fundamentals.png" },
  { title: { es: "DP-900: Fundamentos de Microsoft Azure Data", en: "DP-900: Microsoft Azure Data Fundamentals" }, id: "nsh7-DwWh", date: "28/09/2026", img: "/img/certificados/Azure_Data_Fundamentals.pdf", logo: "/img/certificados/microsoft-certified-azure-data-fundamentals.png" },
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
  { id: "threejs", label: "Three.js", icon: "devicon-threejs-original", category: "frontend", parent: "javascript", done: true },
  { id: "nextjs", label: "Next.js", icon: "fa-solid fa-n", category: "frontend", parent: "javascript", done: false },
  { id: "nodejs", label: "Node.js", icon: "fa-brands fa-node-js", category: "frontend", parent: "javascript", done: true },
  { id: "express", label: "Express", icon: "devicon-express-original", category: "frontend", parent: "nodejs", done: true },

  // BACKEND
  { id: "java", label: "Java", icon: "fa-brands fa-java", category: "backend", parent: "root", done: true },
  { id: "php", label: "PHP", icon: "fa-brands fa-php", category: "backend", parent: "root", done: true },
  { id: "python", label: "Python", icon: "fa-brands fa-python", category: "backend", parent: "root", done: true },
  { id: "laravel", label: "Laravel", icon: "devicon-laravel-original", category: "backend", parent: "php", done: true },  { id: "springboot", label: "Spring Boot", icon: "fa-solid fa-leaf", category: "backend", parent: "java", done: false },
  { id: "fastapi", label: "FastAPI", icon: "devicon-fastapi-plain", category: "backend", parent: "python", done: false },
  { id: "csharp", label: "C#", icon: "devicon-csharp-plain", category: "backend", parent: "root", done: true },
  { id: "puntonet", label: ".NET", icon: "devicon-dot-net-plain", category: "backend", parent: "csharp", done: true },

  // TOOLS
  { id: "git", label: "Git", icon: "fa-brands fa-git-alt", category: "tools", parent: "root", done: true },
  { id: "github", label: "GitHub", icon: "fa-brands fa-github", category: "tools", parent: "git", done: true },
  { id: "docker", label: "Docker", icon: "fa-brands fa-docker", category: "tools", parent: "git", done: true },
  { id: "githubactions", label: "GitHub Actions", icon: "devicon-githubactions-plain", category: "tools", parent: "github", done: true },
  { id: "kubernetes", label: "Kubernetes", icon: "devicon-kubernetes-plain", category: "tools", parent: "docker", done: false },

  // CLOUD (rama propia colgando de root)
  { id: "cloud", label: "Cloud", icon: "fa-solid fa-cloud", category: "tools", parent: "root", done: true },
  { id: "aws", label: "AWS", icon: "fa-brands fa-aws", category: "tools", parent: "cloud", done: false },
  { id: "azure", label: "Azure", icon: "fa-brands fa-microsoft", category: "tools", parent: "cloud", done: true },

  { id: "sql", label: "SQL", icon: "fa-solid fa-database", category: "tools", parent: "root", done: true },
  { id: "mysql", label: "MySQL", icon: "devicon-mysql-plain", category: "tools", parent: "sql", done: true },
  { id: "postgresql", label: "PostgreSQL", icon: "devicon-postgresql-plain", category: "tools", parent: "sql", done: true },
  { id: "sqlserver", label: "SQL Server", icon: "devicon-microsoftsqlserver-plain", category: "tools", parent: "sql", done: true },
  { id: "mongodb", label: "MongoDB", icon: "devicon-mongodb-plain", category: "tools", parent: "sql", done: false },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
// `description`: texto breve de la tarjeta (qué es la app, sin tecnologías ni funcionalidades).
// `readme`: contenido del botón de información, con estructura de README. Cada sección admite
// `paragraphs`, `bullets`, `code` (bloque de código) y `table` ({ head, rows }). Los textos
// admiten **negrita** y `código` en línea. Los títulos de sección se traducen a mano en es/en.
export const projects = [
  {
    id: 1,
    title: "InmoDomain",
    description: {
      es: "Plataforma para explorar y comparar el mercado inmobiliario español por provincias, con datos oficiales y un índice propio.",
      en: "Platform to explore and compare the Spanish real estate market by province, with official data and its own index.",
    },
    images: ["/img/InmoDomain/InmoDomain_1.png"],
    tags: [".NET", "React", "TypeScript", "PostgreSQL", "YARP", "Service Bus", "Azure", "Docker", "GitHub Actions"],
    tagIcons: [
      "fa-solid fa-code",
      "fa-brands fa-react",
      "fa-solid fa-t",
      "fa-solid fa-database",
      "fa-solid fa-route",
      "fa-solid fa-envelope",
      "fa-brands fa-microsoft",
      "fa-brands fa-docker",
      "fa-brands fa-github",
    ],
    github: "https://github.com/noemmang/InmoDomain",
    live: "https://inmodomain.noemmang.com",
    readme: {
      es: [
        {
          title: "¿Qué es?",
          paragraphs: [
            "Plataforma para explorar, analizar y comparar el mercado inmobiliario en España con datos de fuentes oficiales: el **INE** (tabla 6150), el **MIVAU** y el **ISTAC**.",
            "A partir de un histórico trimestral de índices por provincia calcula un **Property Score** propio, y permite guardar favoritos y crear alertas personalizadas.",
          ],
        },
        {
          title: "Objetivo",
          paragraphs: ["Proyecto pensado para aprender construyendo. Esto es lo que buscaba aprender:"],
          bullets: [
            "**Microservicios**: dividir un sistema en servicios independientes, cada uno con su responsabilidad y su base de datos, detrás de un API Gateway.",
            "**Ecosistema .NET**: ASP.NET Core, Entity Framework Core y una arquitectura en capas.",
            "**Asincronía y eventos**: comunicar los servicios con colas de mensajes en lugar de llamadas directas.",
            "**APIs externas**: integrar datos oficiales del INE, el MIVAU y el ISTAC, en JSON y en Excel.",
            "**Despliegue automatizado en Azure**: infraestructura y configuración definidas con scripts y plantillas, sin configurar nada a mano, y CI/CD con GitHub Actions.",
          ],
        },
        {
          title: "Qué se puede hacer",
          bullets: [
            "**Explorar** el precio medio por m² y el volumen de compraventas de cada provincia, con una línea temporal para ver cómo cambian los datos.",
            "**Comparar** provincias lado a lado, también en el histórico.",
            "Consultar el **Property Score**, alternando entre percentil histórico y ranking nacional, con tendencia trimestral o interanual.",
            "Guardar **favoritos** y crear **alertas** sobre el score, los índices o el precio por m². Se disparan una vez por periodo de dato.",
            "Recibir **notificaciones** en la web, con contador de no leídas.",
            "Registro, inicio de sesión, recuperación de contraseña y perfil con foto.",
          ],
        },
        {
          title: "Arquitectura",
          paragraphs: [
            "Microservicios con un **API Gateway** como único punto de entrada. Cada servicio tiene su responsabilidad y su propia base de datos lógica, sin tablas compartidas.",
          ],
          code: "Cliente (React)\n      │\n      ▼\nGateway (YARP)\n      │\n ┌────┼─────────┬───────────┬─────────┐\n ▼    ▼         ▼           ▼         ▼\nIdentity Property MarketData Analytics Alerts\n                                │         │\n                                └────┬────┘\n                                     ▼\n                               Notifications",
          bullets: [
            "**Gateway**: valida el JWT, aplica rate limiting por IP y CORS, y no expone los servicios internos.",
            "**Identity**: JWT firmados con RS256, refresh tokens con rotación y recuperación de contraseña por email.",
            "**Property**: provincias y favoritos.",
            "**MarketData**: importa los datos oficiales con un job idempotente.",
            "**Analytics**: calcula los índices, las tendencias y el Property Score.",
            "**Alerts** y **Notifications**: reglas de los usuarios y avisos asociados.",
          ],
        },
        {
          title: "Flujo de eventos",
          paragraphs: ["La importación de datos dispara una cadena de eventos asíncronos con **Azure Service Bus**:"],
          bullets: [
            "MarketData importa los datos del INE y el MIVAU.",
            "Analytics recalcula los índices y el Property Score.",
            "Alerts evalúa las reglas de los usuarios.",
            "Notifications crea los avisos.",
          ],
        },
        {
          title: "Stack",
          bullets: [
            "**Frontend**: React 19, TypeScript, Vite y Recharts. Sin librería de estado: contextos de React y un cliente fetch propio con renovación de sesión compartida.",
            "**Backend**: .NET 10 y ASP.NET Core, con patrón Controller → Service → Repository.",
            "**Datos**: PostgreSQL en Neon con Entity Framework Core.",
            "**Cloud**: Azure Container Apps, Service Bus y Static Web Apps, con dominio propio en Cloudflare.",
          ],
        },
        {
          title: "Despliegue y CI/CD",
          bullets: [
            "Cada servicio en su propia imagen **Docker**, publicada en GitHub Container Registry.",
            "Despliegue en **Azure Container Apps** con escala a cero y un job diario para la importación.",
            "**GitHub Actions**: build, publicación de imágenes y despliegue autenticado con OIDC, sin secretos de larga duración.",
            "Entorno local completo con Docker Compose y el emulador de Service Bus.",
          ],
        },
      ],
      en: [
        {
          title: "What is it?",
          paragraphs: [
            "A platform to explore, analyze and compare the Spanish real estate market using official sources: the **INE** (table 6150), the **MIVAU** and the **ISTAC**.",
            "From a quarterly history of indexes per province it computes its own **Property Score**, and lets users save favorites and create custom alerts.",
          ],
        },
        {
          title: "Goal",
          paragraphs: ["A project designed to learn by building. This is what I wanted to learn:"],
          bullets: [
            "**Microservices**: splitting a system into independent services, each with its own responsibility and database, behind an API Gateway.",
            "**.NET ecosystem**: ASP.NET Core, Entity Framework Core and a layered architecture.",
            "**Asynchronous communication and events**: connecting services through message queues instead of direct calls.",
            "**External APIs**: integrating official INE, MIVAU and ISTAC data, in JSON and Excel.",
            "**Automated deployment on Azure**: infrastructure and configuration defined with scripts and templates, nothing set up by hand, and CI/CD with GitHub Actions.",
          ],
        },
        {
          title: "What you can do",
          bullets: [
            "**Explore** the average price per m² and the sales volume of each province, with a timeline to see how the data changes.",
            "**Compare** provinces side by side, historical data included.",
            "Check the **Property Score**, switchable between historical percentile and national ranking, with quarterly or year-over-year trend.",
            "Save **favorites** and create **alerts** on the score, the indexes or the price per m². They fire once per data period.",
            "Get in-app **notifications** with an unread counter.",
            "Sign-up, sign-in, password recovery and a profile with a photo.",
          ],
        },
        {
          title: "Architecture",
          paragraphs: [
            "Microservices with an **API Gateway** as the single entry point. Each service has its own responsibility and its own logical database, with no shared tables.",
          ],
          code: "Client (React)\n      │\n      ▼\nGateway (YARP)\n      │\n ┌────┼─────────┬───────────┬─────────┐\n ▼    ▼         ▼           ▼         ▼\nIdentity Property MarketData Analytics Alerts\n                                │         │\n                                └────┬────┘\n                                     ▼\n                               Notifications",
          bullets: [
            "**Gateway**: validates the JWT, applies per-IP rate limiting and CORS, and does not expose internal services.",
            "**Identity**: JWTs signed with RS256, rotating refresh tokens and email-based password recovery.",
            "**Property**: provinces and favorites.",
            "**MarketData**: imports the official data with an idempotent job.",
            "**Analytics**: computes the indexes, the trends and the Property Score.",
            "**Alerts** and **Notifications**: user rules and the notices they produce.",
          ],
        },
        {
          title: "Event flow",
          paragraphs: ["The data import triggers a chain of asynchronous events through **Azure Service Bus**:"],
          bullets: [
            "MarketData imports the INE and MIVAU data.",
            "Analytics recalculates the indexes and the Property Score.",
            "Alerts evaluates the users' rules.",
            "Notifications creates the notices.",
          ],
        },
        {
          title: "Stack",
          bullets: [
            "**Frontend**: React 19, TypeScript, Vite and Recharts. No state library: React contexts and a custom fetch client with a shared session refresh.",
            "**Backend**: .NET 10 and ASP.NET Core, with a Controller → Service → Repository pattern.",
            "**Data**: PostgreSQL on Neon with Entity Framework Core.",
            "**Cloud**: Azure Container Apps, Service Bus and Static Web Apps, with a custom domain on Cloudflare.",
          ],
        },
        {
          title: "Deployment and CI/CD",
          bullets: [
            "Each service in its own **Docker** image, published to GitHub Container Registry.",
            "Deployed on **Azure Container Apps** with scale-to-zero and a daily job for the import.",
            "**GitHub Actions**: build, image publishing and deployment authenticated through OIDC, with no long-lived secrets.",
            "Full local environment with Docker Compose and the Service Bus emulator.",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: "MasterBuild",
    description: {
      es: "Compara precios de componentes de PC en las tiendas españolas y monta tu equipo sabiendo que todo es compatible.",
      en: "Compare PC component prices across Spanish stores and build your rig knowing every part is compatible.",
    },
    images: ["/img/MasterBuild/MasterBuild_1.png"],
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
    readme: {
      es: [
        {
          title: "¿Qué es?",
          paragraphs: [
            "Comparador de precios de componentes de PC, enfocado exclusivamente en hardware. Permite buscar componentes, comparar precios entre tiendas y acceder directamente a ellas para comprar.",
            "Desarrollado como **Trabajo de Fin de Grado** del ciclo de Desarrollo de Aplicaciones Web, con el objetivo de ayudar a montar un PC de forma informada.",
          ],
        },
        {
          title: "Objetivo",
          paragraphs: ["Mi proyecto más antiguo y el primero con cloud. Esto es lo que buscaba aprender:"],
          bullets: [
            "**Scraping**: obtener precios reales de las tiendas en lugar de usar datos de ejemplo.",
            "**Dos lenguajes en un mismo proyecto**: PHP en el backend y TypeScript en el frontend, comunicados por una API REST.",
            "**MVC**: llevar la arquitectura de Laravel (modelos, controladores y servicios) a un proyecto completo.",
            "**Azure**: publicar frontend, backend y tareas programadas en la nube.",
            "**Workflows con GitHub Actions**: automatizar la construcción y el despliegue en cada cambio.",
          ],
        },
        {
          title: "Qué se puede hacer",
          bullets: [
            "**Buscar** componentes por tipo con precios reales de varias tiendas.",
            "**Configurar** un PC con filtrado por compatibilidad y dimensiones.",
            "Ver el **historial de precios** con gráficas: media, rango mínimo-máximo y anotaciones del mínimo y máximo histórico.",
            "Recibir **recomendaciones** de configuración según el perfil de uso: gaming, edición de vídeo, renderizado u oficina.",
            "**Comparar** especificaciones técnicas entre componentes.",
            "Visualizar en **3D** las dimensiones de los gabinetes.",
            "Crear **alertas** de bajada de precio, con aviso por email y en la web.",
            "**Guardar** componentes y configuraciones completas.",
          ],
        },
        {
          title: "Precios reales",
          paragraphs: [
            "Los datos no son ficticios: un scraper por tienda (hoy Coolmod y Neobyte) lee los datos estructurados `JSON-LD` de la ficha de producto real. Todos los scrapers implementan una interfaz común.",
            "Un job programado ejecuta el scraping cada día y, justo después, revisa las alertas de precio pendientes. El historial guarda hasta 3 años de precios por componente y tienda.",
          ],
        },
        {
          title: "Stack",
          bullets: [
            "**Frontend**: Angular 21 con componentes standalone y Signals, organizado por features, con modo claro/oscuro.",
            "**Backend**: API REST en Laravel 13 (PHP 8.4) sobre FrankenPHP, con autenticación Sanctum.",
            "**Datos**: PostgreSQL en Neon.",
            "**Visualización**: ApexCharts para los precios y Three.js para el visor 3D.",
          ],
        },
        {
          title: "Despliegue y CI/CD",
          bullets: [
            "Infraestructura en **Azure**: frontend en Static Web Apps y backend en Container Apps.",
            "**GitHub Actions**: un workflow publica el frontend en cada push a `main` y otro construye la imagen Docker del backend y actualiza la app y el job.",
            "Dominio propio gestionado en **Cloudflare**.",
          ],
        },
      ],
      en: [
        {
          title: "What is it?",
          paragraphs: [
            "A PC component price comparison tool focused exclusively on hardware. Users can search for components, compare prices across stores and go straight to them to buy.",
            "Built as the **final degree project** of the Web Application Development program, with the goal of helping people build a PC in an informed way.",
          ],
        },
        {
          title: "Goal",
          paragraphs: ["My oldest project and my first one with cloud. This is what I wanted to learn:"],
          bullets: [
            "**Scraping**: getting real prices from stores instead of using sample data.",
            "**Two languages in one project**: PHP on the backend and TypeScript on the frontend, connected by a REST API.",
            "**MVC**: applying Laravel's architecture (models, controllers and services) to a complete project.",
            "**Azure**: publishing the frontend, the backend and scheduled tasks in the cloud.",
            "**GitHub Actions workflows**: automating the build and deployment on every change.",
          ],
        },
        {
          title: "What you can do",
          bullets: [
            "**Search** components by type with real prices from several stores.",
            "**Configure** a PC with compatibility and dimension filtering.",
            "See the **price history** in charts: average, min-max range and annotations for the historical minimum and maximum.",
            "Get **recommended builds** by usage profile: gaming, video editing, rendering or office.",
            "**Compare** technical specs between components.",
            "View case dimensions in **3D**.",
            "Create price-drop **alerts**, notified by email and in-app.",
            "**Save** components and full configurations.",
          ],
        },
        {
          title: "Real prices",
          paragraphs: [
            "The data is not mocked: one scraper per store (currently Coolmod and Neobyte) reads the structured `JSON-LD` data from the real product page. All scrapers implement a common interface.",
            "A scheduled job runs the scraping every day and, right after, checks pending price alerts. The history keeps up to 3 years of prices per component and store.",
          ],
        },
        {
          title: "Stack",
          bullets: [
            "**Frontend**: Angular 21 with standalone components and Signals, organized by feature, with light/dark mode.",
            "**Backend**: REST API in Laravel 13 (PHP 8.4) on FrankenPHP, with Sanctum authentication.",
            "**Data**: PostgreSQL on Neon.",
            "**Visualization**: ApexCharts for prices and Three.js for the 3D viewer.",
          ],
        },
        {
          title: "Deployment and CI/CD",
          bullets: [
            "Infrastructure on **Azure**: frontend on Static Web Apps and backend on Container Apps.",
            "**GitHub Actions**: one workflow publishes the frontend on every push to `main` and another builds the backend Docker image and updates the app and the job.",
            "Custom domain managed on **Cloudflare**.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "MisterHost",
    description: {
      es: "Aplicación para gestionar reservas de alojamiento: consulta, filtra, crea y cancela reservas de forma clara y rápida.",
      en: "Application to manage accommodation bookings: view, filter, create and cancel bookings quickly and clearly.",
    },
    images: ["/img/MisterHost/MisterHost_1.png"],
    tags: ["PHP", "Twig", "JavaScript", "MySQL", "PHPUnit", "CSS3"],
    tagIcons: [
      "fa-brands fa-php",
      "fa-solid fa-leaf",
      "fa-brands fa-js",
      "fa-solid fa-database",
      "fa-solid fa-vial",
      "fa-brands fa-css3-alt",
    ],
    github: "https://github.com/noemmang/MisterHost.git",
    live: "https://misterhost.noemmang.com",
    readme: {
      es: [
        {
          title: "¿Qué es?",
          paragraphs: [
            "Aplicación de gestión de reservas de alojamiento desarrollada en PHP nativo, sin framework, con una API REST y vistas renderizadas en servidor.",
          ],
        },
        {
          title: "Objetivo",
          paragraphs: ["Un proyecto pequeño para afianzar los fundamentos. Esto es lo que buscaba practicar:"],
          bullets: [
            "**CRUD**: crear, consultar y cancelar datos a través de una API REST.",
            "**PHP sin framework**: entender qué resuelve un framework construyendo a mano el router, las respuestas y la gestión de errores.",
            "**Tests**: probar la lógica de negocio y las consultas con PHPUnit.",
          ],
        },
        {
          title: "Qué se puede hacer",
          bullets: [
            "**Listar** reservas con filtros combinables por estado, rango de fechas, nombre del huésped y nombre del alojamiento.",
            "Ver el **detalle** de una reserva con su historial de eventos en forma de timeline.",
            "**Crear** reservas con validación en el navegador y en el servidor.",
            "**Cancelar** reservas desde el listado, de una en una o varias a la vez, con confirmación.",
            "**Confirmar o cancelar** con transiciones controladas: una reserva cancelada no cambia más.",
          ],
        },
        {
          title: "Arquitectura",
          paragraphs: [
            "Backend en capas, con las piezas del núcleo hechas a mano: router, request, respuestas JSON, gestor de errores y traductor.",
          ],
          bullets: [
            "**Controladores**: traducen HTTP a llamadas de servicio.",
            "**Servicio**: reglas de negocio, con los estados y transiciones permitidos.",
            "**Validador**: validación en servidor con listas de valores permitidos.",
            "**Repositorio**: el único lugar con SQL.",
          ],
        },
        {
          title: "Rutas de la API",
          table: {
            head: ["Método", "Ruta", "Descripción"],
            rows: [
              ["GET", "`/api/reservas`", "Listado con filtros combinables"],
              ["GET", "`/api/reservas/{id}`", "Detalle con su historial de eventos"],
              ["POST", "`/api/reservas`", "Crea una reserva en estado pendiente"],
              ["PATCH", "`/api/reservas/{id}/estado`", "Confirma o cancela una reserva"],
            ],
          },
          paragraphs: ["Las respuestas son JSON con códigos HTTP coherentes (200, 201, 400, 404, 405, 409, 422 y 500) y errores por campo."],
        },
        {
          title: "Seguridad y calidad",
          bullets: [
            "Consultas preparadas con **PDO** y validación en servidor.",
            "Plantillas **Twig** con autoescape y sin ningún `|raw`.",
            "Cabeceras `Content-Security-Policy`, `X-Content-Type-Options` y `X-Frame-Options`.",
            "**16 tests con PHPUnit** contra la base de datos real, dentro de una transacción que se deshace.",
          ],
        },
        {
          title: "Stack",
          bullets: [
            "**Frontend**: vistas con Twig 3 y JavaScript vanilla con módulos ES. Los filtros funcionan también sin JavaScript.",
            "**Backend**: PHP 8.2+ con autoload PSR-4 y Composer.",
            "**Datos**: MySQL/MariaDB con dos tablas, restricciones CHECK y una transacción para guardar la reserva y su evento. Incluye 50 reservas de ejemplo.",
          ],
        },
        {
          title: "Despliegue",
          bullets: [
            "Publicada en **InfinityFree**, un hosting gratuito con PHP y MySQL, con subdominio propio y certificado SSL.",
            "Un `.htaccess` expone solo `frontend/` y bloquea `backend/` y `database/`.",
            "Los datos de conexión viven en un `.env` en el servidor, fuera de Git.",
          ],
        },
      ],
      en: [
        {
          title: "What is it?",
          paragraphs: [
            "An accommodation booking management app written in plain PHP, no framework, with a REST API and server-rendered views.",
          ],
        },
        {
          title: "Goal",
          paragraphs: ["A small project to strengthen the fundamentals. This is what I wanted to practice:"],
          bullets: [
            "**CRUD**: creating, reading and cancelling data through a REST API.",
            "**Plain PHP**: understanding what a framework solves by building the router, the responses and the error handling by hand.",
            "**Tests**: testing the business logic and the queries with PHPUnit.",
          ],
        },
        {
          title: "What you can do",
          bullets: [
            "**List** bookings with combinable filters by state, date range, guest name and accommodation name.",
            "See a booking's **detail** with its event history as a timeline.",
            "**Create** bookings with browser and server validation.",
            "**Cancel** bookings from the list, one at a time or several at once, with confirmation.",
            "**Confirm or cancel** with controlled transitions: a cancelled booking can't change again.",
          ],
        },
        {
          title: "Architecture",
          paragraphs: [
            "Layered backend, with the core pieces built by hand: router, request, JSON responses, error handler and translator.",
          ],
          bullets: [
            "**Controllers**: translate HTTP into service calls.",
            "**Service**: business rules, with the allowed states and transitions.",
            "**Validator**: server-side validation against allow-lists.",
            "**Repository**: the only place with SQL.",
          ],
        },
        {
          title: "API routes",
          table: {
            head: ["Method", "Route", "Description"],
            rows: [
              ["GET", "`/api/reservas`", "List with combinable filters"],
              ["GET", "`/api/reservas/{id}`", "Detail with its event history"],
              ["POST", "`/api/reservas`", "Creates a booking in pending state"],
              ["PATCH", "`/api/reservas/{id}/estado`", "Confirms or cancels a booking"],
            ],
          },
          paragraphs: ["Responses are JSON with consistent HTTP status codes (200, 201, 400, 404, 405, 409, 422 and 500) and per-field errors."],
        },
        {
          title: "Security and quality",
          bullets: [
            "**PDO** prepared statements and server-side validation.",
            "**Twig** templates with autoescaping and no `|raw` anywhere.",
            "`Content-Security-Policy`, `X-Content-Type-Options` and `X-Frame-Options` headers.",
            "**16 PHPUnit tests** against the real database, inside a transaction that is rolled back.",
          ],
        },
        {
          title: "Stack",
          bullets: [
            "**Frontend**: Twig 3 views and vanilla JavaScript with ES modules. The filters also work without JavaScript.",
            "**Backend**: PHP 8.2+ with PSR-4 autoloading and Composer.",
            "**Data**: MySQL/MariaDB with two tables, CHECK constraints and a transaction to save the booking and its event. Includes 50 sample bookings.",
          ],
        },
        {
          title: "Deployment",
          bullets: [
            "Published on **InfinityFree**, a free hosting service with PHP and MySQL, with a custom subdomain and SSL certificate.",
            "An `.htaccess` file exposes only `frontend/` and blocks `backend/` and `database/`.",
            "Connection settings live in an `.env` file on the server, outside Git.",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: "Portfolio Web",
    description: {
      es: "Mi portafolio personal de 2026: quién soy, qué he estudiado y los proyectos que he construido, en español e inglés.",
      en: "My 2026 personal portfolio: who I am, what I have studied and the projects I have built, in Spanish and English.",
    },
    images: ["/img/portafolio-2026/portafolio2026_1.png"],
    tags: ["React", "Vite", "Three.js", "D3.js", "Framer Motion", "EmailJS", "CSS3"],
    tagIcons: [
      "fa-brands fa-react",
      "fa-solid fa-bolt",
      "fa-solid fa-cube",
      "fa-solid fa-circle-nodes",
      "fa-solid fa-wand-magic-sparkles",
      "fa-solid fa-envelope",
      "fa-brands fa-css3-alt",
    ],
    github: "https://github.com/noemmang/portafolio_2026.git",
    live: "https://www.noemmang.com",
    readme: {
      es: [
        {
          title: "¿Qué es?",
          paragraphs: [
            "Mi portafolio personal, rediseñado en 2026. Reúne en una sola página mi presentación, formación, experiencia, habilidades, certificados, proyectos y un formulario de contacto.",
          ],
        },
        {
          title: "Objetivo",
          paragraphs: ["Esto es lo que buscaba aprender:"],
          bullets: [
            "**React**: construir una web completa con componentes y hooks.",
            "**Varios idiomas**: ofrecer todo el contenido en español e inglés con cambio de idioma.",
            "**Presentación**: contar de forma clara quién soy y qué he construido.",
          ],
        },
        {
          title: "Qué incluye",
          bullets: [
            "**Árbol de habilidades** interactivo hecho con D3.js, con zoom, arrastre y nodos coloreados por categoría y estado (aprendido o pendiente).",
            "**Escena 3D** en la portada con Three.js.",
            "**Formulario de contacto** con EmailJS y validación, con estados de envío visibles.",
            "**Idioma** en español e inglés, con textos revisados a mano.",
            "Animaciones de entrada al hacer scroll con Framer Motion.",
            "Diseño totalmente responsive.",
          ],
        },
        {
          title: "Stack",
          bullets: [
            "**React** con Vite, componentes funcionales y hooks.",
            "**CSS** modular por componente, con variables globales, Grid y Flexbox.",
            "**D3.js**, **Three.js** y **Framer Motion** para visualización, 3D y animación.",
          ],
        },
        {
          title: "Publicación",
          bullets: ["Publicado en **www.noemmang.com**, con build de producción optimizado con Vite."],
        },
      ],
      en: [
        {
          title: "What is it?",
          paragraphs: [
            "My personal portfolio, redesigned in 2026. It brings together my introduction, education, experience, skills, certificates, projects and a contact form on a single page.",
          ],
        },
        {
          title: "Goal",
          paragraphs: ["This is what I wanted to learn:"],
          bullets: [
            "**React**: building a complete website with components and hooks.",
            "**Multiple languages**: offering all the content in Spanish and English with a language switch.",
            "**Presentation**: telling clearly who I am and what I have built.",
          ],
        },
        {
          title: "What it includes",
          bullets: [
            "An interactive **skill tree** built with D3.js, with zoom, drag and nodes colored by category and status (learned or pending).",
            "A **3D scene** on the landing section with Three.js.",
            "A **contact form** with EmailJS and validation, with visible sending states.",
            "**Language** switch between Spanish and English, with hand-reviewed texts.",
            "Scroll-triggered entry animations with Framer Motion.",
            "Fully responsive design.",
          ],
        },
        {
          title: "Stack",
          bullets: [
            "**React** with Vite, functional components and hooks.",
            "**CSS** modular per component, with global variables, Grid and Flexbox.",
            "**D3.js**, **Three.js** and **Framer Motion** for visualization, 3D and animation.",
          ],
        },
        {
          title: "Publishing",
          bullets: ["Published at **www.noemmang.com**, with an optimized production build from Vite."],
        },
      ],
    },
  },
];

// ─── EMAILJS ──────────────────────────────────────────────────────────────────
export const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};