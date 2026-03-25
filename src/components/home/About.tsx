import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, PenTool, Lightbulb, Brain, Target, Globe } from 'lucide-react';

const aboutInfo = [
  {
    title: '当前在做的事',
    icon: <Target className="w-5 h-5 text-blue-500" />,
    description: '整理自己的作品和写作方向，同时探索 AI 与内容的结合点。',
    badges: ['主页开发', '作品整理', '写作计划']
  },
  {
    title: '兴趣方向',
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    items: [
      { label: 'AI 应用', icon: <Brain className="w-4 h-4" /> },
      { label: '写作', icon: <PenTool className="w-4 h-4" /> },
      { label: '旅行', icon: <Plane className="w-4 h-4" /> }
    ],
    description: '对新技术充满好奇，喜欢探索 AI 如何赋能创意表达。'
  },
  {
    title: '个人特点',
    icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
    description: '喜欢把复杂问题讲成人话。擅长内容策划与逻辑梳理。',
    badges: ['通俗易懂', '逻辑清晰', '内容敏感']
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-2">
              <div className="w-2 h-10 bg-primary rounded-full" />
              关于我
            </h2>
            <p className="text-muted-foreground text-lg font-medium max-w-xl">
              一个在数字世界探索内容边界的内容策划师
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutInfo.map((info, idx) => (
            <Card 
              key={idx} 
              className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden bg-white/50 backdrop-blur-sm"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              
              <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
                <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-primary/10 transition-colors">
                  {info.icon}
                </div>
                <CardTitle className="text-xl font-bold">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {info.description}
                </p>
                {info.badges && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {info.badges.map((badge, bIdx) => (
                      <Badge key={bIdx} variant="secondary" className="bg-slate-100 text-slate-600 border-none font-medium">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                {info.items && (
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {info.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 text-sm font-medium p-2 rounded-md bg-slate-50/50 group-hover:bg-white transition-colors">
                        <span className="text-blue-500">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
