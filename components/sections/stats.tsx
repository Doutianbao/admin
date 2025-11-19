"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FileText, Award, BookOpen, TrendingUp, ExternalLink, Calendar } from "lucide-react";

import { useLanguage } from "@/lib/language-context";
import { publications } from "@/lib/data";

export function Stats() {
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: FileText,
      value: 19,
      suffix: "",
      label: t("hero.conferences"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: BookOpen,
      value: 8,
      suffix: "",
      label: t("hero.publications"),
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Award,
      value: 6,
      suffix: "",
      label: t("stats.top_conferences"),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: TrendingUp,
      value: 4,
      suffix: "",
      label: t("stats.years"),
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPublicationsStat = stat.label === "全文发表";
          return (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              Icon={Icon}
              onDoubleClick={isPublicationsStat ? () => setIsPublicationsOpen(true) : undefined}
            />
          );
        })}
      </div>

      {/* 全文发表弹窗 */}
      <Dialog open={isPublicationsOpen} onOpenChange={setIsPublicationsOpen}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
          <DialogHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <DialogTitle className="text-2xl">{t("publications.title")}</DialogTitle>
                <DialogDescription className="text-base mt-1">
                  {t("publications.subtitle")}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {publications.map((pub, index) => (
              <a
                key={index}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="space-y-3">
                  {/* 期刊和年份 */}
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="font-semibold">
                      {pub.journal}
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {pub.year}
                    </Badge>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-sm font-medium leading-relaxed group-hover:text-primary transition-colors line-clamp-3">
                    {pub.title}
                  </h3>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags[language].map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* 查看链接 */}
                  <div className="flex items-center gap-2 text-xs text-primary font-medium pt-2">
                    <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    {t("publications.view")}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function StatCard({
  stat,
  index,
  Icon,
  onDoubleClick,
}: {
  stat: any;
  index: number;
  Icon: any;
  onDoubleClick?: () => void;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                setCount(stat.value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);

            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`stat-${index}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [hasAnimated, stat.value, index]);

  return (
    <Card
      id={`stat-${index}`}
      onDoubleClick={onDoubleClick}
      className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${onDoubleClick ? 'cursor-pointer' : ''}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <CardContent className="p-6 text-center space-y-3">
        <div className={`${stat.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
          <Icon className={`w-6 h-6 ${stat.color}`} />
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-bold">
            {count}
            {stat.suffix}
          </p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          {onDoubleClick && (
            <p className="text-xs text-muted-foreground/60 mt-1">双击查看详情</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
