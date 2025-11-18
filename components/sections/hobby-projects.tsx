"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, Cpu, Zap } from "lucide-react";

export function HobbyProjects() {
  const projects = [
    {
      title: "AI服务平台",
      description: "提供高质量的AI API服务，支持多种大语言模型，为开发者和研究人员提供便捷的AI能力接入。",
      url: "https://api.284600.xyz",
      icon: Cpu,
      tags: ["AI", "API", "LLM"],
      color: "from-purple-500/10 to-blue-500/10",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
    },
  ];

  return (
    <section id="hobby-projects" className="relative container mx-auto px-4 py-12 md:py-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="space-y-12">
        {/* 标题 */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
              业余作品
            </h2>
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg">
            探索技术边界，创造实用工具
          </p>
        </div>

        {/* 项目卡片 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card
                  className={`h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${project.borderColor} hover:border-primary/50 relative overflow-hidden`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* 渐变背景 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                  {/* 闪光效果 */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <div className="space-y-4">
                      {/* 图标和标题 */}
                      <div className="flex items-start justify-between">
                        <div className={`${project.iconBg} p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <Icon className={`w-8 h-8 ${project.iconColor}`} />
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>

                      {/* 项目信息 */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                          >
                            <Zap className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* 访问提示 */}
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                          <span>点击访问</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* 提示信息 */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            更多作品正在开发中，敬请期待...
          </p>
        </div>
      </div>
    </section>
  );
}
