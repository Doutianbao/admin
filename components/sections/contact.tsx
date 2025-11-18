import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Send, Heart, Video } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "邮箱",
      value: "931928708@163.com",
      href: "mailto:931928708@163.com",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverBg: "group-hover:bg-primary/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/doutianbao",
      href: "https://github.com/doutianbao",
      color: "text-foreground",
      bgColor: "bg-foreground/10",
      hoverBg: "group-hover:bg-foreground/20",
    },
    {
      icon: Video,
      label: "哔哩哔哩",
      value: "bilibili.com/1251348458",
      href: "https://space.bilibili.com/1251348458",
      color: "text-accent",
      bgColor: "bg-accent/10",
      hoverBg: "group-hover:bg-accent/20",
    },
  ];

  return (
    <section id="contact" className="relative container mx-auto px-4 py-12 md:py-20 pb-24">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="space-y-12">
        {/* 标题 */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            联系方式
          </h2>
          <p className="text-muted-foreground text-lg">
            欢迎学术交流与合作
          </p>
        </div>

        {/* 联系方式卡片 */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.label}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className={`${method.bgColor} ${method.hoverBg} p-4 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-muted-foreground mb-1">
                        {method.label}
                      </p>
                      <p className="text-base md:text-lg truncate group-hover:text-primary transition-colors font-medium">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA 按钮 */}
        <div className="text-center pt-8">
          <Button
            size="lg"
            asChild
            className="group shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
          >
            <a href="mailto:931928708@163.com" className="gap-2">
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              发送邮件
            </a>
          </Button>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="mt-24 text-center text-muted-foreground space-y-4">
        <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="flex items-center justify-center gap-2 text-sm">
          <p>© {new Date().getFullYear()} 付许伟 (Lucas Fu). 保留所有权利.</p>
        </div>
        <div className="flex items-center justify-center gap-1 text-xs">
          <span>用</span>
          <Heart className="w-3 h-3 text-accent fill-accent animate-pulse" />
          <span>构建</span>
        </div>
      </footer>
    </section>
  );
}
