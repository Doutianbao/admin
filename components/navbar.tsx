"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, ChevronDown, Languages } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
        timeoutId = undefined as any;
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: t("nav.home"), id: "hero", type: "scroll" },
    { label: t("nav.skills"), id: "skills", type: "scroll" },
    { label: t("nav.projects"), id: "projects", type: "scroll" },
    { label: t("nav.testimonials"), id: "testimonials", type: "scroll" },
  ];

  const hobbyProjects = [
    { label: language === "zh" ? "AI服务" : "AI Service", url: "https://api.284600.xyz" },
  ];

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Apple 风格 */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold hover:text-primary transition-colors duration-300"
          >
            Lucas Fu
          </button>

          {/* 桌面导航 - 极简风格 */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </button>
            ))}

            {/* 业余作品下拉菜单 - 悬停触发 */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-secondary/50 inline-flex items-center gap-1">
                {t("nav.hobby")}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* 下拉菜单内容 */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-2xl border border-border bg-popover shadow-lg animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                  <div className="p-1.5">
                    {hobbyProjects.map((project) => (
                      <a
                        key={project.url}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary rounded-xl transition-colors duration-200 cursor-pointer"
                      >
                        {project.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="ml-2 pl-2 border-l border-border/50 flex items-center gap-2">
              {/* 语言切换 */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
                className="rounded-full w-9 h-9 hover:bg-secondary/50"
                title={language === "zh" ? "Switch to English" : "切换到中文"}
              >
                <Languages className="w-4 h-4" />
              </Button>

              {/* 主题切换 */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full w-9 h-9 hover:bg-secondary/50"
              >
                {theme === "dark" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* 移动端按钮 */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9"
            >
              {theme === "dark" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full w-9 h-9"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* 移动端菜单 - Apple 风格 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-border/50 animate-fade-in-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}

            {/* 移动端业余作品 */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2">{t("nav.hobby")}</p>
              {hobbyProjects.map((project) => (
                <a
                  key={project.url}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {project.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
