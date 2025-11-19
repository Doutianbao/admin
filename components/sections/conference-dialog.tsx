"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Achievement } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

interface ConferenceDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    conference: Achievement | null;
}

export function ConferenceDialog({ isOpen, onOpenChange, conference }: ConferenceDialogProps) {
    const { t, language } = useLanguage();

    if (!conference) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl">
                <DialogHeader className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="outline" className="font-medium text-base rounded-full">
                                    {conference.conference}
                                </Badge>
                                {conference.highlight && (
                                    <Badge className="bg-accent text-accent-foreground rounded-full">
                                        ⭐ Oral
                                    </Badge>
                                )}
                                {conference.upcoming && (
                                    <Badge className="bg-primary text-primary-foreground rounded-full">
                                        🆕 New
                                    </Badge>
                                )}
                            </div>
                            <DialogTitle className="text-2xl font-semibold">
                                {conference.title[language]}
                            </DialogTitle>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{conference.date[language]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{conference.location[language]}</span>
                        </div>
                    </div>

                    <DialogDescription className="text-base">
                        {t("projects.published")} <span className="font-semibold text-primary">{conference.total[language]}</span>，
                        {t("projects.covering")} {conference.tags[language].join("、")} {t("projects.etc")}
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-3">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {t("projects.list")}
                    </h4>
                    <div className="space-y-2">
                        {conference.details?.map((detail, index) => (
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
                        href={conference.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium group"
                    >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        {t("projects.visit")}
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}
