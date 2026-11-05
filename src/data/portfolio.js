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
// `details` usa claves semánticas fijas (frontend, backend, database, features,
// deployment, contact, visualization); las etiquetas visibles se traducen en
// src/i18n/translations.js → projects.detailLabels
export const projects = [
  {
    id: 1,
    title: "InmoDomain",
    description: {
      es: "Plataforma de análisis del mercado inmobiliario español con datos oficiales del INE y el MIVAU. Arquitectura de microservicios en .NET 10 con API Gateway (YARP), eventos asíncronos con Azure Service Bus y frontend en React. Permite explorar y comparar provincias, calcula un Property Score propio y gestiona favoritos y alertas. Desplegada en Azure con CI/CD y dominio propio.",
      en: "Spanish real estate market analysis platform built on official INE and MIVAU data. Microservices architecture in .NET 10 with an API Gateway (YARP), asynchronous events through Azure Service Bus and a React frontend. It lets users explore and compare provinces, computes its own Property Score and manages favorites and alerts. Deployed on Azure with CI/CD and a custom domain.",
    },
    images: [
      "/img/InmoDomain/InmoDomain_1.png",
    ],
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
    details: {
      es: {
        frontend: "SPA en React 19 con TypeScript y Vite, con react-router para la navegación (rutas públicas y rutas protegidas con sesión) y Recharts para los gráficos: evolución de precios, ranking, comparador entre provincias y mapa de calor de actividad. Sin librería de estado ni de peticiones: contextos de React (sesión, favoritos y notificaciones) y un cliente fetch propio con el access token en memoria, refresh token en localStorage y renovación compartida entre peticiones simultáneas con reintento tras un 401. Mapa interactivo de España, foto de perfil recortada y reducida en el navegador, estados de carga que avisan del arranque en frío, diseño responsive en modo oscuro y animaciones que respetan prefers-reduced-motion.",
        backend: "Siete servicios en .NET 10 y ASP.NET Core: Gateway (YARP), Identity, Property, MarketData, Analytics, Alerts y Notifications, cada uno con su responsabilidad y su base de datos lógica. Cada servicio sigue el patrón Controller → Service → Repository con DTOs en el límite HTTP y un tipo Result para los fallos de negocio. El Gateway es el único punto de entrada: valida el JWT, aplica rate limiting por IP y CORS, y no expone los servicios internos. Identity emite JWT firmados con RS256 (solo guarda la clave privada), refresh tokens con rotación en cada uso y recuperación de contraseña por email con Resend. MarketData importa los datos oficiales del INE (API JSON, tabla 6150) y del MIVAU (ficheros XLS leídos con ExcelDataReader) mediante un job de importación idempotente.",
        database: "PostgreSQL alojado en Neon, con un único proyecto y una base de datos lógica por servicio, sin tablas compartidas. Acceso con Entity Framework Core y claves primarias Guid, usando el código oficial del INE como referencia natural de provincia entre servicios. Cadenas de conexión separadas: pooled para la aplicación y directa para las migraciones. Analytics guarda un histórico trimestral de índices por provincia (precio, actividad y tendencia, en variantes de percentil histórico y ranking nacional) a partir de los cuales calcula el Property Score.",
        cloud: "Arquitectura orientada a eventos con Azure Service Bus (colas en nivel Basic): la importación de datos dispara el recálculo de índices en Analytics, que a su vez dispara la evaluación de alertas y la creación de notificaciones. Cada servicio va en su propia imagen Docker, publicada en GitHub Container Registry, y se despliega en Azure Container Apps con escala a cero y reglas KEDA que despiertan los consumidores al llegar un mensaje. Un Container Apps Job programado ejecuta la importación a diario. CI/CD con GitHub Actions: build, publicación de imágenes y despliegue autenticado con OIDC, sin secretos de larga duración. El frontend se publica en Azure Static Web Apps con dominio propio gestionado en Cloudflare. Presupuesto mensual limitado con alertas de coste, y entorno local completo con Docker Compose y el emulador de Service Bus.",
        features: "Exploración del mercado inmobiliario por provincia con precio medio por metro cuadrado y volumen de compraventas. Comparador de provincias. Property Score propio, con alternancia entre percentil histórico y ranking nacional, y tendencia trimestral o interanual. Favoritos, alertas personalizadas sobre el score, los índices o el precio por metro cuadrado (se disparan una vez por periodo de dato) y panel de notificaciones con contador de no leídas. Registro, inicio de sesión, recuperación de contraseña y perfil con foto.",
      },
      en: {
        frontend: "SPA built with React 19, TypeScript and Vite, using react-router for navigation (public routes and session-protected routes) and Recharts for the charts: price evolution, ranking, a province comparison and an activity heatmap. No state or data-fetching library: React contexts (session, favorites and notifications) and a custom fetch client with the access token kept in memory, the refresh token in localStorage and a single shared refresh across concurrent requests with a retry after a 401. Interactive map of Spain, profile photo cropped and downsized in the browser, loading states that warn about cold starts, a responsive dark-mode design and animations that respect prefers-reduced-motion.",
        backend: "Seven services in .NET 10 and ASP.NET Core: Gateway (YARP), Identity, Property, MarketData, Analytics, Alerts and Notifications, each with its own responsibility and its own logical database. Every service follows the Controller → Service → Repository pattern with DTOs at the HTTP boundary and a Result type for business failures. The Gateway is the single entry point: it validates the JWT, applies per-IP rate limiting and CORS, and does not expose internal services. Identity issues JWTs signed with RS256 (it alone holds the private key), refresh tokens rotated on every use and email-based password recovery through Resend. MarketData imports official data from the INE (JSON API, table 6150) and the MIVAU (XLS files read with ExcelDataReader) through an idempotent import job.",
        database: "PostgreSQL hosted on Neon, with a single project and one logical database per service, with no shared tables. Access through Entity Framework Core and Guid primary keys, using the official INE code as the natural province reference across services. Separate connection strings: pooled for the application and direct for migrations. Analytics stores a quarterly history of indexes per province (price, activity and trend, in historical-percentile and national-ranking variants) from which it computes the Property Score.",
        cloud: "Event-driven architecture on Azure Service Bus (Basic-tier queues): the data import triggers the index recalculation in Analytics, which in turn triggers alert evaluation and notification creation. Each service ships in its own Docker image, published to GitHub Container Registry, and runs on Azure Container Apps with scale-to-zero and KEDA rules that wake up the consumers when a message arrives. A scheduled Container Apps Job runs the import daily. CI/CD with GitHub Actions: build, image publishing and deployment authenticated through OIDC, with no long-lived secrets. The frontend is published on Azure Static Web Apps with a custom domain managed on Cloudflare. A capped monthly budget with cost alerts, and a full local environment with Docker Compose and the Service Bus emulator.",
        features: "Real estate market exploration by province with average price per square meter and sales volume. Province comparison. Own Property Score, switchable between historical percentile and national ranking, with quarterly or year-over-year trend. Favorites, custom alerts on the score, the indexes or the price per square meter (fired once per data period) and a notification panel with an unread counter. Sign-up, sign-in, password recovery and a profile with a photo.",
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
  {
    id: 3,
    title: "MisterHost",
    description: {
      es: "Gestión de reservas de alojamiento en PHP nativo, sin framework, hecha como prueba técnica para MisterPlan. API REST, vistas renderizadas con Twig e interfaz en JavaScript vanilla que filtra, crea y cancela reservas sin recargar la página. Desplegada en InfinityFree con dominio propio.",
      en: "Accommodation booking management built in plain PHP, no framework, made as a technical test for MisterPlan. REST API, Twig-rendered views and a vanilla JavaScript interface that filters, creates and cancels bookings without reloading the page. Deployed on InfinityFree with a custom domain.",
    },
    images: [
      "/img/MisterHost/MisterHost_1.png",
    ],
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
    details: {
      es: {
        frontend: "Vistas renderizadas en servidor con Twig 3: plantilla base con herencia (extends y block), autoescape activado y sin ningún |raw. El listado y el detalle (con el historial de eventos en forma de timeline) se pintan en servidor, así que los filtros funcionan también sin JavaScript. Encima, JavaScript vanilla con módulos ES: una única capa de acceso a la API, filtrado sin recargar, creación con validación en el navegador y errores del servidor bajo cada campo, y cancelación de una o varias reservas con confirmación. Estados de carga y avisos de éxito o error siempre visibles. HTML semántico sin lógica ni estilos inline, y CSS con variables y responsive en un fichero aparte.",
        backend: "API REST en PHP 8.2+ nativo, sin framework, organizada en capas: controladores (API y vistas) que traducen HTTP a llamadas de servicio, servicio con las reglas de negocio (estados y transiciones permitidas), validador y repositorio como único lugar con SQL. Piezas propias de Core: router, request, respuestas JSON, gestor de errores centralizado y traductor, con todos los textos en un fichero de idioma. Seguridad: consultas preparadas con PDO, validación en servidor con listas de valores permitidos, errores internos solo en el log y cabeceras Content-Security-Policy, X-Content-Type-Options y X-Frame-Options. Autoload PSR-4 con Composer y 16 tests con PHPUnit: validador, transiciones del servicio y filtros del repositorio contra la base de datos real, dentro de una transacción que se deshace.",
        database: "MySQL/MariaDB con PDO. Dos tablas, reserva y reserva_evento, con ENUM de estado, restricciones CHECK en fechas e importe, clave foránea e índices en estado y fechas. Crear una reserva o cambiar su estado y guardar su evento en el historial se hace en una sola transacción, para no dejar historial huérfano. Un único fichero .sql crea las tablas y carga 50 reservas de ejemplo en distintos estados, con su historial. SQL portable entre MySQL y MariaDB.",
        features: "Listado con filtros combinables por estado, rango de fechas, nombre del huésped y nombre del alojamiento. Detalle de la reserva con su historial de eventos. Creación de reservas con validación en cliente y en servidor. Cancelación desde el listado, de una en una o varias a la vez, con confirmación. Cambio de estado (confirmar o cancelar) con transiciones controladas: una reserva cancelada no cambia más. Respuestas JSON con códigos HTTP coherentes (200, 201, 400, 404, 405, 409, 422 y 500) y errores por campo.",
        deployment: "Desplegada en InfinityFree, un hosting gratuito con PHP y MySQL, con subdominio propio (misterhost.noemmang.com) y certificado SSL gratuito. Un .htaccess reparte las peticiones a frontend/, la única carpeta pública, y bloquea el acceso a backend/ y database/. Los datos de conexión viven en un .env en el servidor, fuera de Git.",
      },
      en: {
        frontend: "Server-rendered views with Twig 3: a base template with inheritance (extends and block), autoescaping enabled and no |raw anywhere. The list and the detail page (with the event history as a timeline) are rendered on the server, so the filters also work without JavaScript. On top of that, vanilla JavaScript with ES modules: a single API access layer, filtering without reloading, creation with in-browser validation and server errors shown under each field, and cancellation of one or several bookings with confirmation. Loading states and success or error messages always visible. Semantic HTML with no inline logic or styles, and CSS with variables and responsive rules in a separate file.",
        backend: "REST API in plain PHP 8.2+, no framework, organized in layers: controllers (API and views) that translate HTTP into service calls, a service with the business rules (allowed states and transitions), a validator and a repository as the only place with SQL. Custom Core pieces: router, request, JSON responses, centralized error handler and translator, with all texts kept in a language file. Security: PDO prepared statements, server-side validation against allow-lists, internal errors logged only, and Content-Security-Policy, X-Content-Type-Options and X-Frame-Options headers. PSR-4 autoloading with Composer and 16 PHPUnit tests: validator, service transitions and repository filters against the real database, inside a transaction that is rolled back.",
        database: "MySQL/MariaDB with PDO. Two tables, reserva and reserva_evento, with a state ENUM, CHECK constraints on dates and amount, a foreign key and indexes on state and dates. Creating a booking or changing its state and saving its event in the history is done in a single transaction, so no orphaned history is left behind. A single .sql file creates the tables and loads 50 sample bookings in different states, with their history. SQL portable between MySQL and MariaDB.",
        features: "List with combinable filters by state, date range, guest name and accommodation name. Booking detail with its event history. Booking creation with client and server validation. Cancellation from the list, one at a time or several at once, with confirmation. State change (confirm or cancel) with controlled transitions: a cancelled booking can't change again. JSON responses with consistent HTTP status codes (200, 201, 400, 404, 405, 409, 422 and 500) and per-field errors.",
        deployment: "Deployed on InfinityFree, a free hosting service with PHP and MySQL, with a custom subdomain (misterhost.noemmang.com) and a free SSL certificate. An .htaccess file routes requests to frontend/, the only public folder, and blocks access to backend/ and database/. Connection settings live in an .env file on the server, outside Git.",
      },
    },
  },
  {
    id: 4,
    title: "Portfolio Web",
    description: {
      es: "Portafolio personal 2026 rediseñado en React. SPA totalmente responsive con navegación suave, árbol de habilidades interactivo con D3.js, animaciones con Framer Motion y formulario de contacto integrado con EmailJS.",
      en: "2026 personal portfolio redesigned in React. Fully responsive SPA with smooth navigation, an interactive skill tree built with D3.js, Framer Motion animations and a contact form integrated with EmailJS.",
    },
    images: [
      "/img/portafolio-2026/portafolio2026_1.png",
    ],
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
];

// ─── EMAILJS ──────────────────────────────────────────────────────────────────
export const emailConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};