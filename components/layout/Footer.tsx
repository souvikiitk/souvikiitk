'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[rgb(var(--border-color))]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4">
                    {/* Copyright */}
                    <p className="text-sm text-[rgb(var(--text-muted))]">
                        © {currentYear} Your Name. All rights reserved.
                    </p>

                    {/* Made with love */}
                    <p className="flex items-center justify-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                        Made with{' '}
                        <Heart className="w-4 h-4 text-[rgb(var(--accent-primary))] fill-current animate-pulse" />
                        using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
