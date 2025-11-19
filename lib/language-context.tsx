"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  zh: {
    // Navbar
    "nav.home": "首页",
    "nav.skills": "专业技能",
    "nav.projects": "学术成果",
    "nav.testimonials": "客户评价",
    "nav.hobby": "业余作品",

    // Hero
    "hero.title": "付许伟",
    "hero.subtitle": "Lucas Fu",
    "hero.position": "医学科学联络官 (MSL)",
    "hero.degree": "外科学硕士 · 骨外科主治医师",
    "hero.conferences": "会议成果",
    "hero.publications": "全文发表",
    "hero.breast_exp": "年乳腺癌经验",
    "hero.gi_exp": "年消化道肿瘤",
    "hero.research_title": "临床研究与分析",
    "hero.research_desc": "专注于临床研究设计、统计分析与学术传播。擅长 R、Python、SAS 数据分析，具有丰富的大会 Poster 撰写和全文发表经验。",
    "hero.coverage_title": "覆盖区域与合作",
    "hero.coverage_desc": "主要覆盖京津冀地区，与学会副主委、青年主委等 KOL 建立深度合作关系，在 ASCO、ESMO、SABCS、CSCO 等国际顶级会议发表成果。",
    "hero.contact": "联系我",
    "hero.wechat": "微信",
    "hero.wechat_copied": "微信号已复制: hbykdx",

    // Skills
    "skills.title": "专业技能",
    "skills.subtitle": "临床研究、统计分析与学术传播",
    "skills.clinical": "临床研究",
    "skills.statistics": "统计分析",
    "skills.academic": "学术技能",
    "skills.clinical_design": "临床研究设计",
    "skills.protocol": "方案撰写",
    "skills.ethics": "伦理审查",
    "skills.data_mgmt": "数据管理",
    "skills.quality": "质量控制",
    "skills.monitoring": "监查与稽查",
    "skills.r_lang": "R 语言",
    "skills.python": "Python",
    "skills.sas": "SAS",
    "skills.spss": "SPSS",
    "skills.survival": "生存分析",
    "skills.meta": "Meta 分析",
    "skills.poster": "Poster 撰写",
    "skills.publication": "论文发表",
    "skills.visualization": "数据可视化",
    "skills.ppt": "PPT 制作",
    "skills.excel": "Excel 高级应用",
    "skills.literature": "文献检索",

    // Projects
    "projects.title": "学术成果",
    "projects.subtitle": "2022 - 2025 国际顶级会议学术贡献",
    "projects.view_details": "查看会议详情",
    "projects.achievements": "项成果",
    "projects.published": "共发表",
    "projects.covering": "涵盖",
    "projects.etc": "等领域",
    "projects.list": "发表成果列表",
    "projects.visit": "访问会议官方网站",

    // Testimonials
    "testimonials.title": "客户评价",
    "testimonials.subtitle": "来自合作医院的专业认可",

    // Stats
    "stats.top_conferences": "顶级会议",
    "stats.years": "年度跨度",

    // Publications Dialog
    "publications.title": "全文发表",
    "publications.subtitle": "8 篇高质量学术论文发表于国际期刊",
    "publications.view": "查看全文",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.projects": "Achievements",
    "nav.testimonials": "Testimonials",
    "nav.hobby": "Projects",

    // Hero
    "hero.title": "Xuwei Fu",
    "hero.subtitle": "Lucas Fu",
    "hero.position": "Medical Science Liaison (MSL)",
    "hero.degree": "Master of Surgery · Attending Physician in Orthopedic Surgery",
    "hero.conferences": "Conference Presentations",
    "hero.publications": "Publications",
    "hero.breast_exp": "Years in Breast Cancer",
    "hero.gi_exp": "Years in GI Tumors",
    "hero.research_title": "Clinical Research & Analysis",
    "hero.research_desc": "Specialized in clinical research design, statistical analysis, and academic communication. Proficient in R, Python, and SAS for data analysis, with extensive experience in conference poster preparation and manuscript publication.",
    "hero.coverage_title": "Coverage & Collaboration",
    "hero.coverage_desc": "Primary coverage in Beijing-Tianjin-Hebei region, establishing deep collaborations with KOLs including vice chairs and young chairs of medical societies. Published findings at top international conferences including ASCO, ESMO, SABCS, and CSCO.",
    "hero.contact": "Contact Me",
    "hero.wechat": "WeChat",
    "hero.wechat_copied": "WeChat ID copied: hbykdx",

    // Skills
    "skills.title": "Professional Skills",
    "skills.subtitle": "Clinical Research, Statistical Analysis & Academic Communication",
    "skills.clinical": "Clinical Research",
    "skills.statistics": "Statistical Analysis",
    "skills.academic": "Academic Skills",
    "skills.clinical_design": "Clinical Research Design",
    "skills.protocol": "Protocol Writing",
    "skills.ethics": "Ethics Review",
    "skills.data_mgmt": "Data Management",
    "skills.quality": "Quality Control",
    "skills.monitoring": "Monitoring & Auditing",
    "skills.r_lang": "R Language",
    "skills.python": "Python",
    "skills.sas": "SAS",
    "skills.spss": "SPSS",
    "skills.survival": "Survival Analysis",
    "skills.meta": "Meta-Analysis",
    "skills.poster": "Poster Writing",
    "skills.publication": "Manuscript Publication",
    "skills.visualization": "Data Visualization",
    "skills.ppt": "PowerPoint",
    "skills.excel": "Advanced Excel",
    "skills.literature": "Literature Search",

    // Projects
    "projects.title": "Academic Achievements",
    "projects.subtitle": "Contributions to Top International Conferences 2022 - 2025",
    "projects.view_details": "View Details",
    "projects.achievements": "Achievements",
    "projects.published": "Total published",
    "projects.covering": "covering",
    "projects.etc": "and more",
    "projects.list": "List of Publications",
    "projects.visit": "Visit Official Website",

    // Testimonials
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "Professional Recognition from Partner Hospitals",

    // Stats
    "stats.top_conferences": "Top Conferences",
    "stats.years": "Years Span",

    // Publications Dialog
    "publications.title": "Full-Text Publications",
    "publications.subtitle": "8 High-Quality Academic Papers Published in International Journals",
    "publications.view": "View Full Text",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
