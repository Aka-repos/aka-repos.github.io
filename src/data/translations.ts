export type Lang = "es" | "en";
export type TranslationKey = keyof typeof translations.es;

export const translations = {
  es: {
    "hero-desc":
      "Software Engineer especializado en integración de sistemas, automatización e inteligencia artificial aplicada. Construyo software que conecta aplicaciones, infraestructura y datos para desarrollar soluciones inteligentes y escalables.",
    "hero-cta-projects": "Ver proyectos →",
    "hero-cta-contact": "Contacto",
    "about-label": "Sobre mí",
    "about-title": "Software Engineer & Full-Stack Web & Mobile Developer",
    "about-p1":
      "Ingeniero de Software y desarrollador Full-Stack con experiencia en la construcción de aplicaciones web y móviles, enfocado en soluciones escalables y de alto rendimiento.",
    "about-p2":
      "He trabajado en sistemas reales integrando APIs, procesamiento de datos y arquitecturas modernas, incluyendo proyectos de inteligencia artificial, automatización y plataformas de alto tráfico.",
    "about-p3":
      "Me especializo en resolver problemas complejos que conectan múltiples capas tecnológicas — desde el backend y la infraestructura hasta la automatización y el uso aplicado de IA.",
    "stat-projects": "proyectos construidos",
    "stat-tech": "tecnologías dominadas",
    "stat-stacks": "stacks principales",
    "stat-curiosity": "curiosidad técnica",
    "services-label": "Servicios",
    "services-title": "¿Qué podemos construir?",
    "services-mobile-sub": "Desarrollo apps nativas y multiplataforma — desde MVPs hasta productos de producción con alto tráfico en iOS y Android.",
    "service-landing-title": "Landing Pages",
    "service-landing-desc": "Páginas de alto impacto diseñadas para convertir. Velocidad, jerarquía visual y CTA claros desde el primer scroll.",
    "service-web-title": "Sitios Web a Medida",
    "service-web-desc": "Plataformas web completas adaptadas a tu negocio: portales, marketplaces, sistemas de contenido y más.",
    "service-ai-title": "Agentes de IA para tu Organización",
    "service-ai-desc": "Asistentes y agentes inteligentes integrados a tus flujos de trabajo — RAG, embeddings y modelos de lenguaje aplicados a casos reales.",
    "service-data-title": "Consolidación de Fuentes de Datos",
    "service-data-desc": "Unificación de datos dispersos en distintas plataformas o sistemas para tener una sola fuente de verdad confiable.",
    "service-dashboard-title": "Dashboards Interactivos",
    "service-dashboard-desc": "Visualizaciones en tiempo real que convierten datos crudos en decisiones. Filtros, métricas clave y exportaciones integradas.",
    "service-automation-title": "Automatización de Procesos y Reportes",
    "service-automation-desc": "Elimina tareas manuales repetitivas. Scripts, pipelines y reportes automáticos que ahorran horas cada semana.",
    "service-mobile-title": "Apps Móviles",
    "service-mobile-desc": "Aplicaciones nativas y multiplataforma en Flutter, Kotlin y Swift. Desde MVP hasta apps de producción con alto tráfico.",
    "skills-label": "Stack tecnológico",
    "skill-title-frontend": "Sistemas Frontend",
    "skill-tag-ssr": "Renderizado del lado del servidor (SSR)",
    "skill-tag-seo": "Optimización SEO",
    "skill-tag-components": "Arquitectura de componentes",
    "skill-tag-perf": "Optimización de rendimiento",
    "skill-tag-serverless-arch": "Arquitecturas Serverless",
    "projects-label": "Proyectos",
    "projects-title": "Lo que he construido",
    "proj-prensaai-desc":
      "Plataforma de inteligencia artificial para análisis y exploración semántica de contenido periodístico. Implementa arquitectura RAG utilizando Amazon Bedrock para generación de respuestas, Pinecone como vector database y AWS Lambda para procesamiento serverless.",
    "proj-prensaapp-desc":
      "Aplicación móvil desarrollada en Flutter para consumo de contenido informativo. Participé en el mantenimiento evolutivo, optimización de rendimiento y desarrollo de nuevas funcionalidades como renderizado dinámico, integración con APIs y reproducción multimedia.",
    "proj-prensaweb-desc":
      "Plataforma web de alto tráfico para distribución de contenido periodístico, soportando picos de hasta 250K vistas diarias. Participé en la integración de servicios, consumo de APIs, manejo de contenido dinámico y optimización del rendimiento.",
    "proj-cmdb-desc":
      "Sistema de gestión de configuración basado en arquitectura MVC para administración de activos TI. Incluye autenticación, inventario, asignación de equipos, reportes y exportación a Excel.",
    "proj-finreconcile-desc":
      "Sistema automatizado de conciliación financiera para la validación de transacciones de PayPal y Stripe contra registros internos en Oracle. Procesa JSON, valida por referencia/monto/fecha y clasifica transacciones. Redujo tiempos de conciliación manual de las suscripciones de La Prensa.",
    "proj-ecommerce-desc":
      "Plataforma e-commerce con catálogo, carrito de compras, gestión de pedidos y panel administrativo. Implementa backend en Java con persistencia en MySQL.",
    "proj-ecommerce-template-desc":
      "Plantilla para empresas que deseen implementar un sistema de comercio electrónico básico. Incluye catálogo, carrito, gestión de pedidos y panel admin. Backend en PostgreSQL sobre Supabase con autenticación y dashboard en React.",
    "repos-label": "Repositorios",
    "repos-title": "GitHub",
    "contact-label": "Contacto",
    "contact-title": "¿Trabajamos juntos?",
    "contact-sub":
      "Estoy abierto a oportunidades de trabajo, proyectos freelance y colaboraciones técnicas. Si tenés algo interesante, hablemos.",
    "repo-none": "No se encontraron repositorios públicos.",
    "repo-fail": "No se pudieron cargar los repositorios.",
    "repo-fail-link": "Ver en GitHub →",
    "repo-no-desc": "Sin descripción",
  },
  en: {
    "hero-desc":
      "Software Engineer specialized in systems integration, automation, and applied AI. I build software that connects applications, infrastructure, and data to deliver intelligent, scalable solutions.",
    "hero-cta-projects": "View projects →",
    "hero-cta-contact": "Contact",
    "about-label": "About me",
    "about-title": "Software Engineer & Full-Stack Web & Mobile Developer",
    "about-p1":
      "Software Engineer and Full-Stack developer with experience building web and mobile applications, focused on scalable and high-performance solutions.",
    "about-p2":
      "I have worked on real-world systems integrating APIs, data processing, and modern architectures — including AI projects, automation, and high-traffic platforms.",
    "about-p3":
      "I specialize in solving complex problems that connect multiple technology layers — from backend and infrastructure to automation and applied AI.",
    "stat-projects": "projects built",
    "stat-tech": "technologies mastered",
    "stat-stacks": "main stacks",
    "stat-curiosity": "technical curiosity",
    "services-label": "Services",
    "services-title": "What can we build?",
    "services-mobile-sub": "I build native and cross-platform apps — from MVPs to production products with high traffic on iOS and Android.",
    "service-landing-title": "Landing Pages",
    "service-landing-desc": "High-impact pages designed to convert. Speed, visual hierarchy, and clear CTAs from the first scroll.",
    "service-web-title": "Custom Websites",
    "service-web-desc": "Full web platforms tailored to your business: portals, marketplaces, content systems and more.",
    "service-ai-title": "Custom AI Agents for Your Organization",
    "service-ai-desc": "Intelligent assistants and agents integrated into your workflows — RAG, embeddings and language models applied to real use cases.",
    "service-data-title": "Data Source Consolidation",
    "service-data-desc": "Unify scattered data across multiple platforms or systems into a single, reliable source of truth.",
    "service-dashboard-title": "Interactive Dashboards",
    "service-dashboard-desc": "Real-time visualizations that turn raw data into decisions. Filters, key metrics and integrated exports.",
    "service-automation-title": "Process Automation & Reports",
    "service-automation-desc": "Eliminate repetitive manual tasks. Scripts, pipelines and automated reports that save hours every week.",
    "service-mobile-title": "Mobile Apps",
    "service-mobile-desc": "Native and cross-platform apps in Flutter, Kotlin and Swift. From MVP to high-traffic production apps.",
    "skills-label": "Tech Stack",
    "skill-title-frontend": "Frontend Systems",
    "skill-tag-ssr": "Server-Side Rendering (SSR)",
    "skill-tag-seo": "SEO Optimization",
    "skill-tag-components": "Component Architecture",
    "skill-tag-perf": "Performance Optimization",
    "skill-tag-serverless-arch": "Serverless Architectures",
    "projects-label": "Projects",
    "projects-title": "What I've built",
    "proj-prensaai-desc":
      "AI platform for semantic analysis and exploration of journalistic content. Implements RAG architecture using Amazon Bedrock, Pinecone as the vector database, and AWS Lambda for serverless processing.",
    "proj-prensaapp-desc":
      "Mobile app built in Flutter for consuming news content. Contributed to maintenance, performance optimization, and new features including dynamic rendering, API integration, and multimedia playback.",
    "proj-prensaweb-desc":
      "High-traffic web platform for journalistic content distribution, sustaining peaks of up to 250K daily views. Contributed to service integration, API consumption, content handling, and performance optimization.",
    "proj-cmdb-desc":
      "MVC-based configuration management system for IT asset administration. Includes authentication, inventory, equipment assignment, reporting, and Excel export.",
    "proj-finreconcile-desc":
      "Automated financial reconciliation system for validating PayPal and Stripe transactions against internal Oracle records. Processes JSON, validates by reference/amount/date, and classifies transactions. Reduced manual reconciliation time for La Prensa subscriptions.",
    "proj-ecommerce-desc":
      "E-commerce platform with product catalog, shopping cart, order management, and admin dashboard. Java backend with MySQL persistence.",
    "proj-ecommerce-template-desc":
      "Template for businesses looking to implement a basic e-commerce system. Includes catalog, cart, order management, and admin panel. PostgreSQL backend on Supabase with authentication and React dashboard.",
    "repos-label": "Repositories",
    "repos-title": "GitHub",
    "contact-label": "Contact",
    "contact-title": "Work together?",
    "contact-sub":
      "I'm open to job opportunities, freelance projects, and technical collaborations. If you have something interesting, let's talk.",
    "repo-none": "No public repositories found.",
    "repo-fail": "Could not load repositories.",
    "repo-fail-link": "View on GitHub →",
    "repo-no-desc": "No description",
  },
} as const;
