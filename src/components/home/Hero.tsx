import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Sparkles, MessageSquare } from 'lucide-react';

interface HeroProps {
  avatarUrl?: string;
}

export function Hero({ avatarUrl }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/3 -right-16 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/3 -left-16 w-96 h-96 bg-blue-500/15 blur-[140px] rounded-full" />

      <div className="max-w-3xl mx-auto text-center z-10">
        <div className="flex justify-center mb-8 relative">
           <div className="absolute inset-0 bg-primary/25 blur-3xl rounded-full transform scale-125" />
           <Avatar className="w-32 h-32 md:w-40 h-40 border-4 border-white shadow-2xl relative">
              <AvatarImage src={avatarUrl || "https://api.dicebear.com/7.x/personas/svg?seed=linan&backgroundColor=ffdfbf,ffe7cc,ffd9a0"} alt="林安" />
              <AvatarFallback className="text-2xl font-bold bg-primary text-white">LA</AvatarFallback>
           </Avatar>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-primary">
          林安
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          一个正在学习用 AI 做产品的生物统计师
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.querySelector('#chat')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-xl active:scale-95 text-lg w-full sm:w-auto"
          >
            <MessageSquare className="w-5 h-5" />
            与我聊天
          </button>
        </div>
      </div>
    </section>
  );
}
