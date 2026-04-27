import { useLang } from "@/contexts/LangContext";

const stats = [
  { num: "7+", key: "stat-projects" as const },
  { num: "8+", key: "stat-tech" as const },
  { num: "3",  key: "stat-stacks" as const },
  { num: "∞",  key: "stat-curiosity" as const },
];

export function About() {
  const { t } = useLang();

  return (
    <section id="about">
      <div className="about-grid">
        <div className="reveal">
          <div className="section-label">{t("about-label")}</div>
          <h2>{t("about-title")}</h2>
          <p className="about-text">{t("about-p1")}</p>
          <p className="about-text">{t("about-p2")}</p>
          <p className="about-text">{t("about-p3")}</p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://github.com/Aka-repos"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ fontSize: "0.75rem", padding: "0.65rem 1.25rem" }}
            >
              ↗ GitHub
            </a>
          </div>
        </div>
        <div className="about-stats reveal">
          {stats.map(({ num, key }) => (
            <div className="stat-card" key={key}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{t(key)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
