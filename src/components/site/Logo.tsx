import { Link } from "@tanstack/react-router";
import logo from "@/assets/langport-logo.png.asset.json";

export function Logo({ className = "h-9", withLink = true }: { className?: string; withLink?: boolean }) {
  const img = (
    <img
      src={logo.url}
      alt="Langport Educational Services"
      className={`${className} w-auto rounded-md`}
      loading="eager"
    />
  );
  if (!withLink) return img;
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Langport home">
      {img}
    </Link>
  );
}
