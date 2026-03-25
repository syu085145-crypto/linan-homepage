import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  avatarUrl?: string;
}

export function Hero({ avatarUrl }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-6 md:px-12 overflow-hidden hero-dots">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="flex justify-center mb-8 relative">
           <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full transform scale-125" />
           <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-2xl relative">
              <AvatarImage src={avatarUrl || "https://api.dicebear.com/7.x/avataaars/svg?seed=linan"} alt="林安" />
              <AvatarFallback className="text-2xl font-bold bg-primary text-white">LA</AvatarFallback>
           </Avatar>
        </div>

        <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-blue-50 text-primary border-blue-100 flex items-center gap-1.5 w-fit mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-xs font-semibold uppercase tracking-wider">Hello, World!</span>
        </Badge>

        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight gradient-text leading-tight">
          林安
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          一个正在学习用 AI 做产品的内容策划
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.querySelector('#chat')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          >
             与我聊天
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
             </span>
          </button>
          <button
             onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-8 py-3 bg-white text-primary border-2 border-primary/10 rounded-full font-bold transition-all hover:bg-slate-50 hover:border-primary/20"
          >
             关于我
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce">
         <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-scroll-dot" />
         </div>
      </div>
    </section>
  );
}
