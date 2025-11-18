"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Microscope, FileSpreadsheet } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.clinical"),
      icon: Microscope,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: t("skills.clinical_design"), level: 95 },
        { name: t("skills.protocol"), level: 92 },
        { name: t("skills.ethics"), level: 88 },
        { name: t("skills.data_mgmt"), level: 90 },
        { name: t("skills.quality"), level: 85 },
        { name: t("skills.monitoring"), level: 82 },
      ],
    },
    {
      title: t("skills.statistics"),
      icon: BarChart3,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: t("skills.r_lang"), level: 92 },
        { name: t("skills.python"), level: 88 },
        { name: t("skills.sas"), level: 85 },
        { name: t("skills.spss"), level: 90 },
        { name: t("skills.survival"), level: 87 },
        { name: t("skills.meta"), level: 83 },
      ],
    },
    {
      title: t("skills.academic"),
      icon: FileSpreadsheet,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: t("skills.poster"), level: 95 },
        { name: t("skills.publication"), level: 90 },
        { name: t("skills.visualization"), level: 92 },
        { name: t("skills.ppt"), level: 88 },
        { name: t("skills.excel"), level: 93 },
        { name: t("skills.literature"), level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="container mx-auto px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* 标题 - Apple 风格 */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
            {t("skills.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* 技能分类卡片 - Apple 风格 */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="group border border-border/50 hover:border-border transition-all duration-500 hover:shadow-lg rounded-3xl overflow-hidden bg-card/50 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-8 space-y-6">
                  {/* 图标和标题 */}
                  <div className="space-y-4">
                    <div className={`${category.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* 技能进度条 */}
                  <div className="space-y-5">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: { name: string; level: number } }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, 200);
    return () => clearTimeout(timer);
  }, [skill.level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-muted-foreground font-light">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
