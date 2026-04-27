import { useLang } from "@/contexts/LangContext";
import { projects } from "@/data/projects";
import { GlowCard } from "@/components/ui/spotlight-card";

function getAppHref(project: typeof projects[0]): string {
  const ua = navigator.userAgent;
  const isApple = /iPad|iPhone|iPod|Macintosh/.test(ua);
  return isApple ? (project.iosHref ?? "#") : (project.androidHref ?? "#");
}

export function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects">
      <div className="projects-inner">
        <div className="projects-header reveal">
          <div className="section-label">{t("projects-label")}</div>
          <h2>{t("projects-title")}</h2>
        </div>
        <div className="projects-grid">
          {projects.map((proj) => {
            const href = proj.osLink ? getAppHref(proj) : (proj.href ?? null);
            return (
              <GlowCard key={proj.name} glowColor="blue" className="project-card reveal">
                <div className="project-card-top">
                  <div className="project-icon">{proj.icon}</div>
                  <div className="project-links">
                    {href && (
                      <a href={href} target="_blank" rel="noreferrer">↗</a>
                    )}
                  </div>
                </div>
                <div className="project-name">{proj.name}</div>
                <p className="project-desc">{proj.desc[lang].intro}</p>
                {proj.desc[lang].responsibilities.length > 0 && (
                  <div className="project-responsibilities">
                    <div className="project-responsibilities-label">
                      {lang === "es" ? "Responsabilidades" : "Responsibilities"}
                    </div>
                    <ul>
                      {proj.desc[lang].responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {proj.links && proj.links.length > 0 && (
                  <div className="project-extra-links">
                    {proj.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="project-extra-link"
                      >
                        <strong>{link.label}</strong> ↗
                      </a>
                    ))}
                  </div>
                )}
                <div className="project-tech">
                  {proj.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
