'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--bg-primary))] via-[rgb(var(--bg-secondary))] to-[rgb(var(--bg-tertiary))]" />

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--bg-primary))/0.5] to-[rgb(var(--bg-primary))]" />

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                {/* Name */}
                <motion.h1
                    variants={item}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                >
                    <span className="text-gradient">Your Name</span>
                </motion.h1>

                {/* Title */}
                <motion.div
                    variants={item}
                    className="text-xl sm:text-2xl md:text-3xl text-[rgb(var(--text-secondary))] font-medium mb-4 space-x-2"
                >
                    <span>Student</span>
                    <span className="text-[rgb(var(--accent-primary))]">|</span>
                    <span>Researcher</span>
                    <span className="text-[rgb(var(--accent-primary))]">|</span>
                    <span>Innovator</span>
                </motion.div>

                {/* Tagline */}
                <motion.p variants={item} className="text-lg sm:text-xl text-[rgb(var(--text-muted))] max-w-2xl mx-auto mb-12">
                    Exploring the frontiers of artificial intelligence to build intelligent systems that make a
                    meaningful impact on the world.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="group inline-flex items-center justify-center px-8 py-3 bg-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-hover))] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                    >
                        View Projects
                        <ChevronDown className="ml-2 h-4 w-4 transform rotate-[-90deg]" />
                    </a>

                    <a
                        href="#contact"
                        className="group inline-flex items-center justify-center px-8 py-3 border-2 border-[rgb(var(--accent-primary))] text-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-primary))] hover:text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1.5,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.5,
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-[rgb(var(--text-muted))] hover:text-[rgb(var(--accent-primary))] transition-colors">
                    <span className="text-sm font-medium">Scroll Down</span>
                    <ChevronDown className="h-6 w-6 animate-bounce" />
                </a>
            </motion.div>
        </section>
    );
}
