import { Button } from "@/components/ui/Button";
import { Hand } from "lucide-react";

export function Hero() {
  return (
    // <header className="flex flex-col gap-6 border-[2px] borde-yellow-500">
    //   <h1 className="text-4xl font-bold leading-tight max-w-lg">
    //     Transformez vos idées en expériences digitales percutantes.
    //   </h1>
    //   <Button variant="primary" className="self-start">
    //     <span className="flex items-center gap-2">
    //       Embauchez-moi <Hand className="w-5 h-5" />
    //     </span>
    //   </Button>
    // </header>
    <div className="bg-background-card flex flex-col gap-6  rounded-2xl p-6">
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
