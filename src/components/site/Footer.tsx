import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="navy-band mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo className="h-10" />
          <p className="max-w-xs text-sm text-navy-foreground/70">{t("home.hero.sub")}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2 text-sm text-navy-foreground/75">
            <li><Link to="/about" className="hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link to="/programs" className="hover:text-primary">{t("nav.programs")}</Link></li>
            <li><Link to="/how-it-works" className="hover:text-primary">{t("nav.howItWorks")}</Link></li>
            <li><Link to="/contact" className="hover:text-primary">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("footer.forStudents")}
          </h3>
          <ul className="space-y-2 text-sm text-navy-foreground/75">
            <li><Link to="/login" className="hover:text-primary">{t("nav.login")}</Link></li>
            <li><Link to="/find-your-level" className="hover:text-primary">{t("nav.findLevel")}</Link></li>
            <li><Link to="/register" className="hover:text-primary">{t("nav.join")}</Link></li>
            <li><Link to="/portal/support" className="hover:text-primary">{t("portal.support")}</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("footer.contact")}
          </h3>
          <ul className="space-y-2 text-sm text-navy-foreground/75">
            <li className="flex items-center gap-2"><Phone className="size-4 text-primary" /> +20 100 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-primary" /> hello@langport.com</li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-primary" /> Cairo, Egypt</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Langport for Educational Services. {t("footer.rights")}</span>
          <span>{t("brand.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
