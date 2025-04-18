import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-text transition-colors mb-6"
    >
      <ArrowLeft className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};
