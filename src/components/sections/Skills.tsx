import { useLang } from "@/contexts/LangContext";
import { skills } from "@/data/skills";
import type { TranslationKey } from "@/data/translations";

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="skills-header reveal">
          <div className="section-label" style={{ justifyContent: "center" }}>
            {t("skills-label")}
          </div>
        </div>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <div className="skill-category reveal" key={i}>
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-title">
                {cat.titleKey ? t(cat.titleKey) : cat.title}
              </div>
              <div className="skill-tags">
                {cat.tags.map((tag, j) => (
                  <span className="skill-tag" key={j}>
                    {tag.i18nKey ? t(tag.i18nKey as TranslationKey) : tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
