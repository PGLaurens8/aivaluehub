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
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
            >
              <path 
                d="M18 9.5V5.5C18 4.39543 17.1046 3.5 16 3.5H8C6.89543 3.5 6 4.39543 6 5.5V9.5C6 10.6046 6.89543 11.5 8 11.5H9V13.5H7L4 16.5V11.5C4 10.3954 3.10457 9.5 2 9.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                transform="translate(2, 2) scale(0.8)"
              />
              <path 
                d="M13 11.5H16C17.1046 11.5 18 10.6046 18 9.5V5.5C18 4.39543 17.1046 3.5 16 3.5H8C6.89543 3.5 6 4.39543 6 5.5V9.5C6 10.6046 6.89543 11.5 8 11.5H10" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                transform="translate(2, 2) scale(0.8)"
              >
              </path>
              <path 
                d="M20 9.5H22C23.1046 9.5 24 10.3954 24 11.5V16.5L21 13.5H19V11.5C19 10.3954 18.1046 9.5 17 9.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                transform="translate(-2, 2) scale(0.8)"
              >
              </path>
              <path 
                d="M12 21.5V18.5C12 17.3954 11.1046 16.5 10 16.5H8C6.89543 16.5 6 17.3954 6 18.5V21.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                transform="translate(4, -8) scale(0.8)"
              >
              </path>
              <path 
                d="M9.5 7.5V8.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                transform="translate(2, 2) scale(0.8)"
              />
              <path 
                d="M14.5 7.5V8.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                transform="translate(2, 2) scale(0.8)"
              />
               <path 
                d="M12 5.5V3.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                transform="translate(2, 2) scale(0.8)"
              />
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
