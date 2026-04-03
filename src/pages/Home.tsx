import React from 'react';
import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Portfolio } from '@/components/home/Portfolio';
import { Contact } from '@/components/home/Contact';
import { Chat } from '@/components/home/Chat';

export default function Home() {
  const avatarUrl = "https://randomuser.me/api/portraits/men/32.jpg";
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero avatarUrl={avatarUrl} />
        <About />
        <Portfolio />
        <Contact />
        <Chat />
      </main>
      <footer className="py-12 px-6 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold text-primary">林安</div>
          <div className="text-sm text-muted-foreground font-medium">
            © 2026 林安的个人主页. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">WeChat</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
