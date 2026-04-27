import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LangContext";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Dart: "#00B4AB",
  Java: "#b07219",
  PHP: "#4F5D95",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Go: "#00ADD8",
  Rust: "#dea584",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
};

export function Repos() {
  const { t } = useLang();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    fetch("https://api.github.com/users/Aka-repos/repos?sort=updated&per_page=9&type=public")
      .then((r) => r.json())
      .then((data: Repo[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
          setStatus("ok");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="repos">
      <div className="projects-inner">
        <div className="projects-header reveal">
          <div className="section-label">{t("repos-label")}</div>
          <h2>{t("repos-title")}</h2>
        </div>
        <div className="repos-grid">
          {status === "loading" && (
            <p className="repo-error">...</p>
          )}
          {status === "error" && (
            <p className="repo-error">
              {t("repo-fail")}{" "}
              <a href="https://github.com/Aka-repos" target="_blank" rel="noreferrer">
                {t("repo-fail-link")}
              </a>
            </p>
          )}
          {status === "ok" && repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="repo-card"
            >
              <div className="repo-name">{repo.name}</div>
              <div className="repo-desc">
                {repo.description ?? t("repo-no-desc")}
              </div>
              <div className="repo-meta">
                {repo.language && (
                  <span>
                    <span
                      className="lang-dot"
                      style={{ background: LANG_COLORS[repo.language] ?? "#888" }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
                {repo.forks_count > 0 && <span>⑂ {repo.forks_count}</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
