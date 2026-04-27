import type { TranslationKey } from "./translations";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectDescContent {
  intro: string;
  responsibilities: string[];
}

export interface ProjectDesc {
  es: ProjectDescContent;
  en: ProjectDescContent;
}

export interface Project {
  icon: string;
  name: string;
  descKey: TranslationKey;
  desc: ProjectDesc;
  tech: string[];
  href: string | null;
  osLink?: boolean;
  iosHref?: string;
  androidHref?: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    icon: "🤖",
    name: "Prensa AI",
    descKey: "proj-prensaai-desc",
    desc: {
      es: {
        intro:
          "Plataforma de Inteligencia Artificial aplicada al análisis semántico de contenido periodístico, orientada a búsqueda contextual, generación de respuestas y exploración avanzada de información. Diseñada bajo una arquitectura Retrieval-Augmented Generation (RAG), integrando servicios cloud altamente escalables para procesamiento de lenguaje natural y recuperación eficiente de embeddings.",
        responsibilities: [
          "Diseño e implementación de pipelines RAG para consultas semánticas.",
          "Integración con Amazon Bedrock para inferencia de modelos fundacionales.",
          "Uso de Pinecone como vector database para indexación y búsqueda de embeddings.",
          "Desarrollo de funciones serverless con AWS Lambda para procesamiento asincrónico.",
          "Optimización de latencia en consultas mediante caching y estrategias de chunking.",
          "Manejo de ingestion pipelines para contenido periodístico estructurado y no estructurado.",
        ],
      },
      en: {
        intro:
          "Artificial Intelligence platform for semantic analysis of journalistic content, focused on contextual search, response generation, and advanced information exploration. Built on a Retrieval-Augmented Generation (RAG) architecture integrating highly scalable cloud services for natural language processing and efficient embedding retrieval.",
        responsibilities: [
          "Design and implementation of RAG pipelines for semantic queries.",
          "Integration with Amazon Bedrock for foundational model inference.",
          "Use of Pinecone as a vector database for embedding indexing and search.",
          "Development of serverless functions with AWS Lambda for asynchronous processing.",
          "Query latency optimization through caching and chunking strategies.",
          "Management of ingestion pipelines for structured and unstructured journalistic content.",
        ],
      },
    },
    tech: ["RAG", "Amazon Bedrock", "AWS Lambda", "Pinecone"],
    href: "https://www.prensa.com/prensa-ai",
  },
  {
    icon: "📱",
    name: "La Prensa Panamá",
    descKey: "proj-prensaapp-desc",
    desc: {
      es: {
        intro:
          "Aplicación móvil de alto consumo desarrollada en Flutter para distribución de contenido informativo en tiempo real.",
        responsibilities: [
          "Mantenimiento evolutivo y mejora continua del código base.",
          "Optimización de rendimiento (reducción de jank, mejoras en rendering y uso eficiente de widgets).",
          "Implementación de renderizado dinámico para múltiples tipos de contenido (HTML, multimedia, embeds).",
          "Integración con APIs REST y servicios externos.",
          "Manejo de reproducción multimedia (video, embeds tipo YouTube).",
          "Resolución de problemas complejos de layout y constraints en Flutter.",
          "Implementación de soluciones robustas para renderizado HTML (ej: wrappers personalizados).",
        ],
      },
      en: {
        intro:
          "High-traffic mobile application built in Flutter for real-time news content distribution.",
        responsibilities: [
          "Evolutionary maintenance and continuous improvement of the codebase.",
          "Performance optimization (jank reduction, rendering improvements, efficient widget usage).",
          "Dynamic rendering for multiple content types (HTML, multimedia, embeds).",
          "Integration with REST APIs and external services.",
          "Multimedia playback handling (video, YouTube-style embeds).",
          "Resolution of complex layout and constraint issues in Flutter.",
          "Robust HTML rendering solutions (e.g. custom wrapper implementations).",
        ],
      },
    },
    tech: ["Flutter", "Dart", "REST APIs", "WebView", "Firebase"],
    href: null,
    osLink: true,
    iosHref: "https://apps.apple.com/pa/app/la-prensa-panam%C3%A1/id571945271",
    androidHref: "https://play.google.com/store/apps/details?id=prensa.com&hl=es_419&pli=1",
  },
  {
    icon: "🌐",
    name: "PRENSA.COM",
    descKey: "proj-prensaweb-desc",
    desc: {
      es: {
        intro:
          "Plataforma web de alto tráfico para distribución de contenido periodístico, soportando picos superiores a 250K vistas diarias.",
        responsibilities: [
          "Integración y consumo de APIs para contenido dinámico.",
          "Optimización de performance web (TTFB, lazy loading, caching).",
          "Manejo de alto volumen de tráfico y estabilidad en producción.",
          "Implementación de lógica frontend para renderizado eficiente.",
          "Integración con CMS para publicación de contenido en tiempo real.",
          "Mejora de métricas Core Web Vitals.",
        ],
      },
      en: {
        intro:
          "High-traffic web platform for journalistic content distribution, sustaining peaks above 250K daily views.",
        responsibilities: [
          "API integration and consumption for dynamic content.",
          "Web performance optimization (TTFB, lazy loading, caching).",
          "High-volume traffic handling and production stability.",
          "Frontend logic implementation for efficient rendering.",
          "CMS integration for real-time content publishing.",
          "Core Web Vitals metrics improvement.",
        ],
      },
    },
    tech: ["JavaScript", "APIs", "CMS", "Web Performance"],
    href: "https://www.prensa.com/",
    links: [
      { label: "Mi Diario", href: "https://www.midiario.com/" },
      { label: "Ellas", href: "https://www.ellas.pa/" },
    ],
  },
  {
    icon: "🗄️",
    name: "CMDB System",
    descKey: "proj-cmdb-desc",
    desc: {
      es: {
        intro:
          "Sistema de gestión de configuración (CMDB) para administración de activos TI, desarrollado bajo arquitectura MVC.",
        responsibilities: [
          "Diseño de arquitectura backend estructurada (MVC).",
          "Implementación de autenticación y control de acceso.",
          "Desarrollo de módulos de inventario, asignación y trazabilidad de activos.",
          "Generación de reportes y exportación de datos (Excel).",
          "Optimización de consultas SQL mediante uso de PDO.",
        ],
      },
      en: {
        intro:
          "Configuration management system (CMDB) for IT asset administration, built on MVC architecture.",
        responsibilities: [
          "Structured backend architecture design (MVC).",
          "Authentication and access control implementation.",
          "Inventory, assignment, and asset traceability module development.",
          "Report generation and data export (Excel).",
          "SQL query optimization using PDO.",
        ],
      },
    },
    tech: ["PHP", "PDO", "MySQL", "MVC"],
    href: "https://github.com/Aka-repos",
  },
  {
    icon: "💳",
    name: "Financial Reconciliation System",
    descKey: "proj-finreconcile-desc",
    desc: {
      es: {
        intro:
          "Sistema automatizado para conciliación financiera de transacciones provenientes de pasarelas de pago como PayPal y Stripe, contrastadas contra registros internos en Oracle. Impacto: reducción significativa del tiempo de conciliación manual en el sistema de suscripciones.",
        responsibilities: [
          "Procesamiento de datos en formato JSON provenientes de APIs externas.",
          "Validación de transacciones por referencia, monto y fecha.",
          "Clasificación automática de inconsistencias.",
          "Integración con base de datos Oracle para validación cruzada.",
          "Automatización de flujos operativos críticos.",
        ],
      },
      en: {
        intro:
          "Automated financial reconciliation system for validating PayPal and Stripe payment gateway transactions against internal Oracle records. Impact: significant reduction in manual reconciliation time for the subscription system.",
        responsibilities: [
          "JSON data processing from external payment APIs.",
          "Transaction validation by reference, amount, and date.",
          "Automatic inconsistency classification.",
          "Oracle database integration for cross-validation.",
          "Automation of critical operational workflows.",
        ],
      },
    },
    tech: ["PHP", "SQL", "JSON Processing", "Oracle"],
    href: null,
  },
  {
    icon: "🛒",
    name: "Mini E-commerce",
    descKey: "proj-ecommerce-desc",
    desc: {
      es: {
        intro:
          "Plataforma de comercio electrónico con funcionalidades completas de compra y gestión.",
        responsibilities: [
          "Desarrollo de backend en Java.",
          "Implementación de catálogo de productos, carrito y gestión de pedidos.",
          "Persistencia de datos con MySQL.",
          "Desarrollo de vistas con JSP.",
        ],
      },
      en: {
        intro:
          "E-commerce platform with full purchase and management functionality.",
        responsibilities: [
          "Java backend development.",
          "Product catalog, shopping cart, and order management implementation.",
          "Data persistence with MySQL.",
          "View development with JSP.",
        ],
      },
    },
    tech: ["Java", "JSP", "MySQL", "MVC"],
    href: "https://github.com/Aka-repos/mini-ecommerce",
  },
  {
    icon: "🛒",
    name: "E-commerce Template",
    descKey: "proj-ecommerce-template-desc",
    desc: {
      es: {
        intro:
          "Template reutilizable para implementación rápida de soluciones e-commerce.",
        responsibilities: [
          "Diseño de arquitectura moderna basada en backend-as-a-service.",
          "Implementación de autenticación y base de datos con Supabase.",
          "Desarrollo de dashboard administrativo en React.",
          "Modelado de base de datos en PostgreSQL.",
        ],
      },
      en: {
        intro:
          "Reusable template for rapid e-commerce solution implementation.",
        responsibilities: [
          "Modern backend-as-a-service architecture design.",
          "Authentication and database implementation with Supabase.",
          "React admin dashboard development.",
          "PostgreSQL database modeling.",
        ],
      },
    },
    tech: ["PostgreSQL", "Supabase", "React"],
    href: "https://github.com/Aka-repos/e-commerce-template",
  },
];
