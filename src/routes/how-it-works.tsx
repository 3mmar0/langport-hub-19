import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SiteLayout } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Join a Langport English Program" },
      {
        name: "description",
        content:
          "Four steps to start at Langport: choose a program, find your level, register and pay, then join live classes and track progress in your portal.",
      },
      { property: "og:title", content: "How Langport Works" },
      {
        property: "og:description",
        content: "From placement test to live classes — the Langport enrolment journey in four steps.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  const { t } = useI18n();
  const steps = [1, 2, 3, 4];

  return (
    <SiteLayout>
      <PageHero eyebrow={t("nav.howItWorks")} title={t("how.title")} subtitle={t("how.sub")} />
      <Section>
        <ol className="grid gap-5 lg:grid-cols-2">
          {steps.map((n) => (
            <li key={n} className="rounded-3xl border border-border/70 p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-navy-foreground">
                {n}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{t(`how.${n}.title`)}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t(`how.${n}.body`)}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-3xl bg-surface p-8">
          <h2 className="text-xl font-bold">{t("level.title")}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["level.step1", "level.step2", "level.step3", "level.step4"].map((k, i) => (
              <div key={k} className="rounded-2xl border border-border/70 bg-card p-5">
                <span className="text-xs font-semibold text-primary">0{i + 1}</span>
                <p className="mt-2 text-sm font-medium">{t(k)}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="gap-2">
              <Link to="/find-your-level">
                {t("level.start")}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/register">{t("nav.join")}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
