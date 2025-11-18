"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FileText, Award, BookOpen, TrendingUp, ExternalLink, Calendar } from "lucide-react";

export function Stats() {
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);

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

  const stats = [
    {
      icon: FileText,
      value: 19,
      suffix: "",
      label: "会议成果",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: BookOpen,
      value: 8,
      suffix: "",
      label: "全文发表",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Award,
      value: 6,
      suffix: "",
      label: "顶级会议",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: TrendingUp,
      value: 4,
      suffix: "",
      label: "年度跨度",
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
                <DialogTitle className="text-2xl">全文发表</DialogTitle>
                <DialogDescription className="text-base mt-1">
                  8 篇高质量学术论文发表于国际期刊
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
                    {pub.tags.map((tag) => (
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
                    查看全文
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
