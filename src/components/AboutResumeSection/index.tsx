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
              activeTab === "about" ? "text-white" : "text-gray-400"
            )}
          >
            A propos de moi
          </button>
          <button
            onClick={() => setActiveTab("resume")}
            className={classNames(
              "text-xl text-gray-400 hover:text-gray-300 transition-colors",
              activeTab === "resume"
                ? "text-white font-semibold"
                : "text-gray-400"
            )}
          >
            Curriculum vitae
          </button>
        </div>

        <div className="transition-all duration-300">
          {activeTab === "about" ? (
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">{aboutContent}</p>
            </div>
          ) : (
            <ResumeContent />
          )}
        </div>
      </div>
    </Card>
  );
};
