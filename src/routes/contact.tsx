import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Section, SiteLayout } from "@/components/site/SiteLayout";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Langport — Talk to Our Advisors" },
      {
        name: "description",
        content:
          "Reach the Langport team about programs, placement testing, schedules and payments. Send a message or call our advisors directly.",
      },
      { property: "og:title", content: "Contact Langport" },
      { property: "og:description", content: "Questions about programs or levels? Talk to a Langport advisor." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero eyebrow={t("nav.contact")} title={t("contact.title")} subtitle={t("contact.sub")} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="border-border/70 shadow-none">
            <CardContent className="p-7">
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success(t("contact.sent"));
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <div className="grid gap-2">
                  <Label htmlFor="c-name">{t("contact.name")}</Label>
                  <Input id="c-name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-email">{t("reg.email")}</Label>
                  <Input id="c-email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-mobile">{t("reg.mobile")}</Label>
                  <Input id="c-mobile" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-msg">{t("portal.message")}</Label>
                  <Textarea id="c-msg" rows={5} required />
                </div>
                <Button type="submit" className="w-fit">
                  {t("contact.send")}
                </Button>
                {sent && <p className="text-sm text-success">{t("contact.sent")}</p>}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {[
              { icon: Phone, label: "+20 100 000 0000" },
              { icon: Mail, label: "hello@langport.com" },
              { icon: MapPin, label: "Cairo, Egypt" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-border/70 p-5">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="size-4" />
                </span>
                <span className="text-sm font-medium">{c.label}</span>
              </div>
            ))}
            <div className="navy-band rounded-2xl p-6">
              <p className="text-sm font-semibold">{t("portal.workingHours")}</p>
              <p className="mt-2 text-sm text-navy-foreground/70">Sat – Thu · 10:00 – 21:00</p>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
