'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutText } from '@/lib/data';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(var(--text-primary))] mb-12 text-center">
                        About <span className="text-gradient">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative group"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-[rgb(var(--border-color))] relative">
                                {/* Placeholder for profile image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-hover))] opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center text-[rgb(var(--text-muted))]">
                                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Decorative Border */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-hover))] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                        </motion.div>

                        {/* Bio Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <p className="text-lg text-[rgb(var(--text-secondary))] leading-relaxed">
                                {aboutText.short}
                            </p>

                            <p className="text-lg text-[rgb(var(--text-secondary))] leading-relaxed">
                                {aboutText.long}
                            </p>

                            {/* Stats or Highlights */}
                            <div className="grid grid-cols-3 gap-4 pt-6">
                                {[
                                    { label: 'Publications', value: '4+' },
                                    { label: 'Projects', value: '6+' },
                                    { label: 'Awards', value: '1' },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="text-center p-4 rounded-lg bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))] hover:border-[rgb(var(--accent-primary))] transition-colors duration-200"
                                    >
                                        <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                                        <div className="text-sm text-[rgb(var(--text-muted))] mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
