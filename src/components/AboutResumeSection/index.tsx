"use client";

import { useState } from "react";
import { classNames } from "@/lib/utils";
import { Card } from "../ui/Card";

type Tab = "about" | "resume";

interface AboutResumeSectionProps {
  aboutContent: string;
}

export const AboutResumeSection = ({
  aboutContent,
}: AboutResumeSectionProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  const handleResumeClick = () => {
    // Déclencher uniquement le téléchargement du PDF
    const link = document.createElement("a");
    link.href = "/cv-hermann-moussavou.pdf";
    link.download = "CV-Hermann-MOUSSAVOU.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setActiveTab("about")}
            className={classNames(
              "text-xl font-semibold transition-colors",
              activeTab === "about" ? "text-text" : "text-muted-foreground"
            )}
          >
            À propos de moi
          </button>
          <button
            onClick={handleResumeClick}
            className="text-xl transition-colors hover:text-primary text-muted-foreground font-medium"
          >
            Curriculum vitae
          </button>
        </div>

        <div className="transition-all duration-300">
          <div className="space-y-4">
            <p className="text-body leading-relaxed">{aboutContent}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
