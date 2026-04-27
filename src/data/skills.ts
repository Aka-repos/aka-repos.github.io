import type { TranslationKey } from "./translations";

export interface SkillTag {
  label?: string;
  i18nKey?: TranslationKey;
}

export interface SkillCategory {
  icon: string;
  titleKey?: TranslationKey;
  title?: string;
  tags: SkillTag[];
}

export const skills: SkillCategory[] = [
  {
    icon: "💻",
    title: "Software Engineering",
    tags: [
      { label: "PHP" },
      { label: "Java" },
      { label: "Python" },
      { label: "JSP" },
      { label: "REST APIs" },
      { label: "MySQL" },
      { label: "PDO" },
    ],
  },
  {
    icon: "🎨",
    titleKey: "skill-title-frontend",
    tags: [
      { label: "React" },
      { label: "Vue.js" },
      { label: "jQuery" },
      { i18nKey: "skill-tag-ssr" },
      { i18nKey: "skill-tag-seo" },
      { i18nKey: "skill-tag-components" },
      { label: "SCSS" },
      { i18nKey: "skill-tag-perf" },
    ],
  },
  {
    icon: "☁️",
    title: "Backend",
    tags: [
      { label: "SQL" },
      { label: "PostgreSQL" },
      { label: "MongoDB" },
      { label: "Node.js" },
      { label: "REST APIs" },
      { label: "SQL Server" },
    ],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    tags: [
      { label: "Flutter" },
      { label: "Kotlin" },
      { label: "WebView" },
      { label: "Swift" },
      { label: "React Native" },
    ],
  },
  {
    icon: "🤖",
    title: "AI Systems",
    tags: [
      { label: "RAG" },
      { label: "Embeddings" },
      { label: "Vector Search" },
      { label: "Pinecone" },
      { label: "NLU" },
      { label: "ChromaDB" },
    ],
  },
  {
    icon: "⚡",
    title: "Automation & Infrastructure",
    tags: [
      { label: "Ansible" },
      { label: "RESTCONF" },
      { label: "NETCONF" },
      { label: "Cisco IOS XE" },
      { label: "OSPFv3" },
      { label: "IPv6" },
      { label: "GNS3" },
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & Serverless",
    tags: [
      { label: "AWS" },
      { label: "AWS Lambda" },
      { label: "Amazon Bedrock" },
      { i18nKey: "skill-tag-serverless-arch" },
      { label: "Firebase" },
      { label: "Supabase" },
      { label: "GCP" },
      { label: "VPS" },
      { label: "Git" },
      { label: "GitHub" },
    ],
  },
  {
    icon: "🔐",
    title: "Security & Integrations",
    tags: [
      { label: "OAuth 2.0" },
      { label: "JWT" },
      { label: "PayPal API" },
      { label: "Stripe API" },
      { label: "Webhooks" },
      { label: "JSON APIs" },
      { label: "password_hash" },
    ],
  },
];
