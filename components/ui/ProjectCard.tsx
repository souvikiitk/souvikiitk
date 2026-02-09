'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-80 rounded-xl overflow-hidden shadow-lg border border-[rgb(var(--border-color))] hover:border-[rgb(var(--accent-primary))] transition-all duration-300 cursor-pointer"
        >
            {/* Image Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-primary))/20] via-[rgb(var(--bg-secondary))] to-[rgb(var(--accent-hover))/20]">
                {/* Placeholder for actual project image */}
                <div className="w-full h-full flex items-center justify-center opacity-20">
                    <svg className="w-24 h-24 text-[rgb(var(--text-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>

            {/* Overlay - reveals on hover */}
            <div className={cn(
                'absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-primary))] via-[rgb(var(--bg-primary))/95] to-[rgb(var(--bg-primary))/80]',
                'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                'flex flex-col justify-end p-6'
            )}>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-2">
                        {project.title}
                    </h3>

                    {/* Long Description */}
                    <p className="text-[rgb(var(--text-secondary))] mb-4 line-clamp-3">
                        {project.longDescription || project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-medium bg-[rgb(var(--accent-primary))/10] text-[rgb(var(--accent-primary))] border border-[rgb(var(--accent-primary))/20] rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--bg-secondary))] hover:bg-[rgb(var(--accent-primary))] text-[rgb(var(--text-primary))] rounded-lg transition-colors duration-200 text-sm font-medium"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github className="w-4 h-4" />
                                Code
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-hover))] text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink className="w-4 h-4" />
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Info (always visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[rgb(var(--bg-primary))/90] to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-1">
                    {project.title}
                </h3>
                <p className="text-[rgb(var(--text-muted))] text-sm line-clamp-2">
                    {project.description}
                </p>
            </div>

            {/* Featured Badge */}
            {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-[rgb(var(--accent-primary))] text-white text-xs font-semibold rounded-full">
                    Featured
                </div>
            )}
        </motion.div>
    );
}
