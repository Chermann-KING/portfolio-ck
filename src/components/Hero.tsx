import { Button } from "@/components/ui/Button";
import { Hand } from "lucide-react";
import { Card } from "./ui/Card";
import Link from "next/link";
import { AnimatedCard } from "@/lib/AnimatedCard";

export function Hero() {
  return (
    <AnimatedCard direction="up" delay={150}>
      <Card className="relative flex justify-between items-center gap-4 text-xl">
        {/* <div className="relative flex justify-between gap-6"> */}
        <h1 className="block text-5xl font-bold leading-tight text-text-primary dark:text-white">
          <span>Transformez vos idées en expériences digitales</span>{" "}
          <span className="block"> percutantes.</span>
        </h1>
        <Button
          variant="primary"
          className="absolute bottom-6 right-6 animate-bounce"
          asChild
        >
          <Link href="/contact">
            <span className="flex items-center gap-2">
              Embauchez-moi <Hand className="w-5 h-5" />
            </span>
          </Link>
        </Button>
        {/* </div> */}
      </Card>
    </AnimatedCard>
  );
}
