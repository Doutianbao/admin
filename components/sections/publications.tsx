"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";

export function Publications() {
  const publications = [
    {
      title: "Neoadjuvant pyrotinib plus nab-paclitaxel, doxorubicin, and cyclophosphamide for HER2-positive locally advanced breast cancer: a retrospective case-series study",
      journal: "Gland Surgery",
      year: "2023",
      url: "http://gs.amegroups.org/article/view/86303/html",
      tags: ["HER2阳性乳腺癌", "新辅助治疗", "Pyrotinib"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Cardiotoxicity monitoring of pyrotinib in combination with nab-paclitaxel, doxorubicin, and cyclophosphamide in HER2-positive breast cancer: a single-armed clinical trial",
      journal: "Gland Surgery",
      year: "2023",
      url: "https://gs.amegroups.org/article/view/93437/html",
      tags: ["心脏毒性", "HER2阳性乳腺癌", "安全性监测"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "The efficacy and safety of using pyrotinib combined with capecitabine as neoadjuvant therapy in elderly patients with HER2-positive breast cancer: a single-arm prospective clinical trial",
      journal: "Gland Surgery",
      year: "2024",
      url: "https://gs.amegroups.org/article/view/110610/html",
      tags: ["老年患者", "HER2阳性乳腺癌", "新辅助治疗"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Real‐world data for the renal safety of abemaciclib combined with bisphosphonate in HR+/HER2− advanced breast cancer",
      journal: "Thoracic Cancer",
      year: "2023",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/1759-7714.14715",
      tags: ["真实世界研究", "肾脏安全性", "CDK4/6抑制剂"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Apatinib plus etoposide in pretreated patients with advanced triple-negative breast cancer: a phase II trial",
      journal: "BMC Cancer",
      year: "2023",
      url: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-023-10768-8",
      tags: ["三阴性乳腺癌", "II期临床试验", "Apatinib"],
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "Combination Therapy of Pyrotinib and Metronomic Vinorelbine in HER2+ Advanced Breast Cancer after Trastuzumab Failure (PROVE): A Prospective Phase 2 Study",
      journal: "Cancer Research and Treatment",
      year: "2024",
      url: "https://e-crt.org/journal/view.php?doi=10.4143/crt.2024.340",
      tags: ["HER2阳性乳腺癌", "II期临床试验", "赫赛汀耐药"],
      color: "from-teal-500/20 to-cyan-500/20",
    },
    {
      title: "Dalpiciclib Plus fulvestrant and pyrotinib in HR+/HER2-low advanced breast cancer after progression on CDK4/6 Inhibition (DapPLE-HER): a bayesian optimal phase II study",
      journal: "International Journal of Surgery",
      year: "2024",
      url: "https://journals.lww.com/international-journal-of-surgery/abstract/9900/dalpiciclib_plus_fulvestrant_and_pyrotinib_in.3261.aspx",
      tags: ["HER2-low", "CDK4/6抑制剂", "贝叶斯设计"],
      color: "from-yellow-500/20 to-amber-500/20",
    },
    {
      title: "Clinical efficacy and therapy response prediction of neoadjuvant dalpiciclib plus letrozole in postmenopausal patients with HR+/HER2- stage II-III breast cancer (DARLING 01): a single-arm, open-label, exploratory study",
      journal: "Breast Cancer Research",
      year: "2025",
      url: "https://breast-cancer-research.biomedcentral.com/articles/10.1186/s13058-025-01976-0",
      tags: ["CDK4/6抑制剂", "新辅助治疗", "疗效预测"],
      color: "from-indigo-500/20 to-blue-500/20",
    },
  ];

  return (
    <section id="publications" className="container mx-auto px-4 py-12 md:py-20">
      <div className="space-y-10">
        {/* 标题 */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              全文发表
            </h2>
            <BookOpen className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg">
            8 篇高质量学术论文发表于国际期刊
          </p>
        </div>

        {/* 论文列表 */}
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 渐变背景 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pub.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <CardHeader className="relative space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="font-semibold">
                    {pub.journal}
                  </Badge>
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {pub.year}
                  </Badge>
                </div>
                <CardTitle className="text-base leading-relaxed group-hover:text-primary transition-colors">
                  {pub.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* 查看链接 */}
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium group/link"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                  查看全文
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
