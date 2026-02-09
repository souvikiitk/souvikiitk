'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Award, ExternalLink } from 'lucide-react';
import { publications } from '@/lib/data';
import { Publication } from '@/types';

const typeIcons: Record<Publication['type'], typeof BookOpen> = {
    conference: BookOpen,
    journal: BookOpen,
    workshop: BookOpen,
    preprint: BookOpen,
};

export default function Publications() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="publications" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(var(--text-primary))] mb-4">
                        Publications & <span className="text-gradient">Achievements</span>
                    </h2>
                    <p className="text-lg text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
                        Selected publications from top-tier conferences and journals in machine learning and AI.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {publications.map((pub, index) => {
                        const Icon = typeIcons[pub.type];

                        return (
                            <motion.div
                                key={pub.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-6 rounded-xl bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))] hover:border-[rgb(var(--accent-primary))] hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgb(var(--accent-primary))/10] border border-[rgb(var(--accent-primary))/20] flex items-center justify-center group-hover:bg-[rgb(var(--accent-primary))/20] transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-[rgb(var(--accent-primary))]" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2 group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-200">
                                            {pub.title}
                                        </h3>

                                        {/* Authors */}
                                        <p className="text-sm text-[rgb(var(--text-secondary))] mb-2">
                                            {pub.authors.join(', ')}
                                        </p>

                                        {/* Venue and Year */}
                                        <div className="flex flex-wrap items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                                            <span className="font-medium">{pub.venue}</span>
                                            <span>•</span>
                                            <span>{pub.year}</span>

                                            {/* Type Badge */}
                                            <span className="px-2 py-0.5 text-xs font-medium bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--text-secondary))] rounded capitalize">
                                                {pub.type}
                                            </span>

                                            {/* Award Badge */}
                                            {pub.award && (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-[rgb(var(--accent-primary))/10] text-[rgb(var(--accent-primary))] border border-[rgb(var(--accent-primary))/20] rounded">
                                                    <Award className="w-3 h-3" />
                                                    {pub.award}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Link */}
                                    {pub.link && (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-shrink-0 p-2 rounded-lg hover:bg-[rgb(var(--accent-primary))/10] text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent-primary))] transition-colors duration-200"
                                            aria-label="View publication"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
