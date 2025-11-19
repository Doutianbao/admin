"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";

import { useLanguage } from "@/lib/language-context";
import { publications } from "@/lib/data";

export function Publications() {
  const { language } = useLanguage();
  const gradients = [
    "from-blue-500/20 to-cyan-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-orange-500/20 to-red-500/20",
    "from-pink-500/20 to-rose-500/20",
    "from-teal-500/20 to-cyan-500/20",
    "from-yellow-500/20 to-amber-500/20",
    "from-indigo-500/20 to-blue-500/20",
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
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

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
                  {pub.tags[language].map((tag) => (
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
