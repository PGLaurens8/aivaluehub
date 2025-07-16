"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navItems = [
  { href: '#value-matrix', label: 'Value Matrix' },
  { href: '#understanding-llms', label: 'Understanding LLMs' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#by-the-numbers', label: 'By The Numbers' },
  { href: '#news-updates', label: 'News & Updates' },
  { href: '#outlook', label: 'Future Outlook' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
    
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
          <Link href="#hero" className="text-2xl font-bold font-headline text-foreground">
            AValue
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
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
        </div>
      </nav>
    </header>
  );
}
