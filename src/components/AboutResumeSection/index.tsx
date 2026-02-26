"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <Card className="p-4 sm:p-6">
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <button
            onClick={() => setActiveTab("about")}
            className={classNames(
              "text-lg sm:text-xl font-semibold transition-colors",
              activeTab === "about" ? "text-text" : "text-muted-foreground",
            )}
          >
            À propos de moi
          </button>
          <Link
            href="/resume"
            className="text-base sm:text-xl transition-colors hover:text-primary text-muted-foreground font-medium"
          >
            <span className="hidden sm:inline">Curriculum vitae</span>
            <span className="sm:hidden">CV</span>
          </Link>
        </div>

        <div className="transition-all duration-300">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base leading-relaxed">
              {aboutContent}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
