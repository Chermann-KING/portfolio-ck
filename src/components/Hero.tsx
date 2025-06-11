import { Button } from "@/components/ui/Button";
import { Hand } from "lucide-react";
import { Card } from "./ui/Card";
import Link from "next/link";
import { AnimatedCard } from "@/lib/AnimatedCard";

export function Hero() {
  return (
    <AnimatedCard direction="up" delay={150}>
      <Card className="min-h-[140px] sm:min-h-[160px] xl:h-[180px] xl:items-start relative flex justify-between items-center gap-4 text-xl p-4 sm:p-6 lg:p-8">
        <h1 className="block text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight text-text-primary dark:text-white pr-20 sm:pr-24">
          <span>Transformez vos idées en expériences digitales</span>{" "}
          <span className="block"> percutantes.</span>
        </h1>
        <Button
          variant="primary"
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 animate-bounce text-xs sm:text-sm lg:text-base px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3"
          asChild
        >
          <Link href="/contact">
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="hidden xs:inline">Discutons-en</span>
              <span className="xs:hidden">Discutons-en</span>
              <Hand className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </span>
          </Link>
        </Button>
      </Card>
    </AnimatedCard>
  );
}
