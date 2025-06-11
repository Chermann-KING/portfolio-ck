"use client";

import { Badge } from "@/components/ui/Badge";

type SkillsSectionProps = {
  skills?: Record<string, string[]>;
};

const categoryStyles = {
  "Front-end": {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    hover: "hover:bg-emerald-500/20",
    icon: "🌐",
  },
  "Back-end": {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    hover: "hover:bg-blue-500/20",
    icon: "⚙️",
  },
  "DevOps & Outils": {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    hover: "hover:bg-purple-500/20",
    icon: "🛠️",
  },
};

export function SkillsSection({ skills = {} }: SkillsSectionProps) {
  const skillsData = skills || {};
  const categories = Object.keys(skillsData);

  if (categories.length === 0) {
    console.warn("No skill categories found");
    return null;
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">Compétences</h2>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:gap-3">
        {categories.map((category) => {
          const skillsList = skillsData[category] || [];

          const style = categoryStyles[
            category as keyof typeof categoryStyles
          ] || {
            bg: "bg-gray-500/10",
            text: "text-gray-500",
            hover: "hover:bg-gray-500/20",
            icon: "💡",
          };

          return (
            <div
              key={category}
              className={`p-2 sm:p-3 transition-colors rounded-xl sm:rounded-2xl duration-200 ${style.hover}`}
            >
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-sm sm:text-base font-medium ${style.text}`}
                  >
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {Array.isArray(skillsList) &&
                    skillsList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="default"
                        className={`${style.text} border-current text-xs py-0.5 px-1.5 sm:px-2`}
                      >
                        {skill}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
