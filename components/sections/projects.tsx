"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { conferenceTimeline, Achievement } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { ConferenceDialog } from "./conference-dialog";

export function Projects() {
  const [selectedConference, setSelectedConference] = useState<Achievement | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useLanguage();

  const handleViewDetails = (achievement: Achievement) => {
    setSelectedConference(achievement);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="container mx-auto px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* 标题 - Apple 风格 */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
            {t("projects.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* 现代化时间线 */}
        <div className="max-w-6xl mx-auto">
          {conferenceTimeline.map((yearData, yearIndex) => (
            <div key={yearData.year} className="relative mb-12 last:mb-0">
              {/* 年份标题 - Apple 风格 */}
              <div className="flex items-center gap-6 mb-8">
                <div className={`relative ${yearData.yearBg} text-white px-6 py-3 rounded-2xl shadow-sm`}>
                  <div className="text-3xl font-semibold">{yearData.year}</div>
                </div>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              {/* 成果卡片 */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 ml-0 md:ml-8">
                {yearData.achievements.map((achievement, index) => (
                  <ProjectCard
                    key={achievement.conference}
                    achievement={achievement}
                    index={index}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>

              {/* 年份连接线 - Apple 风格 */}
              {yearIndex < conferenceTimeline.length - 1 && (
                <div className="flex items-center justify-center my-12">
                  <div className="w-px h-12 bg-gradient-to-b from-border via-border/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 弹窗 - Apple 风格 */}
      <ConferenceDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        conference={selectedConference}
      />
    </section>
  );
}

