import { Button } from "@/components/ui/Button";
import { Hand } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-background-card-dark flex flex-col gap-6 rounded-2xl p-6">
      <h1>
        <span className="block text-5xl font-bold leading-tight">
          Transformez vos idées en expériences digitales
        </span>{" "}
        <div className="flex justify-between gap-6">
          <span className="block text-5xl font-bold leading-tight">
            {" "}
            percutantes.
          </span>
          <Button variant="primary" className="self-end">
            <span className="flex items-center gap-2">
              Embauchez-moi <Hand className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </h1>
    </div>
  );
}
