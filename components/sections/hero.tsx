"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Video, BookOpen, ExternalLink, Calendar, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { publications } from "@/lib/data";
import { toast } from "sonner";

export function Hero() {
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center space-y-12 animate-fade-in-up">
          {/* 主标题 - Apple 风格 */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-foreground leading-none">
              {t("hero.title")}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground tracking-wide">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* 职位描述 */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium text-foreground">
              {t("hero.position")}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("hero.degree")}
            </p>
          </div>

          {/* 核心数据 - 极简展示 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto py-8">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-semibold text-primary">19</p>
              <p className="text-sm text-muted-foreground">{t("hero.conferences")}</p>
            </div>
            <div
              className="space-y-2 cursor-pointer group"
              onDoubleClick={() => setIsPublicationsOpen(true)}
            >
              <p className="text-4xl md:text-5xl font-semibold text-primary group-hover:scale-105 transition-transform">8</p>
              <p className="text-sm text-muted-foreground">{t("hero.publications")}</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-semibold text-primary">4+</p>
              <p className="text-sm text-muted-foreground">{t("hero.breast_exp")}</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-semibold text-primary">1+</p>
              <p className="text-sm text-muted-foreground">{t("hero.gi_exp")}</p>
            </div>
          </div>

          {/* 专业领域 - 简洁卡片 */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-8 rounded-3xl bg-secondary/50 backdrop-blur-sm border border-border/50 text-left space-y-4 hover:bg-secondary/70 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground">{t("hero.research_title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("hero.research_desc")}
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary/50 backdrop-blur-sm border border-border/50 text-left space-y-4 hover:bg-secondary/70 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground">{t("hero.coverage_title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("hero.coverage_desc")}
              </p>
            </div>
          </div>

          {/* 联系方式 - Apple 风格按钮 */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              variant="default"
              size="lg"
              asChild
              className="rounded-full px-8 h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="mailto:931928708@163.com" className="gap-2">
                <Mail className="w-5 h-5" />
                {t("hero.contact")}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full px-8 h-12 text-base font-medium hover:bg-secondary transition-all duration-300"
            >
              <a
                href="https://github.com/doutianbao"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full px-8 h-12 text-base font-medium hover:bg-secondary transition-all duration-300"
            >
              <a
                href="https://space.bilibili.com/1251348458"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Video className="w-5 h-5" />
                哔哩哔哩
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base font-medium hover:bg-secondary transition-all duration-300 gap-2"
              onClick={() => {
                navigator.clipboard.writeText('hbykdx');
                toast.success(t("hero.wechat_copied"));
              }}
            >
              <MessageCircle className="w-5 h-5" />
              {t("hero.wechat")}
            </Button>
          </div>
        </div>
      </div>

      {/* 全文发表弹窗 - Apple 风格 */}
      <Dialog open={isPublicationsOpen} onOpenChange={setIsPublicationsOpen}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto rounded-3xl">
          <DialogHeader className="space-y-4 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-semibold">{t("publications.title")}</DialogTitle>
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
                className="group block p-6 rounded-2xl border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="space-y-4">
                  {/* 期刊和年份 */}
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="font-semibold rounded-full">
                      {pub.journal}
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1 rounded-full">
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
                    {pub.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs rounded-full"
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
