'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { NAVIGATION_LINKS, BUSINESS_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll(); // Check on initial load

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pages with a dark background at the top
  const darkHeaderPages = ['/', '/trading-hubs', '/about'];
  const isDarkHeaderPage = darkHeaderPages.includes(pathname);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        !scrolled
          ? 'bg-transparent'
          : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/20'
      )}
    >
      <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              'font-bold text-xl font-heading transition-colors duration-300',
              !scrolled && isDarkHeaderPage ? 'text-white' : 'text-primary-dark'
            )}
          >
            {BUSINESS_INFO.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors duration-300',
                !scrolled && isDarkHeaderPage
                  ? 'text-white hover:text-white/80'
                  : 'text-gray-700 hover:text-accent-green',
                pathname === link.href &&
                  (!scrolled && isDarkHeaderPage
                    ? 'text-white underline underline-offset-4'
                    : 'text-accent-green underline underline-offset-4 decoration-primary-dark')
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                'h-6 w-6 transition-colors duration-300',
                !scrolled && isDarkHeaderPage ? 'text-white' : 'text-primary-dark'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center gap-4 p-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'font-medium text-gray-700 hover:text-accent-green transition-colors w-full text-center py-2',
                  pathname === link.href && 'text-accent-green bg-gray-50 rounded-md'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
