"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Video, BookOpen, ExternalLink, Calendar, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const { t } = useLanguage();

  const publications = [
    {
      title: "Neoadjuvant pyrotinib plus nab-paclitaxel, doxorubicin, and cyclophosphamide for HER2-positive locally advanced breast cancer: a retrospective case-series study",
      journal: "Gland Surgery",
      year: "2022",
      url: "http://gs.amegroups.org/article/view/86303/html",
      tags: ["HER2阳性乳腺癌", "新辅助治疗", "Pyrotinib"],
    },
    {
      title: "Cardiotoxicity monitoring of pyrotinib in combination with nab-paclitaxel, doxorubicin, and cyclophosphamide in HER2-positive breast cancer: a single-armed clinical trial",
      journal: "Gland Surgery",
      year: "2022",
      url: "https://gs.amegroups.org/article/view/93437/html",
      tags: ["心脏毒性", "HER2阳性乳腺癌", "安全性监测"],
    },
    {
      title: "The efficacy and safety of using pyrotinib combined with capecitabine as neoadjuvant therapy in elderly patients with HER2-positive breast cancer: a single-arm prospective clinical trial",
      journal: "Gland Surgery",
      year: "2023",
      url: "https://gs.amegroups.org/article/view/110610/html",
      tags: ["老年患者", "HER2阳性乳腺癌", "新辅助治疗"],
    },
    {
      title: "Real‐world data for the renal safety of abemaciclib combined with bisphosphonate in HR+/HER2− advanced breast cancer",
      journal: "Thoracic Cancer",
      year: "2022",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/1759-7714.14715",
      tags: ["真实世界研究", "肾脏安全性", "CDK4/6抑制剂"],
    },
    {
      title: "Apatinib plus etoposide in pretreated patients with advanced triple-negative breast cancer: a phase II trial",
      journal: "BMC Cancer",
      year: "2023",
      url: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-023-10768-8",
      tags: ["三阴性乳腺癌", "II期临床试验", "Apatinib"],
    },
    {
      title: "Combination Therapy of Pyrotinib and Metronomic Vinorelbine in HER2+ Advanced Breast Cancer after Trastuzumab Failure (PROVE): A Prospective Phase 2 Study",
      journal: "Cancer Research and Treatment",
      year: "2025",
      url: "https://e-crt.org/journal/view.php?doi=10.4143/crt.2024.340",
      tags: ["HER2阳性乳腺癌", "II期临床试验", "赫赛汀耐药"],
    },
    {
      title: "Dalpiciclib Plus fulvestrant and pyrotinib in HR+/HER2-low advanced breast cancer after progression on CDK4/6 Inhibition (DapPLE-HER): a bayesian optimal phase II study",
      journal: "International Journal of Surgery",
      year: "2025",
      url: "https://journals.lww.com/international-journal-of-surgery/abstract/9900/dalpiciclib_plus_fulvestrant_and_pyrotinib_in.3261.aspx",
      tags: ["HER2-low", "CDK4/6抑制剂", "贝叶斯设计"],
    },
    {
      title: "Clinical efficacy and therapy response prediction of neoadjuvant dalpiciclib plus letrozole in postmenopausal patients with HR+/HER2- stage II-III breast cancer (DARLING 01): a single-arm, open-label, exploratory study",
      journal: "Breast Cancer Research",
      year: "2025",
      url: "https://breast-cancer-research.biomedcentral.com/articles/10.1186/s13058-025-01976-0",
      tags: ["CDK4/6抑制剂", "新辅助治疗", "疗效预测"],
    },
  ];

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
                alert(t("hero.wechat_copied"));
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
