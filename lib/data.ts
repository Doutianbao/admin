export type Language = "zh" | "en";

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface LocalizedArray {
  zh: string[];
  en: string[];
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  url: string;
  tags: LocalizedArray;
}

export interface ConferenceDetail {
  title: string; // The title in the details usually contains the type (Poster/Abstract) so we might want to keep it as is or localize it if it differs significantly. 
  // Looking at the source, the titles are English in the code but some have "Oral: ..." in Chinese. 
  // For simplicity in this refactor, we will keep the title as a string, but if it needs localization, we can make it LocalizedString.
  // However, the current code has hardcoded strings in the details array.
  // Let's look at the source: 
  // details: [ { title: "Poster: ...", url: "..." } ]
  // The titles seem to be mostly English even in the Chinese version for some, but mixed for others.
  // Let's use string for now and copy the exact values, or LocalizedString if they differ.
  // Actually, in the original code:
  // details: [ { title: "Poster: Pyrotinib...", url: "..." } ] -> This is shared?
  // Wait, in `getConferenceData`, `details` are inside the object which is created inside the function.
  // But the `details` array content seems identical in structure?
  // Let's check `projects.tsx` again.
  // The `details` array is defined inside the `achievements` object.
  // In `getConferenceData`, it returns an array.
  // The `details` seem to be hardcoded strings.
  // For the "CSCO 2024" item:
  // title: "Oral: 艾立布林..." (Chinese characters)
  // So it is localized.
  // I will use LocalizedString for `title` in `details` to be safe and flexible.
  url: string;
}

export interface Achievement {
  conference: string; // e.g. "ASCO 2022" - seems same for both
  title: LocalizedString;
  items: LocalizedArray;
  total: LocalizedString;
  tags: LocalizedArray;
  gradient: string;
  link: string;
  details: { title: string; url: string }[]; // The details titles in the original code seem to be mostly English or specific to the paper language. 
  // Let's keep it simple: The original code didn't switch detail titles based on language for most items, EXCEPT maybe CSCO?
  // Actually, looking closely at `projects.tsx`:
  // The `details` array is defined ONCE inside the object.
  // It is NOT conditional on `isZh` in the original code?
  // Wait, `getConferenceData` is a function.
  // Inside: `const isZh = language === "zh";`
  // Then it returns an array.
  // The `details` array is defined inside that array literal.
  // So if I want to support switching, I should probably store the data such that I can retrieve the correct version.
  // However, most of the paper titles are in English (as they are international papers).
  // The CSCO one has Chinese.
  // If the user wants to switch languages, the paper title might remain in its original language (English for ASCO, Chinese/English for CSCO).
  // I will stick to `string` for `details.title` for now, assuming the paper title is fixed.
  location: LocalizedString;
  date: LocalizedString;
  highlight?: boolean;
  upcoming?: boolean;
}

export interface ConferenceYear {
  year: string;
  yearColor: string;
  yearBg: string;
  achievements: Achievement[];
}

export const publications: Publication[] = [
  {
    title: "Neoadjuvant pyrotinib plus nab-paclitaxel, doxorubicin, and cyclophosphamide for HER2-positive locally advanced breast cancer: a retrospective case-series study",
    journal: "Gland Surgery",
    year: "2022",
    url: "http://gs.amegroups.org/article/view/86303/html",
    tags: {
      zh: ["HER2阳性乳腺癌", "新辅助治疗", "Pyrotinib"],
      en: ["HER2+ Breast Cancer", "Neoadjuvant Therapy", "Pyrotinib"],
    },
  },
  {
    title: "Cardiotoxicity monitoring of pyrotinib in combination with nab-paclitaxel, doxorubicin, and cyclophosphamide in HER2-positive breast cancer: a single-armed clinical trial",
    journal: "Gland Surgery",
    year: "2022",
    url: "https://gs.amegroups.org/article/view/93437/html",
    tags: {
      zh: ["心脏毒性", "HER2阳性乳腺癌", "安全性监测"],
      en: ["Cardiotoxicity", "HER2+ Breast Cancer", "Safety Monitoring"],
    },
  },
  {
    title: "The efficacy and safety of using pyrotinib combined with capecitabine as neoadjuvant therapy in elderly patients with HER2-positive breast cancer: a single-arm prospective clinical trial",
    journal: "Gland Surgery",
    year: "2023",
    url: "https://gs.amegroups.org/article/view/110610/html",
    tags: {
      zh: ["老年患者", "HER2阳性乳腺癌", "新辅助治疗"],
      en: ["Elderly Patients", "HER2+ Breast Cancer", "Neoadjuvant Therapy"],
    },
  },
  {
    title: "Real‐world data for the renal safety of abemaciclib combined with bisphosphonate in HR+/HER2− advanced breast cancer",
    journal: "Thoracic Cancer",
    year: "2022",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/1759-7714.14715",
    tags: {
      zh: ["真实世界研究", "肾脏安全性", "CDK4/6抑制剂"],
      en: ["Real-World Study", "Renal Safety", "CDK4/6 Inhibitor"],
    },
  },
  {
    title: "Apatinib plus etoposide in pretreated patients with advanced triple-negative breast cancer: a phase II trial",
    journal: "BMC Cancer",
    year: "2023",
    url: "https://bmccancer.biomedcentral.com/articles/10.1186/s12885-023-10768-8",
    tags: {
      zh: ["三阴性乳腺癌", "II期临床试验", "Apatinib"],
      en: ["TNBC", "Phase II Trial", "Apatinib"],
    },
  },
  {
    title: "Combination Therapy of Pyrotinib and Metronomic Vinorelbine in HER2+ Advanced Breast Cancer after Trastuzumab Failure (PROVE): A Prospective Phase 2 Study",
    journal: "Cancer Research and Treatment",
    year: "2025",
    url: "https://e-crt.org/journal/view.php?doi=10.4143/crt.2024.340",
    tags: {
      zh: ["HER2阳性乳腺癌", "II期临床试验", "赫赛汀耐药"],
      en: ["HER2+ Breast Cancer", "Phase II Trial", "Trastuzumab Resistance"],
    },
  },
  {
    title: "Dalpiciclib Plus fulvestrant and pyrotinib in HR+/HER2-low advanced breast cancer after progression on CDK4/6 Inhibition (DapPLE-HER): a bayesian optimal phase II study",
    journal: "International Journal of Surgery",
    year: "2025",
    url: "https://journals.lww.com/international-journal-of-surgery/abstract/9900/dalpiciclib_plus_fulvestrant_and_pyrotinib_in.3261.aspx",
    tags: {
      zh: ["HER2-low", "CDK4/6抑制剂", "贝叶斯设计"],
      en: ["HER2-low", "CDK4/6 Inhibitor", "Bayesian Design"],
    },
  },
  {
    title: "Clinical efficacy and therapy response prediction of neoadjuvant dalpiciclib plus letrozole in postmenopausal patients with HR+/HER2- stage II-III breast cancer (DARLING 01): a single-arm, open-label, exploratory study",
    journal: "Breast Cancer Research",
    year: "2025",
    url: "https://breast-cancer-research.biomedcentral.com/articles/10.1186/s13058-025-01976-0",
    tags: {
      zh: ["CDK4/6抑制剂", "新辅助治疗", "疗效预测"],
      en: ["CDK4/6 Inhibitor", "Neoadjuvant Therapy", "Efficacy Prediction"],
    },
  },
];

export const conferenceTimeline: ConferenceYear[] = [
  {
    year: "2022",
    yearColor: "text-blue-500",
    yearBg: "bg-blue-500",
    achievements: [
      {
        conference: "ASCO 2022",
        title: {
          zh: "美国临床肿瘤学会年会",
          en: "American Society of Clinical Oncology Annual Meeting",
        },
        items: {
          zh: ["3 篇 Poster", "3 篇 Abstract"],
          en: ["3 Posters", "3 Abstracts"],
        },
        total: {
          zh: "6 项成果",
          en: "6 Achievements",
        },
        tags: {
          zh: ["HER2阳性乳腺癌", "三阴性乳腺癌", "新辅助治疗"],
          en: ["HER2+ Breast Cancer", "Triple-Negative Breast Cancer", "Neoadjuvant Therapy"],
        },
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
        location: {
          zh: "芝加哥, 美国",
          en: "Chicago, USA",
        },
        date: {
          zh: "2022年6月3-7日",
          en: "June 3-7, 2022",
        },
      },
      {
        conference: "SABCS 2022",
        title: {
          zh: "圣安东尼奥乳腺癌研讨会",
          en: "San Antonio Breast Cancer Symposium",
        },
        items: {
          zh: ["1 篇 Poster", "1 篇 Abstract"],
          en: ["1 Poster", "1 Abstract"],
        },
        total: {
          zh: "2 项成果",
          en: "2 Achievements",
        },
        tags: {
          zh: ["HER2阳性乳腺癌", "真实世界研究"],
          en: ["HER2+ Breast Cancer", "Real-World Study"],
        },
        gradient: "from-pink-500/20 to-rose-500/20",
        link: "https://www.sabcs.org/",
        details: [
          { title: "Poster: Real-world incidence and management of diarrhea secondary to pyrotinib in patients with HER-2 positive breast cancer", url: "https://aacrjournals.org/cancerres/article/83/5_Supplement/P1-12-11/717825/Abstract-P1-12-11-Real-world-incidence-and" },
          { title: "Abstract: Real-world data for the renal safety of abemaciclib combined with bisphosphonate in Chinese HR+ advanced breast cancer", url: "https://www.sabcs.org/" },
        ],
        location: {
          zh: "圣安东尼奥, 美国",
          en: "San Antonio, USA",
        },
        date: {
          zh: "2022年12月6-10日",
          en: "December 6-10, 2022",
        },
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
        title: {
          zh: "美国临床肿瘤学会年会",
          en: "American Society of Clinical Oncology Annual Meeting",
        },
        items: {
          zh: ["1 篇 Abstract"],
          en: ["1 Abstract"],
        },
        total: {
          zh: "1 项成果",
          en: "1 Achievement",
        },
        tags: {
          zh: ["HER2阳性乳腺癌", "脑转移", "放疗联合治疗"],
          en: ["HER2+ Breast Cancer", "Brain Metastases", "Radiotherapy Combination"],
        },
        gradient: "from-green-500/20 to-emerald-500/20",
        link: "https://meetings.asco.org/",
        details: [
          { title: "Abstract: Radiotherapy combined with pyrotinib plus capecitabine in patients with HER2-positive breast cancer and brain metastases", url: "https://ascopubs.org/doi/10.1200/JCO.2023.41.16_suppl.e13024" },
        ],
        location: {
          zh: "芝加哥, 美国",
          en: "Chicago, USA",
        },
        date: {
          zh: "2023年6月2-6日",
          en: "June 2-6, 2023",
        },
      },
      {
        conference: "SABCS 2023",
        title: {
          zh: "圣安东尼奥乳腺癌研讨会",
          en: "San Antonio Breast Cancer Symposium",
        },
        items: {
          zh: ["1 篇 Poster"],
          en: ["1 Poster"],
        },
        total: {
          zh: "1 项成果",
          en: "1 Achievement",
        },
        tags: {
          zh: ["CDK4/6抑制剂", "新辅助治疗"],
          en: ["CDK4/6 Inhibitor", "Neoadjuvant Therapy"],
        },
        gradient: "from-teal-500/20 to-cyan-500/20",
        link: "https://www.sabcs.org/",
        details: [
          { title: "Poster: CDK4/6 inhibitor dalpiciclib combined with letrozole as neoadjuvant therapy in postmenopausal patients with HR+/HER2- stage II-III breast cancer", url: "https://aacrjournals.org/cancerres/article/84/9_Supplement/PO2-02-05/744115/Abstract-PO2-02-05-CDK4-6-inhibitor-dalpiciclib" },
        ],
        location: {
          zh: "圣安东尼奥, 美国",
          en: "San Antonio, USA",
        },
        date: {
          zh: "2023年12月5-9日",
          en: "December 5-9, 2023",
        },
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
        title: {
          zh: "美国临床肿瘤学会年会",
          en: "American Society of Clinical Oncology Annual Meeting",
        },
        items: {
          zh: ["2 篇 TPS", "2 篇 Abstract"],
          en: ["2 TPS", "2 Abstracts"],
        },
        total: {
          zh: "4 项成果",
          en: "4 Achievements",
        },
        tags: {
          zh: ["CDK4/6抑制剂", "HER2阳性乳腺癌", "新辅助治疗"],
          en: ["CDK4/6 Inhibitor", "HER2+ Breast Cancer", "Neoadjuvant Therapy"],
        },
        gradient: "from-purple-500/20 to-pink-500/20",
        link: "https://meetings.asco.org/",
        details: [
          { title: "TPS: A phase II trial comparing dalpiciclib in combination with letrozole versus standard chemotherapy as neoadjuvant therapy in patients with high-risk HR-positive HER-2 negative breast cancer: DARLING-02", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS626" },
          { title: "TPS: Neoadjuvant dalpiciclib, exemestane, and goserelin in premenopausal women with HR-positive, HER2-negative breast cancer", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.TPS625" },
          { title: "Abstract: Efficacy and safety of dalpiciclib, fulvestrant, and pyrotinib in HR+ HER2-low advanced breast cancer following CDK4/6 inhibitors and AIs", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.e13056" },
          { title: "Abstract: Efficacy and safety of pyrotinib combined with trastuzumab emtansine (T-DM1) for patients with advanced HER2-positive breast cancer", url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.e13005" },
        ],
        location: {
          zh: "芝加哥, 美国",
          en: "Chicago, USA",
        },
        date: {
          zh: "2024年5月31日-6月4日",
          en: "May 31 - June 4, 2024",
        },
      },
      {
        conference: "ESMO 2024",
        title: {
          zh: "欧洲肿瘤内科学会年会",
          en: "European Society for Medical Oncology Congress",
        },
        items: {
          zh: ["1 篇 TiP", "1 篇 Poster"],
          en: ["1 TiP", "1 Poster"],
        },
        total: {
          zh: "2 项成果",
          en: "2 Achievements",
        },
        tags: {
          zh: ["CDK4/6抑制剂", "EGFR突变NSCLC", "新辅助治疗"],
          en: ["CDK4/6 Inhibitor", "EGFR-mutant NSCLC", "Neoadjuvant Therapy"],
        },
        gradient: "from-teal-500/20 to-cyan-500/20",
        link: "https://www.esmo.org/",
        details: [
          { title: "TiP: Osimertinib combined with dalpiciclib in EGFR-mutant, CDK4/6 pathway-altered, advanced NSCLC patients with acquired resistance to third-generation EGFR-TKIs", url: "https://www.annalsofoncology.org/article/S0923-7534(24)02970-3/fulltext" },
          { title: "Poster: Efficacy and safety of dalpiciclib, exemestane, and goserelin as neoadjuvant therapy in premenopausal HR-positive, HER2-negative breast cancer patients", url: "https://www.annalsofoncology.org/article/S0923-7534(24)01706-X/fulltext" },
        ],
        location: {
          zh: "巴塞罗那, 西班牙",
          en: "Barcelona, Spain",
        },
        date: {
          zh: "2024年9月13-17日",
          en: "September 13-17, 2024",
        },
      },
      {
        conference: "SABCS 2024",
        title: {
          zh: "圣安东尼奥乳腺癌研讨会",
          en: "San Antonio Breast Cancer Symposium",
        },
        items: {
          zh: ["1 篇 Poster", "1 篇 TPS"],
          en: ["1 Poster", "1 TPS"],
        },
        total: {
          zh: "2 项成果",
          en: "2 Achievements",
        },
        tags: {
          zh: ["HER2阳性乳腺癌", "新辅助治疗"],
          en: ["HER2+ Breast Cancer", "Neoadjuvant Therapy"],
        },
        gradient: "from-orange-500/20 to-red-500/20",
        link: "https://www.sabcs.org/",
        details: [
          { title: "Poster: Efficacy and Safety of Pyrotinib Combined with Trastuzumab and Aromatase Inhibitor in Neoadjuvant Treatment of HER2+/HR+ Breast Cancer", url: "https://aacrjournals.org/clincancerres/article/31/12_Supplement/P5-07-23/752662/Abstract-P5-07-23-Efficacy-and-Safety-of-Pyrotinib" },
          { title: "TPS: Neoadjuvant Therapy with Pyrotinib, Subcutaneous Trastuzumab, and Capecitabine for HER2-Positive Early Breast Cancer", url: "https://aacrjournals.org/clincancerres/article/31/12_Supplement/P3-12-22/752802/Abstract-P3-12-22-Neoadjuvant-Therapy-with" },
        ],
        location: {
          zh: "圣安东尼奥, 美国",
          en: "San Antonio, USA",
        },
        date: {
          zh: "2024年12月10-14日",
          en: "December 10-14, 2024",
        },
      },
      {
        conference: "CSCO 2024",
        title: {
          zh: "中国临床肿瘤学会年会",
          en: "Chinese Society of Clinical Oncology Annual Meeting",
        },
        items: {
          zh: ["1 次 Oral 口头报告"],
          en: ["1 Oral Presentation"],
        },
        total: {
          zh: "1 项成果",
          en: "1 Achievement",
        },
        tags: {
          zh: ["口头报告", "HER2阳性乳腺癌", "艾立布林"],
          en: ["Oral Presentation", "HER2+ Breast Cancer", "Eribulin"],
        },
        gradient: "from-yellow-500/20 to-amber-500/20",
        link: "https://www.csco.org.cn/",
        highlight: true,
        details: [
          { title: "Oral: 艾立布林联合吡咯替尼用于既往用过紫杉类且赫赛汀耐药的晚期 HER2 阳性乳腺癌患者的多中心探索性研究", url: "https://www.csco.org.cn/" },
        ],
        location: {
          zh: "厦门, 中国",
          en: "Xiamen, China",
        },
        date: {
          zh: "2024年9月25-29日",
          en: "September 25-29, 2024",
        },
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
        title: {
          zh: "美国临床肿瘤学会年会",
          en: "American Society of Clinical Oncology Annual Meeting",
        },
        items: {
          zh: ["1 篇 Abstract"],
          en: ["1 Abstract"],
        },
        total: {
          zh: "1 项成果",
          en: "1 Achievement",
        },
        tags: {
          zh: ["最新研究", "胆道肿瘤", "免疫治疗"],
          en: ["Latest Research", "Biliary Tract Cancer", "Immunotherapy"],
        },
        gradient: "from-indigo-500/20 to-blue-500/20",
        link: "https://meetings.asco.org/",
        upcoming: true,
        details: [
          { title: "Abstract: Real-world efficacy and safety of durvalumab combined with various chemotherapy regimens in advanced biliary tract cancer: Insights from a large single-center study", url: "https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.e16221" },
        ],
        location: {
          zh: "芝加哥, 美国",
          en: "Chicago, USA",
        },
        date: {
          zh: "2025年5月30日-6月3日",
          en: "May 30 - June 3, 2025",
        },
      },
    ],
  },
];
