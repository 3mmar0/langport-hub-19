import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, LogIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useI18n } from "@/lib/i18n";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/programs", key: "nav.programs" },
  { to: "/find-your-level", key: "nav.findLevel" },
  { to: "/how-it-works", key: "nav.howItWorks" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 lg:h-20">
        <Logo className="h-9 lg:h-10" />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <Button asChild variant="outline" size="sm" className="gap-2">
            <Link to="/login">
              <LogIn className="size-4" />
              {t("nav.login")}
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/register">{t("nav.join")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("nav.menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" onClick={() => setOpen(false)}>
                <Link to="/login">{t("nav.login")}</Link>
              </Button>
              <Button asChild onClick={() => setOpen(false)}>
                <Link to="/register">{t("nav.join")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
