import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { NoiseBackground } from "@/components/ui/noise-background";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: "付许伟 (Lucas Fu) - 医学科学联络官 | Medical Science Liaison",
  description: "医学科学联络官（MSL），专注临床研究设计、统计分析与学术传播。擅长 R、Python、SAS 数据分析，在 ASCO、ESMO、SABCS、CSCO 等国际顶级会议发表 19 项学术成果，8 篇全文论文发表于国际期刊。",
  keywords: [
    "医学科学联络官",
    "MSL",
    "Medical Science Liaison",
    "临床研究",
    "统计分析",
    "R语言",
    "Python",
    "SAS",
    "ASCO",
    "ESMO",
    "SABCS",
    "CSCO",
    "学术发表",
    "乳腺癌研究",
    "肿瘤学",
    "新辅助治疗",
    "CDK4/6抑制剂",
    "HER2阳性乳腺癌",
  ],
  authors: [{ name: "付许伟 (Lucas Fu)", url: "https://yourwebsite.com" }],
  creator: "付许伟 (Lucas Fu)",
  publisher: "付许伟 (Lucas Fu)",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yourwebsite.com",
    title: "付许伟 (Lucas Fu) - 医学科学联络官 | Medical Science Liaison",
    description: "专注临床研究设计、统计分析与学术传播，19项国际会议成果，8篇全文发表",
    siteName: "付许伟 (Lucas Fu) - 学术主页",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "付许伟 (Lucas Fu) - 医学科学联络官",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "付许伟 (Lucas Fu) - 医学科学联络官",
    description: "专注临床研究设计、统计分析与学术传播",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Medical Research",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="付许伟 (Lucas Fu) - 学术主页" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="付许伟 (Lucas Fu)" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NoiseBackground />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
