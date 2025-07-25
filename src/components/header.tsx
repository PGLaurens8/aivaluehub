"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, BotMessageSquare } from 'lucide-react';

const navItems = [
  { href: '#value-matrix', label: 'Value Matrix' },
  { href: '#by-the-numbers', label: 'By The Numbers' },
  { href: '#understanding-llms', label: 'Understanding LLMs' },
  { href: '#everyday-ai', label: 'Everyday AI' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#outlook', label: 'Outlook' },
  { href: '#news-updates', label: 'News' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isSheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href.substring(1)) ? document.querySelector(item.href) : null).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#hero" className="text-2xl font-bold font-headline text-foreground flex items-center gap-2">
            <BotMessageSquare className="h-8 w-8 text-primary" />
            AiValue Hub
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    activeSection === item.href.substring(1)
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
          <div className='md:hidden'>
             <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 pt-8">
                  {navItems.map((item) => (
                    <Button key={item.label} variant="ghost" asChild onClick={() => setSheetOpen(false)}>
                      <Link
                        href={item.href}
                        className={cn(
                          'px-3 py-2 rounded-md text-base font-medium transition-colors',
                          activeSection === item.href.substring(1)
                            ? 'text-primary'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
