import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
};

const KNOWLEDGE_BASE: Record<string, string> = {
  '你现在在做什么？': '我最近主要在整理自己的作品，也在尝试用 AI 做一些更完整的小项目。',
  '你有哪些作品？': '目前正在整理中，欢迎持续关注我的后续更新。',
  '怎么联系你？': '可以通过本页面留下的联系方式找到我，或者直接在这里给我留言。',
  '你是谁？': '你好，我是林安的数字分身。我是一个正在学习用 AI 做产品的内容策划师。',
  '你擅长什么？': '我比较擅长把复杂问题讲清楚，也比较关注 AI 应用、内容表达和知识整理这几个方向。'
};

const DEFAULT_ANSWER = '这个问题我暂时还不太清楚，欢迎通过本页面的联系方式直接联系我确认。';

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'bot',
  content: '你好，我是林安的数字分身，可以问我任何关于林安的问题。',
  timestamp: new Date()
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) {
      setError('请输入内容');
      return;
    }
    if (trimmedInput.length > 200) {
      setError('内容过长，请保持在200字以内');
      return;
    }

    setError(null);
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmedInput,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      let botAnswer = DEFAULT_ANSWER;
      
      // Basic fuzzy matching
      for (const [q, a] of Object.entries(KNOWLEDGE_BASE)) {
        if (trimmedInput.includes(q.replace('？', '')) || q.includes(trimmedInput)) {
          botAnswer = a;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: botAnswer,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (q: string) => {
    setInputValue(q);
    // Use a small timeout to let the state update or just pass the value directly
    setTimeout(() => {
       const userMessage: Message = {
         id: Date.now().toString(),
         role: 'user',
         content: q,
         timestamp: new Date()
       };
       setMessages((prev) => [...prev, userMessage]);
       setInputValue('');
       setIsTyping(true);
       
       setTimeout(() => {
         const botMessage: Message = {
           id: (Date.now() + 1).toString(),
           role: 'bot',
           content: KNOWLEDGE_BASE[q] || DEFAULT_ANSWER,
           timestamp: new Date()
         };
         setMessages((prev) => [...prev, botMessage]);
         setIsTyping(false);
       }, 800);
    }, 0);
  };

  return (
    <section id="chat" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
             和「林安」聊聊
           </h2>
           <p className="text-muted-foreground text-lg">
             在这里，你可以通过数字分身快速了解林安的方方面面
           </p>
        </div>

        <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col h-[600px] relative">
           {/* Chat Header */}
           <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Bot className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold">数字分身</h3>
                    <div className="flex items-center gap-1">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-xs text-muted-foreground">在线</span>
                    </div>
                 </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMessages([INITIAL_MESSAGE])}
                title="清除对话"
              >
                <Trash2 className="w-5 h-5 text-muted-foreground" />
              </Button>
           </div>

           {/* Chat Messages */}
           <ScrollArea className="flex-1 p-6 overflow-y-auto" ref={scrollRef}>
              <div className="space-y-6">
                 {messages.map((msg) => (
                   <div 
                    key={msg.id} 
                    className={cn(
                      "flex gap-3 max-w-[85%] animate-fade-in",
                      msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                   >
                     <div className={cn(
                        "w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white",
                        msg.role === 'user' ? "bg-primary" : "bg-blue-500"
                     )}>
                        {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                     </div>
                     <div className={cn(
                        "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                        msg.role === 'user' ? "bg-primary text-white rounded-tr-none" : "bg-white border shadow-sm rounded-tl-none"
                     )}>
                        {msg.content}
                     </div>
                   </div>
                 ))}
                 {isTyping && (
                   <div className="flex gap-3 max-w-[85%] mr-auto">
                     <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white bg-blue-500">
                        <Bot className="w-5 h-5" />
                     </div>
                     <div className="bg-white border shadow-sm px-4 py-2.5 rounded-2xl rounded-tl-none">
                        <div className="flex gap-1">
                           <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                           <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                           <span className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                     </div>
                   </div>
                 )}
              </div>
           </ScrollArea>

           {/* Chat Input */}
           <div className="bg-white border-t p-4 md:p-6">
              <div className="flex gap-2">
                 <div className="flex-1 flex flex-col gap-1">
                    <Input 
                      placeholder="在这里输入你的问题..."
                      className={cn(
                        "rounded-full px-6 border-slate-200 focus-visible:ring-primary h-12",
                        error && "border-red-500"
                      )}
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        if (error) setError(null);
                      }}
                      onKeyDown={handleKeyPress}
                    />
                    {error && (
                      <span className="text-xs text-red-500 ml-6 mt-1">{error}</span>
                    )}
                 </div>
                 <Button 
                   onClick={handleSend}
                   className="rounded-full w-12 h-12 shrink-0 p-0 shadow-lg shadow-primary/20"
                 >
                    <Send className="w-5 h-5" />
                 </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 ml-2">
                 <span className="text-xs text-muted-foreground mr-1 mt-1">热门提问:</span>
                 {['你是谁？', '怎么联系你？', '你现在在做什么？'].map((q) => (
                    <button 
                      key={q}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 hover:bg-primary/5 hover:text-primary transition-colors border border-transparent hover:border-primary/20"
                    >
                      {q}
                    </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
