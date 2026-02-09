'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Account for fixed navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-[rgb(var(--bg-primary))/0.8] backdrop-blur-lg border-b border-[rgb(var(--border-color))] shadow-md'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <a
                        href="#"
                        className="text-xl font-bold text-[rgb(var(--text-primary))] hover:text-[rgb(var(--accent-primary))] transition-colors duration-200"
                    >
                        Portfolio
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className={cn(
                                    'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))]',
                                    'font-medium transition-colors duration-200',
                                    'relative group cursor-pointer'
                                )}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(var(--accent-primary))] group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg border border-[rgb(var(--border-color))] hover:bg-[rgb(var(--bg-secondary))] transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6 text-[rgb(var(--text-primary))]"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (hidden by default) */}
                <div className="md:hidden pb-4 pt-2 space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className="block px-4 py-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--bg-secondary))] rounded-lg transition-colors cursor-pointer"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
