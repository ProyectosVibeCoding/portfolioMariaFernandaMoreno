// Portfolio Data - Data-driven structure for easy maintenance

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  contribution: string;
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  isPlaceholder?: boolean;
}

export interface Skill {
  name: string;
  category: 'tech' | 'ia' | 'tools' | 'soft';
}

export interface Education {
  title: string;
  institution: string;
  year: string;
  category: 'degree' | 'course' | 'ia' | 'diploma';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const personalInfo = {
  name: "María Fernanda Moreno",
  role: "Desarrolladora Frontend | Automation (n8n) | IA aplicada",
  subtitle: "Desarrollo Sitios Web. Automatizo procesos con n8n integrando Google Workspace e IA para reducir tareas manuales y mejorar el seguimiento.",
  linkedin: "https://www.linkedin.com/in/mafetechdev",
  github: "https://github.com/MafeTech24",
  initials: "MF",
};

export const aboutText = `Soy Desarrolladora Front-End Jr en formación Full-Stack (MERN) con foco en automatización (n8n) e IA aplicada. Me definen la comunicación efectiva, el trabajo en equipo, la empatía y motivación, la eficiencia y organización y una fuerte orientación a la resolución de problemas. Disfruto transformar necesidades en soluciones claras, con seguimiento y documentación. Trabajo tanto en proyectos freelance como en colaboración con equipos, buscando siempre mejorar procesos y aportar valor medible.`;

export const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Empatía y motivación",
  "Eficiencia y organización",
  "Resolución de problemas",
];

export const techSkills: Skill[] = [
  { name: "JavaScript", category: "tech" },
  { name: "React.js", category: "tech" },
  { name: "Node.js", category: "tech" },
  { name: "Express", category: "tech" },
  { name: "MongoDB", category: "tech" },
  { name: "Vite", category: "tech" },
  { name: "JWT", category: "tech" },
  { name: "APIs REST", category: "tech" },
  { name: "Cloudinary", category: "tech" },
  { name: "n8n", category: "ia" },
  { name: "Gemini", category: "ia" },
  { name: "GPT", category: "ia" },
  { name: "Prompt Engineering", category: "ia" },
  { name: "IA Multimodal", category: "ia" },
  { name: "GitHub", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Google Workspace", category: "tools" },
  { name: "Trello", category: "tools" },
  { name: "Canva Pro", category: "tools" },
];

export const education: Education[] = [
  // Degrees
  /*{
    title: "Licenciatura en Producción de Bio-Imágenes",
    institution: "Universidad Nacional de Córdoba",
    year: "2004",
    category: "degree",
  },*/
  {
    title: "Carrera Fullstack (MERN)",
    institution: "Coderhouse",
    year: "2024 – Actualidad",
    category: "degree",
  },
 
  // IA & Automation
  {
    title: "Carrera de AI Automation",
    institution: "Coderhouse",
    year: "Enero 2026",
    category: "ia",
  },
  {
    title: "Curso de Creación de Productos desde Cero con IA (Vibe Coding)",
    institution: "Coderhouse",
    year: "Enero 2026",
    category: "ia",
  },
  {
    title: "Curso N8N: Crea automatizaciones inteligentes",
    institution: "Oracle Next Education",
    year: "2025-2026",
    category: "ia",
  },
  {
    title: "Curso de RAG y Agentes de IA",
    institution: "Oracle Next Education",
    year: "2025-2026",
    category: "ia",
  },
  
  {
    title: "Inmersión de IA con Google Gemini",
    institution: "Alura Latam",
    year: "2025",
    category: "ia",
  },
  // Diplomas & Courses
 /**  {
   title: "Diplomatura en E-commerce, Marketing Digital y Redes Sociales",
    institution: "UTN Córdoba",
    year: "2021",
    category: "diploma",
  },
  {
    title: "Marketing Digital, Community Manager y Redes Sociales",
    institution: "Coderhouse",
    year: "2025",
    category: "course",
  }, **/
];

export const experiences: Experience[] = [
  {
    title: "Freelance Web Developer (Frontend)",
    company: "Proyectos Independientes",
    period: "Dic 2024 – Actualidad",
    description: "Desarrollo y mantenimiento de sitios web para clientes. Integración de formularios, analítica y assets. Debugging y documentación funcional.",
  },
  {
    title: "Trabajo independiente – Emprendimiento Propio (Distribución)",
    company: "Emprendimiento Propio",
    period: "2018 – Actualidad",
    description: "Gestión integral de operaciones: soporte al cliente, priorización de urgencias, trazabilidad de pedidos, comunicación clara y resolución rápida de problemas.",
  },
  {
    title: "Realización de Estudios de Imágenes Médicas",
    company: "IMC – Servicio de Técnicas No Invasivas",
    period: "2012 – 2018",
    description: "Trato directo, soporte y contención a pacientes. Gestión y coordinación de prácticas médicas y turnos.",
  },
  {
    title: "Atención al Cliente - Call Center Inbound",
    company: "Sur Contact Center (Claro *611) · Allus (Telefónica 112) · SOS Asistencia",
    period: "2007 – 2012",
    description: "Gestión integral de consultas y reclamos, brindando soluciones efectivas. Registro y seguimiento en sistemas de gestión.",
  },
];

export const projects: Project[] = [
  {
  id: "portfolio-vibe-coding-lovable",
  title: "Portfolio Profesional – MafeTech (Vibe Coding con Lovable)",
  problem: "Necesitaba un Portfolio Tech Moderno para presentar mi perfil y proyectos.",
  solution: "One-page responsive con secciones claras y formulario de contacto funcional.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
  contribution: "Definí estructura y contenido, guié el vibe coding con prompts y ajusté código y README.",
  liveUrl: "https://mafetech.vercel.app/",
  repoUrl: "https://github.com/ProyectosVibeCoding/portfolioMariaFernandaMoreno",
},
  {
    id: "cristianmartinez",
    title: "Sitio Web Profesional – Abogado Cristian Martínez",
    problem: "El cliente necesitaba presencia web profesional para captar clientes.",
    solution: "Sitio web moderno con todos los medios de Contacto y diseño profesional.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    contribution: "Desarrollo completo, relevamiento de necesidades y publicación.",
    liveUrl: "https://cristianmartinez-abogado.vercel.app/",
  },
  {
    id: "silviamariella",
    title: "Sitio Web – Silvia Mariella & José Tomás",
    problem: "Necesidad sitio web para eventos y proyecto personal.",
    solution: "Landing page elegante con diseño personalizado.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    contribution: "Diseño, desarrollo y deploy en Vercel.",
    liveUrl: "https://silviamariella-josetomas.vercel.app/",
  },
  {
    id: "abyco",
    title: "Sitio Web Institucional – AB&CO Asesoría Integral",
    problem: "La empresa requería presencia digital profesional.",
    solution: "Sitio institucional con información de servicios y contacto.",
    stack: ["HTML", "CSS", "JavaScript"],
    contribution: "Desarrollo frontend completo y optimización.",
    liveUrl: "https://abyco-asesoriaintegral.vercel.app/index.html#",
  },
  {
    id: "n8n-automation",
    title: "Automatización de reuniones con n8n + Google Workspace + IA",
    problem: "Procesar grabaciones de reuniones manualmente era tedioso y propenso a errores.",
    solution: "Workflow automatizado: trigger en Drive → descarga → transcripción → extracción de puntos clave y tareas con IA → creación/actualización de documento → actualización de hoja tipo Kanban en Sheets.",
    stack: ["n8n", "Google Drive", "Google Docs", "Google Sheets", "IA/LLM"],
    contribution: "Diseño del flujo completo, configuración de nodos y testing.",
    repoUrl: "https://github.com/MafeTech24/n8n-actas-kanban-google-workspace",
    image: "n8n-workflow",
  },
  {
    id: "ecommerce-js",
    title: "E-commerce (Proyecto Final JavaScript)",
    problem: "Proyecto académico: crear un e-commerce funcional con JS puro.",
    solution: "Catálogo de productos, carrito de compras y flujo de compra completo.",
    stack: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
    contribution: "Desarrollo completo del frontend y lógica del carrito.",
    liveUrl: "https://mafetech24.github.io/proyectoFinalMorenoMariaFernanda/",
  },
  {
    id: "ecommerce-react",
    title: "E-commerce (Proyecto Final React)",
    problem: "Proyecto académico: migrar e-commerce a React con mejores prácticas.",
    solution: "Aplicación React con componentes reutilizables y estado centralizado.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    contribution: "Arquitectura de componentes, routing y manejo de estado.",
    repoUrl: "https://github.com/MafeTech24/ProyectoFinalMoreno.git",
  },
  //{
    //id: "api-rest-1",
    //title: "API REST (Node/Express)",
    //problem: "En carga / Próximamente",
    //solution: "En carga / Próximamente",
    //stack: ["Node.js", "Express", "MongoDB"],
    //contribution: "En carga / Próximamente",
    //isPlaceholder: true
  //},
  // { id: "api-rest-2",
  //  title: "API REST (Node/Express)",
  //  problem: "En carga / Próximamente",
  //  solution: "En carga / Próximamente",
  //  stack: ["Node.js", "Express", "MongoDB"],
  //  contribution: "En carga / Próximamente",
  //  isPlaceholder: true
  //},
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre mí" },
  { href: "#education", label: "Estudios" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];
