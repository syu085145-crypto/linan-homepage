import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'AI 内容生成工具',
    description: '基于 GPT 的内容生成工具，帮助用户快速创建高质量文章和社交媒体内容。',
    badges: ['React', 'TypeScript', 'OpenAI API'],
    link: '#'
  },
  {
    id: 2,
    title: '生物统计数据分析平台',
    description: '为研究人员提供直观的生物统计数据分析工具，支持多种统计方法。',
    badges: ['Python', 'Django', 'Data Visualization'],
    link: '#'
  },
  {
    id: 3,
    title: '个人知识管理系统',
    description: '帮助用户整理和管理个人知识，支持笔记、标签和检索功能。',
    badges: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-2">
              <div className="w-2 h-10 bg-primary rounded-full" />
              我的作品
            </h2>
            <p className="text-muted-foreground text-lg font-medium max-w-xl">
              探索我在 AI 产品、数据分析和内容领域的项目
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id} 
              className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden bg-white/50 backdrop-blur-sm"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.badges.map((badge, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-600 border-none font-medium">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={item.link} 
                  className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  查看详情
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}