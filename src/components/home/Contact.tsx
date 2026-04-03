import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, Twitter, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-blue-500" />,
    label: '邮箱',
    value: 'linan@example.com',
    link: 'mailto:linan@example.com'
  },
  {
    icon: <Phone className="w-5 h-5 text-blue-500" />,
    label: '电话',
    value: '+86 123 4567 8910',
    link: 'tel:+8612345678910'
  },
  {
    icon: <Linkedin className="w-5 h-5 text-blue-500" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/linan',
    link: '#'
  },
  {
    icon: <Github className="w-5 h-5 text-blue-500" />,
    label: 'GitHub',
    value: 'github.com/linan',
    link: '#'
  },
  {
    icon: <Twitter className="w-5 h-5 text-blue-500" />,
    label: 'Twitter',
    value: '@linan',
    link: '#'
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-blue-500" />,
    label: '微信',
    value: 'linan_wechat',
    link: '#'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center gap-2">
              <div className="w-2 h-10 bg-primary rounded-full" />
              联系我
            </h2>
            <p className="text-muted-foreground text-lg font-medium max-w-xl">
              有任何问题或合作机会，欢迎随时联系
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info, idx) => (
            <a 
              href={info.link} 
              key={idx} 
              className="group block"
            >
              <Card 
                className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden bg-white/50 backdrop-blur-sm h-full"
              >
                {/* Highlight bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
                  <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-primary/10 transition-colors">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{info.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-medium group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}