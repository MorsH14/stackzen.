'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certifications = [
    'Webflow Expert',
    'n8n Certified',
    'OpenAI API',
];

export default function About() {
    return (
        <section id="about" className="py-32 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-blue-500 rounded-3xl opacity-15 blur-2xl" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/r.jpeg"
                                alt="Olamide Alade"
                                className="w-full h-[580px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-white text-lg font-bold">Olamide &quot;Stackzen&quot; Alade</p>
                                <p className="text-slate-300 text-sm">Webflow Expert & AI Automation Dev</p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    {certifications.map((cert) => (
                                        <span
                                            key={cert}
                                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-600/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold"
                                        >
                                            <BadgeCheck className="w-3 h-3" />
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-violet-600 dark:text-violet-400 font-bold tracking-wider uppercase mb-4 text-sm">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
                            Design-led dev.{' '}
                            <span className="text-slate-400 dark:text-slate-500">Automation-first thinking.</span>
                        </h3>

                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                I&apos;m a Webflow Expert and AI automation developer who builds
                                things that look great and work even better behind the scenes.
                                6+ years turning ambitious briefs into high-performance digital
                                products.
                            </p>
                            <p>
                                I&apos;ve helped agencies, SaaS founders, and operators cut manual
                                work, ship faster, and look more premium online — often doing
                                both at once. I wire Webflow sites directly into n8n and Make
                                pipelines so your website doesn&apos;t just look good, it <em>does</em> work.
                            </p>
                            <p>
                                My philosophy: the best automation is invisible, and the best
                                website sells before you&apos;ve said a word. I build both.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-slate-200 dark:border-slate-800">
                            {[
                                { value: '50+', label: 'Webflow Sites' },
                                { value: '6+', label: 'Years Experience' },
                                { value: '100%', label: 'Client Satisfaction' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-4xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
