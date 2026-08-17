import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero, Section, SiteLayout } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";
import { programs } from "@/lib/data/programs";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "English Programs at Langport — General, Talkie, IELTS & More" },
      {
        name: "description",
        content:
          "Explore Langport English programs: General English, conversation and fluency, exam preparation, business English, kids and teens, and private one-to-one tracks.",
      },
      { property: "og:title", content: "Langport English Programs" },
      {
        property: "og:description",
        content: "CEFR-based tracks with clear outcomes, schedules and packages.",
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const { t, pick } = useI18n();

  return (
    <SiteLayout>
      <PageHero eyebrow={t("nav.programs")} title={t("programs.title")} subtitle={t("programs.sub")} />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.slug} className="flex flex-col border-border/70 shadow-none transition-shadow hover:shadow-card">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary">{p.recommendedLevel}</Badge>
                  <span className="text-xs text-muted-foreground">{pick(p.duration)}</span>
                </div>
                <h2 className="mt-4 text-base font-semibold">{pick(p.name)}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{pick(p.tagline)}</p>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">{pick(p.whoFor)}</p>
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
    </SiteLayout>
  );
}
