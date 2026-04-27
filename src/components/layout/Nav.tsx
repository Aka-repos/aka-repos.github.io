import { useLang } from "@/contexts/LangContext";

export function Nav() {
  const { lang, toggleLang } = useLang();

  return (
    <nav>
      <div className="nav-logo">
        <span>~/</span>aka-repos
      </div>
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <button id="lang-toggle" onClick={toggleLang}>
        {lang === "es" ? "EN" : "ES"}
      </button>
    </nav>
  );
}
