'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, GraduationCap, Twitter, Download, Send } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { isValidEmail } from '@/lib/utils';
import { ContactFormData } from '@/types';

const iconMap: Record<string, any> = {
    Mail,
    Github,
    Linkedin,
    GraduationCap,
    Twitter,
};

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<Partial<ContactFormData>>({});
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validate = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        // Simulate form submission
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(var(--bg-secondary))]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(var(--text-primary))] mb-4">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-lg text-[rgb(var(--text-muted))] max-w-2xl mx-auto">
                        Have a question or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--text-secondary))] mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] focus:border-[rgb(var(--accent-primary))] focus:ring-2 focus:ring-[rgb(var(--accent-primary))/20] outline-none transition-all duration-200"
                                    placeholder="Your name"
                                />
                                {errors.name && <p className="mt-1 text-sm text-[rgb(var(--accent-primary))]">{errors.name}</p>}
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--text-secondary))] mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] focus:border-[rgb(var(--accent-primary))] focus:ring-2 focus:ring-[rgb(var(--accent-primary))/20] outline-none transition-all duration-200"
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && <p className="mt-1 text-sm text-[rgb(var(--accent-primary))]">{errors.email}</p>}
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--text-secondary))] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border-color))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] focus:border-[rgb(var(--accent-primary))] focus:ring-2 focus:ring-[rgb(var(--accent-primary))/20] outline-none transition-all duration-200 resize-none"
                                    placeholder="Your message..."
                                />
                                {errors.message && <p className="mt-1 text-sm text-[rgb(var(--accent-primary))]">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-hover))] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-center">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </motion.div>

                    {/* Social Links & CV Download */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* CV Download */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-[rgb(var(--accent-primary))/10] to-[rgb(var(--accent-hover))/10] border border-[rgb(var(--accent-primary))/20]">
                            <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-4">Download Resume</h3>
                            <a
                                href="/cv.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-hover))] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 cursor-pointer"
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-4">Connect With Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = iconMap[social.icon];
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border-color))] hover:border-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-primary))/5] transition-all duration-200 group cursor-pointer"
                                        >
                                            <Icon className="w-5 h-5 text-[rgb(var(--text-muted))] group-hover:text-[rgb(var(--accent-primary))] transition-colors" />
                                            <span className="text-sm font-medium text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors">
                                                {social.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
