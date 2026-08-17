import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Clock, GraduationCap, ListChecks, Package, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero, Section, SiteLayout } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";
import { programs } from "@/lib/data/programs";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = programs.find((p) => p.slug === params.slug);
    if (!program) throw notFound();
    return { slug: program.slug, name: program.name, tagline: program.tagline };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Program unavailable — Langport" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.name.en} — Langport English Program`;
    return {
      meta: [
        { title },
        { name: "description", content: `${loaderData.tagline.en} Outcomes, content, schedule and packages for the ${loaderData.name.en} program at Langport.` },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.tagline.en },
      ],
    };
  },
  component: ProgramDetailPage,
  notFoundComponent: ProgramNotFound,
});

function ProgramNotFound() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <Section className="text-center">
        <h1 className="text-2xl font-bold">{t("common.notFound")}</h1>
        <Button asChild className="mt-6">
          <Link to="/programs">{t("programs.viewAll")}</Link>
        </Button>
      </Section>
    </SiteLayout>
  );
}

function ProgramDetailPage() {
  const { slug } = Route.useParams();
  const { t, pick } = useI18n();
  const program = programs.find((p) => p.slug === slug);
  if (!program) return <ProgramNotFound />;

  const facts = [
    { icon: GraduationCap, label: t("programs.recommendedLevel"), value: program.recommendedLevel },
    { icon: Clock, label: t("programs.duration"), value: pick(program.duration) },
    { icon: CalendarDays, label: t("programs.schedule"), value: pick(program.schedule) },
    { icon: Package, label: t("programs.price"), value: pick(program.price) },
  ];

  const lists = [
    { icon: ListChecks, title: t("programs.outcomes"), items: pick(program.outcomes) },
    { icon: Target, title: t("programs.content"), items: pick(program.content) },
    { icon: CheckCircle2, title: t("programs.included"), items: pick(program.included) },
  ];

  return (
    <SiteLayout>
      <PageHero eyebrow={t("nav.programs")} title={pick(program.name)} subtitle={pick(program.tagline)}>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/register" search={{ program: program.slug }}>
              {program.cta === "register" ? t("programs.register") : t("programs.contactUs")}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
          >
            <Link to="/find-your-level">{t("level.start")}</Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-border/70 p-5">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <f.icon className="size-4" />
              </span>
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{f.label}</p>
              <p className="mt-1 text-sm font-semibold">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card className="border-border/70 shadow-none">
            <CardContent className="p-7">
              <h2 className="text-lg font-semibold">{t("programs.whoFor")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{pick(program.whoFor)}</p>
            </CardContent>
          </Card>
          <Card className="border-border/70 shadow-none">
            <CardContent className="p-7">
              <h2 className="text-lg font-semibold">{t("programs.goal")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{pick(program.goal)}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {lists.map((l) => (
            <Card key={l.title} className="border-border/70 shadow-none">
              <CardContent className="p-7">
                <div className="flex items-center gap-2">
                  <l.icon className="size-4 text-primary" />
                  <h2 className="text-base font-semibold">{l.title}</h2>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {l.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-surface p-8">
          <h2 className="text-lg font-semibold">{t("programs.howToJoin")}</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{pick(program.howToJoin)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/register" search={{ program: program.slug }}>{t("programs.register")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">{t("programs.contactUs")}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-base font-semibold">{t("programs.viewAll")}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {programs
              .filter((p) => p.slug !== program.slug)
              .map((p) => (
                <Link key={p.slug} to="/programs/$slug" params={{ slug: p.slug }}>
                  <Badge variant="secondary" className="cursor-pointer px-3 py-1.5 text-xs font-medium">
                    {pick(p.name)}
                  </Badge>
                </Link>
              ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
