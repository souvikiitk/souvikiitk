'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'relative inline-flex h-10 w-10 items-center justify-center rounded-lg',
                'border border-[rgb(var(--border-color))]',
                'bg-[rgb(var(--bg-secondary))] hover:bg-[rgb(var(--bg-tertiary))]',
                'transition-all duration-200 ease-in-out',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent-primary))] focus-visible:ring-offset-2',
                'cursor-pointer group'
            )}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {/* Sun icon (visible in dark mode) */}
            <Sun
                className={cn(
                    'absolute h-5 w-5 text-[rgb(var(--text-primary))]',
                    'transition-all duration-300 ease-in-out',
                    'group-hover:scale-110',
                    theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                )}
            />

            {/* Moon icon (visible in light mode) */}
            <Moon
                className={cn(
                    'absolute h-5 w-5 text-[rgb(var(--text-primary))]',
                    'transition-all duration-300 ease-in-out',
                    'group-hover:scale-110',
                    theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                )}
            />
        </button>
    );
}
