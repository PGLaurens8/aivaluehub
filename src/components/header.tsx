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
                d="M17.25 10.5H18.75C19.0261 10.5 19.25 10.2761 19.25 10V8.5C19.25 8.22386 19.0261 8 18.75 8H17.25C16.9739 8 16.75 8.22386 16.75 8.5V10C16.75 10.2761 16.9739 10.5 17.25 10.5Z"
                fill="currentColor"
              />
              <path
                d="M5.25 10.5H6.75C7.02614 10.5 7.25 10.2761 7.25 10V8.5C7.25 8.22386 7.02614 8 6.75 8H5.25C4.97386 8 4.75 8.22386 4.75 8.5V10C4.75 10.2761 4.97386 10.5 5.25 10.5Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.75 13.75C2.75 16.3995 4.85051 18.5 7.5 18.5H16.5C19.1495 18.5 21.25 16.3995 21.25 13.75V8.59973C21.25 7.42267 20.6587 6.34773 19.6641 5.6738C18.9244 3.96833 17.3484 2.75 15.5 2.75H8.5C6.65163 2.75 5.07563 3.96833 4.33591 5.6738C3.34131 6.34773 2.75 7.42267 2.75 8.59973V13.75ZM7.5 4.25C5.97005 4.25 4.62772 5.23253 4.14049 6.57703C4.28318 6.53676 4.42876 6.5 4.57608 6.5H4.75C5.02614 6.5 5.25 6.72386 5.25 7V11.5C5.25 11.7761 5.02614 12 4.75 12H3.87513C3.82848 11.916 3.78446 11.8329 3.74312 11.7506C3.70273 11.6702 3.6651 11.5907 3.63028 11.512C3.17822 10.5695 2.92386 9.53912 2.96493 8.5H12V13.75C12 14.1642 11.6642 14.5 11.25 14.5H8.625C7.94798 14.5 7.375 13.927 7.375 13.25V6.5H7.5C7.77614 6.5 8 6.27614 8 6C8 5.72386 7.77614 5.5 7.5 5.5C7.22386 5.5 7 5.72386 7 6V13.25C7 14.2165 7.7835 15 8.625 15H11.25C11.927 15 12.5 14.427 12.5 13.75V6.5H16.5C16.7761 6.5 17 6.72386 17 7V13.25C17 14.2165 17.7835 15 18.625 15H19.375C19.6511 15 19.875 14.7761 19.875 14.5V6.5H19.4239C19.5712 6.5 19.7168 6.53676 19.8595 6.57703C19.3723 5.23253 18.0299 4.25 16.5 4.25H7.5Z"
                fill="currentColor"
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
