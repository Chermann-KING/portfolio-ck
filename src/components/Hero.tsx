import { Button } from "@/components/ui/Button";
import { Hand } from "lucide-react";
import { Card } from "./ui/Card";
import Link from "next/link";
import { AnimatedCard } from "@/lib/AnimatedCard";

export function Hero() {
  return (
    <AnimatedCard direction="up" delay={150}>
      <Card className="min-h-[140px] sm:min-h-[160px] xl:min-h-[180px] flex flex-col justify-between gap-4 p-4 sm:p-6 lg:p-8">
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight text-foreground dark:text-white">
          <span className="block">Vous avez un projet digital.</span>
          <span className="block">
            Je m&apos;occupe du reste —{" "}
            <span className="font-normal text-muted-foreground">du premier écran jusqu&apos;au serveur.</span>
          </span>
        </h1>
        <div className="flex justify-end">
          <Button
            variant="primary"
            className="animate-bounce text-xs sm:text-sm lg:text-base px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3"
            asChild
          >
            <Link href="/contact">
              <span className="flex items-center gap-1 sm:gap-2">
                Discutons-en
                <Hand className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </span>
            </Link>
          </Button>
        </div>
      </Card>
    </AnimatedCard>
  );
}
