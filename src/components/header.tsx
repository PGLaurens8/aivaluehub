"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

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
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary">
              <path d="M15 10H17V12H15V10Z" fill="currentColor"/>
              <path d="M7 10H9V12H7V10Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M4.75 3C5.99264 3 7 4.00736 7 5.25V5.54991C8.04618 5.84524 9.213 6 10.5 6H13.5C14.787 6 15.9538 5.84524 17 5.54991V5.25C17 4.00736 18.0074 3 19.25 3C20.4926 3 21.5 4.00736 21.5 5.25V8.45C21.5 9.17604 21.1396 9.83597 20.5702 10.2792C21.7319 11.239 22.5 12.6042 22.5 14.15C22.5 16.7048 20.4547 18.8 17.9622 18.9813C17.4395 20.1873 16.2943 21 14.9 21H9.1C7.70569 21 6.56052 20.1873 6.03784 18.9813C3.54531 18.8 1.5 16.7048 1.5 14.15C1.5 12.6042 2.26808 11.239 3.42981 10.2792C2.86045 9.83597 2.5 9.17604 2.5 8.45V5.25C2.5 4.00736 3.50736 3 4.75 3ZM5 8V6H4V8H5ZM19 8V6H20V8H19ZM14 13V15H16V17H14V19H12V17H10V15H12V13H14Z" fill="currentColor"/>
            </svg>
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
