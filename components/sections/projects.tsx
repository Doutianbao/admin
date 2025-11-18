"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Sparkles, ExternalLink, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Projects() {
  const [selectedConference, setSelectedConference] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t, language } = useLanguage();

  const getConferenceData = () => {
    const isZh = language === "zh";

    return [
    {
      year: "2022",
      yearColor: "text-blue-500",
      yearBg: "bg-blue-500",
      achievements: [
        {
          conference: "ASCO 2022",
          title: isZh ? "美国临床肿瘤学会年会" : "American Society of Clinical Oncology Annual Meeting",
          items: isZh ? ["3 篇 Poster", "3 篇 Abstract"] : ["3 Posters", "3 Abstracts"],
          total: isZh ? "6 项成果" : "6 Achievements",
          tags: isZh ? ["HER2阳性乳腺癌", "三阴性乳腺癌", "新辅助治疗"] : ["HER2+ Breast Cancer", "Triple-Negative Breast Cancer", "Neoadjuvant Therapy"],
          gradient: "from-blue-500/20 to-cyan-500/20",
          link: "https://meetings.asco.org/",
          details: [
            { title: "Poster: Pyrotinib in combination with metronomic oral vinorelbine in patients with HER2-positive advanced breast cancer who had failed prior trastuzumab-based therapy", url: "https://ascopubs.org/doi/10.1200/JCO.2022.40.16_suppl.1033" },
            { title: "Poster: Pyrotinib-based therapy for patients with HER2-positive breast cancer: A multicenter, real-world study", url: "https://ascopubs.org/doi/10.1200/JCO.2022.40.16_suppl.1040" },
            { title: "Poster: A phase 3, multicenter, open, randomized controlled clinical study of gemcitabine plus capecitabine versus gemcitabine plus carboplatin in the first-line treatment for advanced triple-negative breast cancer", url: "https://ascopubs.org/doi/10.1200/JCO.2022.40.16_suppl.1077" },
            { title: "Abstract: Apatinib plus etoposide as second-or higher-line treatment in recurrent or metastatic triple-negative breast cancer", url: "https://ascopubs.org/doi/10.1200/JCO.2022.40.16_suppl.e13069" },
            { title: "Abstract: Effect of traditional Chinese medicine on pyrotinib-associated diarrhea in patients with HER2-positive breast cancer", url: "https://ascopubs.org/doi/10.1200/JCO.2022.40.16_suppl.e24096" },
            { title: "Abstract: Pyrotinib combined with EC-TH neoadjuvant therapy for patients with HER2-positive breast cancer", url: "https://ascopubs.org/doi/10.1200/JCO.2022.40.16_suppl.e12604" },
          ],
          location: isZh ? "芝加哥, 美国" : "Chicago, USA",
          date: isZh ? "2022年6月3-7日" : "June 3-7, 2022",
        },
        {
          conference: "SABCS 2022",
          title: isZh ? "圣安东尼奥乳腺癌研讨会" : "San Antonio Breast Cancer Symposium",
          items: isZh ? ["1 篇 Poster", "1 篇 Abstract"] : ["1 Poster", "1 Abstract"],
          total: isZh ? "2 项成果" : "2 Achievements",
          tags: isZh ? ["HER2阳性乳腺癌", "真实世界研究"] : ["HER2+ Breast Cancer", "Real-World Study"],
          gradient: "from-pink-500/20 to-rose-500/20",
          link: "https://www.sabcs.org/",
          details: [
            { title: "Poster: Real-world incidence and management of diarrhea secondary to pyrotinib in patients with HER-2 positive breast cancer", url: "https://aacrjournals.org/cancerres/article/83/5_Supplement/P1-12-11/717825/Abstract-P1-12-11-Real-world-incidence-and" },
            { title: "Abstract: Real-world data for the renal safety of abemaciclib combined with bisphosphonate in Chinese HR+ advanced breast cancer", url: "https://www.sabcs.org/" },
          ],
          location: isZh ? "圣安东尼奥, 美国" : "San Antonio, USA",
          date: isZh ? "2022年12月6-10日" : "December 6-10, 2022",
        },
      ],
    },
    {
      year: "2023",
      yearColor: "text-green-500",
      yearBg: "bg-green-500",
      achievements: [
        {
          conference: "ASCO 2023",
          title: isZh ? "美国临床肿瘤学会年会" : "American Society of Clinical Oncology Annual Meeting",
          items: isZh ? ["1 篇 Abstract"] : ["1 Abstract"],
          total: isZh ? "1 项成果" : "1 Achievement",
          tags: isZh ? ["HER2阳性乳腺癌", "脑转移", "放疗联合治疗"] : ["HER2+ Breast Cancer", "Brain Metastases", "Radiotherapy Combination"],
          gradient: "from-green-500/20 to-emerald-500/20",
          link: "https://meetings.asco.org/",
          details: [
            { title: "Abstract: Radiotherapy combined with pyrotinib plus capecitabine in patients with HER2-positive breast cancer and brain metastases", url: "https://ascopubs.org/doi/10.1200/JCO.2023.41.16_suppl.e13024" },
          ],
          location: isZh ? "芝加哥, 美国" : "Chicago, USA",
          date: isZh ? "2023年6月2-6日" : "June 2-6, 2023",
        },
        {
          conference: "SABCS 2023",
          title: isZh ? "圣安东尼奥乳腺癌研讨会" : "San Antonio Breast Cancer Symposium",
          items: isZh ? ["1 篇 Poster"] : ["1 Poster"],
          total: isZh ? "1 项成果" : "1 Achievement",
          tags: isZh ? ["CDK4/6抑制剂", "新辅助治疗"] : ["CDK4/6 Inhibitor", "Neoadjuvant Therapy"],
          gradient: "from-teal-500/20 to-cyan-500/20",
          link: "https://www.sabcs.org/",
          details: [
            { title: "Poster: CDK4/6 inhibitor dalpiciclib combined with letrozole as neoadjuvant therapy in postmenopausal patients with HR+/HER2- stage II-III breast cancer", url: "https://aacrjournals.org/cancerres/article/84/9_Supplement/PO2-02-05/744115/Abstract-PO2-02-05-CDK4-6-inhibitor-dalpiciclib" },
          ],
          location: isZh ? "圣安东尼奥, 美国" : "San Antonio, USA",
          date: isZh ? "2023年12月5-9日" : "December 5-9, 2023",
        },
      ],
    },
    {
      year: "2024",
      yearColor: "text-purple-500",
      yearBg: "bg-purple-500",
      achievements: [
        {
          conference: "ASCO 2024",
          title: isZh ? "美国临床肿瘤学会年会" : "American Society of Clinical Oncology Annual Meeting",
          items: isZh ? ["2 篇 TPS", "2 篇 Abstract"] : ["2 TPS", "2 Abstracts"],
          total: isZh ? "4 项成果" : "4 Achievements",
          tags: isZh ? ["CDK4/6抑制剂", "HER2阳性乳腺癌", "新辅助治疗"] : ["CDK4/6 Inhibitor", "HER2+ Breast Cancer", "Neoadjuvant Therapy"],
          gradient: "from-purple-500/20 to-pink-500/20",
          link: "https://meetings.asco.org/",
          details: [
            { title: "TPS: A phase II trial comparing dalpiciclib in combination with letrozole versus standard chemotherapy as neoadjuvant therapy in patients with high-risk HR-positive HER-2 negative breast cancer: DARLING-02", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS626" },
            { title: "TPS: Neoadjuvant dalpiciclib, exemestane, and goserelin in premenopausal women with HR-positive, HER2-negative breast cancer", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS625" },
            { title: "Abstract: Efficacy and safety of dalpiciclib, fulvestrant, and pyrotinib in HR+ HER2-low advanced breast cancer following CDK4/6 inhibitors and AIs", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.e13056" },
            { title: "Abstract: Efficacy and safety of pyrotinib combined with trastuzumab emtansine (T-DM1) for patients with advanced HER2-positive breast cancer", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.e13005" },
          ],
          location: isZh ? "芝加哥, 美国" : "Chicago, USA",
          date: isZh ? "2024年5月31日-6月4日" : "May 31 - June 4, 2024",
        },
        {
          conference: "ESMO 2024",
          title: isZh ? "欧洲肿瘤内科学会年会" : "European Society for Medical Oncology Congress",
          items: isZh ? ["1 篇 TiP", "1 篇 Poster"] : ["1 TiP", "1 Poster"],
          total: isZh ? "2 项成果" : "2 Achievements",
          tags: isZh ? ["CDK4/6抑制剂", "EGFR突变NSCLC", "新辅助治疗"] : ["CDK4/6 Inhibitor", "EGFR-mutant NSCLC", "Neoadjuvant Therapy"],
          gradient: "from-teal-500/20 to-cyan-500/20",
          link: "https://www.esmo.org/",
          details: [
            { title: "TiP: Osimertinib combined with dalpiciclib in EGFR-mutant, CDK4/6 pathway-altered, advanced NSCLC patients with acquired resistance to third-generation EGFR-TKIs", url: "https://www.annalsofoncology.org/article/S0923-7534(24)02970-3/fulltext" },
            { title: "Poster: Efficacy and safety of dalpiciclib, exemestane, and goserelin as neoadjuvant therapy in premenopausal HR-positive, HER2-negative breast cancer patients", url: "https://www.annalsofoncology.org/article/S0923-7534(24)01706-X/fulltext" },
          ],
          location: isZh ? "巴塞罗那, 西班牙" : "Barcelona, Spain",
          date: isZh ? "2024年9月13-17日" : "September 13-17, 2024",
        },
        {
          conference: "SABCS 2024",
          title: isZh ? "圣安东尼奥乳腺癌研讨会" : "San Antonio Breast Cancer Symposium",
          items: isZh ? ["1 篇 Poster", "1 篇 TPS"] : ["1 Poster", "1 TPS"],
          total: isZh ? "2 项成果" : "2 Achievements",
          tags: isZh ? ["HER2阳性乳腺癌", "新辅助治疗"] : ["HER2+ Breast Cancer", "Neoadjuvant Therapy"],
          gradient: "from-orange-500/20 to-red-500/20",
          link: "https://www.sabcs.org/",
          details: [
            { title: "Poster: Efficacy and Safety of Pyrotinib Combined with Trastuzumab and Aromatase Inhibitor in Neoadjuvant Treatment of HER2+/HR+ Breast Cancer", url: "https://aacrjournals.org/clincancerres/article/31/12_Supplement/P5-07-23/752662/Abstract-P5-07-23-Efficacy-and-Safety-of-Pyrotinib" },
            { title: "TPS: Neoadjuvant Therapy with Pyrotinib, Subcutaneous Trastuzumab, and Capecitabine for HER2-Positive Early Breast Cancer", url: "https://aacrjournals.org/clincancerres/article/31/12_Supplement/P3-12-22/752802/Abstract-P3-12-22-Neoadjuvant-Therapy-with" },
          ],
          location: isZh ? "圣安东尼奥, 美国" : "San Antonio, USA",
          date: isZh ? "2024年12月10-14日" : "December 10-14, 2024",
        },
        {
          conference: "CSCO 2024",
          title: isZh ? "中国临床肿瘤学会年会" : "Chinese Society of Clinical Oncology Annual Meeting",
          items: isZh ? ["1 次 Oral 口头报告"] : ["1 Oral Presentation"],
          total: isZh ? "1 项成果" : "1 Achievement",
          tags: isZh ? ["口头报告", "HER2阳性乳腺癌", "艾立布林"] : ["Oral Presentation", "HER2+ Breast Cancer", "Eribulin"],
          gradient: "from-yellow-500/20 to-amber-500/20",
          link: "https://www.csco.org.cn/",
          highlight: true,
          details: [
            { title: "Oral: 艾立布林联合吡咯替尼用于既往用过紫杉类且赫赛汀耐药的晚期 HER2 阳性乳腺癌患者的多中心探索性研究", url: "https://www.csco.org.cn/" },
          ],
          location: isZh ? "厦门, 中国" : "Xiamen, China",
          date: isZh ? "2024年9月25-29日" : "September 25-29, 2024",
        },
      ],
    },
    {
      year: "2025",
      yearColor: "text-indigo-500",
      yearBg: "bg-indigo-500",
      achievements: [
        {
          conference: "ASCO 2025",
          title: isZh ? "美国临床肿瘤学会年会" : "American Society of Clinical Oncology Annual Meeting",
          items: isZh ? ["1 篇 Abstract"] : ["1 Abstract"],
          total: isZh ? "1 项成果" : "1 Achievement",
          tags: isZh ? ["最新研究", "胆道肿瘤", "免疫治疗"] : ["Latest Research", "Biliary Tract Cancer", "Immunotherapy"],
          gradient: "from-indigo-500/20 to-blue-500/20",
          link: "https://meetings.asco.org/",
          upcoming: true,
          details: [
            { title: "Abstract: Real-world efficacy and safety of durvalumab combined with various chemotherapy regimens in advanced biliary tract cancer: Insights from a large single-center study", url: "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.e16221" },
          ],
          location: isZh ? "芝加哥, 美国" : "Chicago, USA",
          date: isZh ? "2025年5月30日-6月3日" : "May 30 - June 3, 2025",
        },
      ],
    },
  ];
  };

  const timeline = getConferenceData();

  const handleViewDetails = (achievement: any) => {
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
          {timeline.map((yearData, yearIndex) => (
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
                  <Card
                    key={achievement.conference}
                    className={`group relative overflow-hidden hover:shadow-lg transition-all duration-500 border border-border/50 hover:border-border rounded-3xl bg-card/50 backdrop-blur-sm ${
                      achievement.highlight ? "ring-2 ring-accent/30" : ""
                    } ${achievement.upcoming ? "ring-2 ring-primary/30" : ""}`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* 渐变背景 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

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

                    <CardHeader className="relative space-y-3 p-6">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-medium rounded-full">
                          {achievement.conference}
                        </Badge>
                        <Badge variant="secondary" className="text-xs rounded-full">
                          {achievement.total}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative space-y-4 p-6 pt-0">
                      {/* 成果列表 */}
                      <div className="space-y-2">
                        {achievement.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {achievement.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs rounded-full"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* 查看链接 - Apple 风格 */}
                      <button
                        onClick={() => handleViewDetails(achievement)}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium group/link cursor-pointer transition-colors"
                      >
                        <FileText className="w-4 h-4 group-hover/link:scale-105 transition-transform" />
                        {t("projects.view_details")}
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 年份连接线 - Apple 风格 */}
              {yearIndex < timeline.length - 1 && (
                <div className="flex items-center justify-center my-12">
                  <div className="w-px h-12 bg-gradient-to-b from-border via-border/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 弹窗 - Apple 风格 */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl">
          {selectedConference && (
            <>
              <DialogHeader className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="font-medium text-base rounded-full">
                        {selectedConference.conference}
                      </Badge>
                      {selectedConference.highlight && (
                        <Badge className="bg-accent text-accent-foreground rounded-full">
                          ⭐ Oral
                        </Badge>
                      )}
                      {selectedConference.upcoming && (
                        <Badge className="bg-primary text-primary-foreground rounded-full">
                          🆕 New
                        </Badge>
                      )}
                    </div>
                    <DialogTitle className="text-2xl font-semibold">
                      {selectedConference.title}
                    </DialogTitle>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedConference.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedConference.location}</span>
                  </div>
                </div>

                <DialogDescription className="text-base">
                  {t("projects.published")} <span className="font-semibold text-primary">{selectedConference.total}</span>，
                  {t("projects.covering")} {selectedConference.tags.join("、")} {t("projects.etc")}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {t("projects.list")}
                </h4>
                <div className="space-y-2">
                  {selectedConference.details?.map((detail: any, index: number) => (
                    <a
                      key={index}
                      href={detail.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium group-hover:text-primary transition-colors leading-relaxed">
                            {detail.title}
                          </p>
                        </div>
                        <ExternalLink className="flex-shrink-0 w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:scale-105 transition-all" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <a
                  href={selectedConference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {t("projects.visit")}
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
