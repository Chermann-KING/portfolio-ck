"use client";

import { useState } from "react";
import { classNames } from "@/lib/utils";
import ResumeContent from "./ResumeContent";
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
            onClick={() => setActiveTab("resume")}
            className={classNames(
              "text-xl transition-colors hover:text-text",
              activeTab === "resume"
                ? "text-text font-semibold"
                : "text-muted-foreground"
            )}
          >
            Curriculum vitae
          </button>
        </div>

        <div className="transition-all duration-300">
          {activeTab === "about" ? (
            <div className="space-y-4">
              <p className="text-body leading-relaxed">{aboutContent}</p>
            </div>
          ) : (
            <ResumeContent />
          )}
        </div>
      </div>
    </Card>
  );
};
