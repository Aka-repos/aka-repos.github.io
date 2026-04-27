import { useLang } from "@/contexts/LangContext";
import {
  Globe,
  Monitor,
  Bot,
  Database,
  BarChart3,
  Workflow,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { TranslationKey } from "@/data/translations";
import { MobileMockup } from "@/components/ui/mobile-mockup";

interface ServiceEntry {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  Icon: LucideIcon;
}

const services: ServiceEntry[] = [
  { titleKey: "service-landing-title", descKey: "service-landing-desc", Icon: Globe },
  { titleKey: "service-web-title",     descKey: "service-web-desc",     Icon: Monitor },
  { titleKey: "service-ai-title",      descKey: "service-ai-desc",      Icon: Bot },
  { titleKey: "service-data-title",    descKey: "service-data-desc",    Icon: Database },
  { titleKey: "service-dashboard-title", descKey: "service-dashboard-desc", Icon: BarChart3 },
  { titleKey: "service-automation-title", descKey: "service-automation-desc", Icon: Workflow },
  { titleKey: "service-mobile-title",  descKey: "service-mobile-desc",  Icon: Smartphone },
];

export function Services() {
  const { t } = useLang();

  return (
    <section id="services">
      <div className="services-inner">

        {/* Mobile showcase — split layout */}
        <div className="services-mobile-showcase reveal">
          <div className="services-mobile-left">
            <div className="section-label">{t("services-label")}</div>
            <h2>{t("services-title")}</h2>
            <p className="services-mobile-sub">{t("services-mobile-sub")}</p>
            <div className="services-mobile-pills">
              <span>iOS</span>
              <span>Android</span>
              <span>Flutter</span>
              <span>React Native</span>
            </div>
          </div>
          <div className="services-mobile-right">
            <MobileMockup />
          </div>
        </div>

        {/* Service cards grid */}
        <div className="services-grid">
          {services.map(({ titleKey, descKey, Icon }, i) => (
            <div className="service-card reveal" key={titleKey}>
              <span className="service-number">0{i + 1}</span>
              <div className="service-icon-wrap">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="service-title">{t(titleKey)}</h3>
              <p className="service-desc">{t(descKey)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
