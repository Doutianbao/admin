"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { Achievement } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

interface ProjectCardProps {
    achievement: Achievement;
    index: number;
    onViewDetails: (achievement: Achievement) => void;
}

export function ProjectCard({ achievement, index, onViewDetails }: ProjectCardProps) {
    const { t, language } = useLanguage();
    const tags = achievement.tags[language];
    const displayedTags = tags.slice(0, 3);
    const remainingTags = tags.length - 3;

    return (
        <Card
            className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-border/80 rounded-3xl bg-card/50 backdrop-blur-sm ${achievement.highlight ? "ring-2 ring-accent/30" : ""
                } ${achievement.upcoming ? "ring-2 ring-primary/30" : ""}`}
            style={{
                animationDelay: `${index * 150}ms`,
            }}
        >
            {/* 渐变背景 */}
            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />

            {/* 特殊标记 - Apple 风格 */}
            {achievement.highlight && (
                <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-accent text-accent-foreground shadow-sm rounded-full">
                        ⭐ Oral
                    </Badge>
                </div>
            )}
            {achievement.upcoming && (
                <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-primary text-primary-foreground shadow-sm rounded-full">
                        🆕 New
                    </Badge>
                </div>
            )}

            <CardHeader className="relative space-y-3 p-6 z-10">
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-medium rounded-full">
                        {achievement.conference}
                    </Badge>
                    <Badge variant="secondary" className="text-xs rounded-full">
                        {achievement.total[language]}
                    </Badge>
                </div>
                <CardTitle className="text-xl font-serif font-bold group-hover:text-primary transition-colors leading-tight">
                    {achievement.title[language]}
                </CardTitle>
            </CardHeader>

            <CardContent className="relative space-y-4 p-6 pt-0 z-10">
                {/* 成果列表 */}
                <div className="space-y-2">
                    {achievement.items[language].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground/90">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                            <span className="font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {displayedTags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                            {tag}
                        </Badge>
                    ))}
                    {remainingTags > 0 && (
                        <Badge variant="outline" className="text-xs rounded-full bg-background/50">
                            +{remainingTags}
                        </Badge>
                    )}
                </div>

                {/* 查看链接 - Apple 风格 */}
                <button
                    onClick={() => onViewDetails(achievement)}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium group/link cursor-pointer transition-all duration-300 hover:translate-x-1"
                >
                    <FileText className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    {t("projects.view_details")}
                </button>
            </CardContent>
        </Card>
    );
}
