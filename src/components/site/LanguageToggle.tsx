import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle({ variant = "ghost" }: { variant?: "ghost" | "outline" }) {
  const { toggleLang, t } = useI18n();
  return (
    <Button variant={variant} size="sm" onClick={toggleLang} className="gap-2">
      <Languages className="size-4" />
      {t("lang.switch")}
    </Button>
  );
}
