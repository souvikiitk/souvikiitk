'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(var(--bg-secondary))]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(var(--text-primary))] mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-lg text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
                        Explore my research projects and technical work spanning machine learning, data science, and software engineering.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
