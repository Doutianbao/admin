"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Testimonials() {
  const { t, language } = useLanguage();

  const getTestimonials = () => {
    const isZh = language === "zh";

    return [
    {
      name: isZh ? "李主任" : "Director Li",
      title: isZh ? "乳腺中心主任" : "Director of Breast Center",
      hospital: isZh ? "河北医科大学第四医院" : "The Fourth Hospital of Hebei Medical University",
      location: isZh ? "河北 · 石家庄" : "Shijiazhuang, Hebei",
      content: isZh
        ? "付经理作为MSL展现出了极高的专业素养和学术能力。在我们的临床研究合作中，他对研究设计的深刻理解和数据分析的精准把控给我留下了深刻印象。他不仅能够快速理解复杂的临床问题，还能提供切实可行的解决方案。与他的合作非常愉快，期待未来更多的学术交流。"
        : "Manager Fu, as an MSL, has demonstrated exceptional professionalism and academic capabilities. In our clinical research collaboration, his profound understanding of study design and precise control of data analysis left a deep impression on me. He can not only quickly grasp complex clinical issues but also provide practical solutions. It has been a pleasure working with him, and I look forward to more academic exchanges in the future.",
      rating: 5,
    },
    {
      name: isZh ? "王教授" : "Professor Wang",
      title: isZh ? "乳腺外科主任" : "Director of Breast Surgery",
      hospital: isZh ? "天津市肿瘤医院" : "Tianjin Medical University Cancer Institute and Hospital",
      location: isZh ? "天津" : "Tianjin",
      content: isZh
        ? "在多次学术会议和临床研究项目中与付经理合作，他展现出的专业性和可靠性令人印象深刻。他对最新研究进展的掌握非常全面，能够将复杂的统计分析结果转化为临床实践中的有价值见解。他的工作态度严谨认真，沟通能力出色，是值得信赖的学术合作伙伴。"
        : "Having collaborated with Manager Fu in multiple academic conferences and clinical research projects, I am impressed by his professionalism and reliability. His comprehensive grasp of the latest research developments and ability to translate complex statistical analysis results into valuable insights for clinical practice are remarkable. His rigorous work attitude and excellent communication skills make him a trustworthy academic partner.",
      rating: 5,
    },
    {
      name: isZh ? "赵主任" : "Director Zhao",
      title: isZh ? "乳腺内科主任" : "Director of Medical Oncology (Breast)",
      hospital: isZh ? "天津市肿瘤医院" : "Tianjin Medical University Cancer Institute and Hospital",
      location: isZh ? "天津" : "Tianjin",
      content: isZh
        ? "付经理在乳腺癌领域的专业知识非常扎实，他协助我们完成的多项临床研究设计都非常科学严谨。他擅长使用R、Python等工具进行数据分析，为我们的研究提供了强有力的技术支持。更难得的是，他能够站在临床医生的角度思考问题，提供的建议都非常实用。"
        : "Manager Fu has solid expertise in the field of breast cancer. The clinical research designs he assisted us with are all scientifically rigorous. He is proficient in using tools such as R and Python for data analysis, providing strong technical support for our research. More importantly, he can think from the perspective of clinicians and provide very practical suggestions.",
      rating: 5,
    },
  ];
  };

  const testimonials = getTestimonials();

  return (
    <section id="testimonials" className="container mx-auto px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* 标题 - Apple 风格 */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* 评价卡片 - Apple 风格 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border border-border/50 hover:border-border transition-all duration-500 hover:shadow-lg rounded-3xl overflow-hidden bg-card/50 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-8 space-y-6">
                {/* 引号和评分 */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  {/* 评分 */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-accent fill-accent"
                      />
                    ))}
                  </div>
                </div>

                {/* 评价内容 */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>

                {/* 分隔线 */}
                <div className="h-px w-full bg-border" />

                {/* 评价人信息 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-light">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">
                        {testimonial.hospital}
                      </p>
                      <p className="text-xs text-muted-foreground font-light">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
