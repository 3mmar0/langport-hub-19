import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  GraduationCap,
  Layers,
  MessageSquareHeart,
  MonitorPlay,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteLayout, Section, SectionHeading } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";
import { programs, levels } from "@/lib/data/programs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Langport — English Programs, Live Classes & Student Portal" },
      {
        name: "description",
        content:
          "Learn English with Langport: CEFR-based levels, experienced instructors, interactive live classes and a student portal for schedules, materials and progress.",
      },
      { property: "og:title", content: "Langport — Learn English with Confidence" },
      {
        property: "og:description",
        content: "CEFR-based English programs, placement testing and a complete student portal.",
      },
    ],
  }),
  component: HomePage,
});

const whyIcons = [GraduationCap, Layers, BadgeCheck, Users, MessageSquareHeart, MonitorPlay];

function HomePage() {
  const { t, pick } = useI18n();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="navy-band relative overflow-hidden">
        <div className="hero-glow absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <Badge className="mb-5 gap-1.5 bg-primary/15 text-primary hover:bg-primary/15">
              <Sparkles className="size-3.5" />
              {t("brand.tagline")}
            </Badge>
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              {t("home.hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75">
              {t("home.hero.sub")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/programs">
                  {t("home.hero.cta1")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Link to="/find-your-level">{t("home.hero.cta2")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Link to="/login">{t("home.hero.cta3")}</Link>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { v: `${programs.length}`, l: t("home.hero.stat1") },
                { v: "A1–C1", l: t("home.hero.stat2") },
                { v: "96%", l: t("home.hero.stat3") },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-bold text-primary sm:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-xs text-navy-foreground/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-navy-foreground/12 bg-navy-foreground/[0.06] p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {t("programs.title")}
              </p>
              <ul className="mt-4 divide-y divide-navy-foreground/10">
                {programs.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/programs/$slug"
                      params={{ slug: p.slug }}
                      className="group flex items-center justify-between gap-3 py-3.5"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-navy-foreground">
                          {pick(p.name)}
                        </span>
                        <span className="block text-xs text-navy-foreground/55">{pick(p.tagline)}</span>
                      </span>
                      <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="ghost"
                className="mt-3 w-full text-primary hover:bg-navy-foreground/10 hover:text-primary"
              >
                <Link to="/programs">{t("programs.viewAll")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Langport */}
      <Section>
        <SectionHeading title={t("why.title")} subtitle={t("why.sub")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n, i) => {
            const Icon = whyIcons[i] ?? BookOpen;
            return (
              <Card key={n} className="border-border/70 shadow-none transition-shadow hover:shadow-card">
                <CardContent className="p-6">
                  <span className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold">{t(`why.${n}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`why.${n}.body`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Programs */}
      <Section tone="muted">
        <SectionHeading title={t("programs.title")} subtitle={t("programs.sub")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.slug} className="flex flex-col border-border/70 bg-card shadow-none">
              <CardContent className="flex flex-1 flex-col p-6">
                <Badge variant="secondary" className="w-fit">{p.recommendedLevel}</Badge>
                <h3 className="mt-4 text-base font-semibold">{pick(p.name)}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{pick(p.tagline)}</p>
                <Link
                  to="/programs/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {t("programs.explore")}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Levels */}
      <Section>
        <SectionHeading title={t("level.title")} subtitle={t("level.sub")} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {levels.map((l) => (
            <div key={l.code} className="rounded-2xl border border-border/70 p-5">
              <span className="text-lg font-bold text-primary">{l.code}</span>
              <p className="mt-1 text-sm font-semibold">{pick(l.name)}</p>
              <p className="mt-2 text-xs text-muted-foreground">{pick(l.description)}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link to="/find-your-level">{t("level.start")}</Link>
          </Button>
        </div>
      </Section>

      {/* Two paths */}
      <Section tone="muted">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="border-border/70 shadow-none">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold">{t("paths.new.title")}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t("paths.new.body")}</p>
              <Button asChild className="mt-6">
                <Link to="/how-it-works">{t("paths.new.cta")}</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="navy-band border-0 shadow-none">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold">{t("paths.student.title")}</h3>
              <p className="mt-3 text-sm text-navy-foreground/75">{t("paths.student.body")}</p>
              <Button asChild className="mt-6">
                <Link to="/login">{t("paths.student.cta")}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="rounded-3xl border border-border/70 bg-surface px-6 py-14 text-center">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold sm:text-3xl">{t("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("cta.body")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/register">{t("nav.join")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">{t("nav.contact")}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
