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
              <path d="M7 10.5C7 10.2239 7.22386 10 7.5 10H8.5C8.77614 10 9 10.2239 9 10.5V11.5C9 11.7761 8.77614 12 8.5 12H7.5C7.22386 12 7 11.7761 7 11.5V10.5Z" fill="currentColor"/>
              <path d="M15 10.5C15 10.2239 15.2239 10 15.5 10H16.5C16.7761 10 17 10.2239 17 10.5V11.5C17 11.7761 16.7761 12 16.5 12H15.5C15.2239 12 15 11.7761 15 11.5V10.5Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.27915 6.54911C3.88563 4.29524 5.86016 2.625 8.25 2.625H15.75C18.1398 2.625 20.1144 4.29524 20.7208 6.54911C21.9424 6.9442 22.875 8.05515 22.875 9.375V15.75C22.875 18.0683 21.0183 20.2543 18.7551 20.6121C18.4907 21.0569 18.064 21.375 17.566 21.375H6.43397C5.93602 21.375 5.50933 21.0569 5.24488 20.6121C2.98171 20.2543 1.125 18.0683 1.125 15.75V9.375C1.125 8.05515 2.05756 6.9442 3.27915 6.54911ZM8.25 4.125C6.56522 4.125 5.16339 5.29741 4.71791 6.89233C5.58625 6.52901 6.57462 6.375 7.59375 6.375H16.4062C17.4254 6.375 18.4137 6.52901 19.2821 6.89233C18.8366 5.29741 17.4348 4.125 15.75 4.125H8.25ZM2.625 9.375V15.75C2.625 17.3858 3.90345 18.7542 5.51475 18.9956C5.61741 18.2923 6.1837 17.625 6.93397 17.625H17.066C17.8163 17.625 18.3826 18.2923 18.4852 18.9956C20.0965 18.7542 21.375 17.3858 21.375 15.75V9.375H2.625Z" fill="currentColor"/>
              <path d="M9.5 14.5C9.5 14.2239 9.72386 14 10 14H14C14.2761 14 14.5 14.2239 14.5 14.5C14.5 15.3284 13.8284 16 13 16H11C10.1716 16 9.5 15.3284 9.5 14.5Z" fill="currentColor"/>
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
