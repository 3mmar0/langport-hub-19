import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, Section, SiteLayout } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";
import { instructors } from "@/lib/data/seed";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Langport — Our Mission, Approach & Team" },
      {
        name: "description",
        content:
          "Langport Educational Services combines certified instructors, CEFR-based curricula and continuous feedback to help learners speak English with confidence.",
      },
      { property: "og:title", content: "About Langport Educational Services" },
      {
        property: "og:description",
        content: "Our mission, teaching approach and the team behind Langport English programs.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const blocks = [
    { icon: Compass, title: t("about.mission"), body: t("about.mission.body") },
    { icon: HeartHandshake, title: t("about.approach"), body: t("about.approach.body") },
    { icon: Users, title: t("about.team"), body: t("about.team.body") },
  ];

  return (
    <SiteLayout>
      <PageHero eyebrow={t("brand.tagline")} title={t("about.title")} subtitle={t("about.sub")} />
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {blocks.map((b) => (
            <Card key={b.title} className="border-border/70 shadow-none">
              <CardContent className="p-7">
                <span className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <b.icon className="size-5" />
                </span>
                <h2 className="text-lg font-semibold">{b.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <h2 className="text-2xl font-bold">{t("admin.instructors")}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((name) => (
            <div key={name} className="rounded-2xl border border-border/70 bg-card p-6 text-center">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-navy-foreground">
                {name.split(" ").map((p) => p[0]).join("")}
              </span>
              <p className="mt-4 text-sm font-semibold">{name}</p>
              <p className="mt-1 text-xs text-muted-foreground">CEFR / TEFL certified</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/programs">{t("programs.viewAll")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">{t("nav.contact")}</Link>
          </Button>
        </div>
      </Section>
    </SiteLayout>
  );
}
