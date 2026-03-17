'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // ✅ Validation
        if (!formState.name || !formState.email || !formState.message) {
            alert("All fields are required");
            return;
        }

        try {
            setIsSubmitting(true);

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });

            const data = await res.json();

            // ✅ Check if request actually succeeded
            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            // ✅ Success
            setFormState({ name: '', email: '', message: '' });
            alert("Message sent successfully!");

        } catch (error: any) {
            console.error(error);
            alert(error.message || "Failed to send message");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-32 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-violet-600 dark:text-violet-400 font-bold tracking-wider uppercase mb-4 text-sm">Get In Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Let&apos;s build something great together</h3>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                            Got a Webflow project or an automation idea? Tell me about it — I&apos;ll reply within 24 hours.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:midemorsh@gmail.com" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-600 transition-colors group">
                                <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/20 rounded-full flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Email</p>
                                    <p className="font-semibold text-slate-900 dark:text-white">midemorsh@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex gap-3">
                                <a target="_blank" href="https://x.com/midemorsh" className="flex-1 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-600 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
                                    <Twitter className="w-4 h-4" />
                                    Twitter
                                </a>
                                <a target="_blank" href="https://linkedin.com/in/olamide-alade-a86304360" className="flex-1 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-600 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>
                                <a target="_blank" href="https://github.com/MorsH14" className="flex-1 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-600 text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all text-sm"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all text-sm"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Project Details</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none text-sm"
                                        placeholder="Tell me about your Webflow site or automation project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}