'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { tools } from '../lib/data';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-100" />

            {/* Gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/15 dark:bg-violet-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/8 dark:bg-cyan-400/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/50 text-violet-700 dark:text-violet-300 text-sm font-semibold"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <Sparkles className="w-3.5 h-3.5" />
                        Available for Q2 2026 Projects
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[86px] font-black tracking-tight mb-6 leading-[1.05] text-slate-900 dark:text-white"
                    >
                        Beautiful Webflow sites.{' '}
                        <br className="hidden sm:block" />
                        <span className="shimmer-text">
                            AI workflows
                        </span>
                        {' '}that run{' '}
                        <br className="hidden sm:block" />
                        themselves.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Hi, I&apos;m <strong className="text-slate-900 dark:text-white font-bold">Olamide Alade</strong> — I design
                        premium Webflow sites and build AI automations that save your
                        team 20+ hours a week.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all shadow-xl shadow-violet-500/25 flex items-center justify-center gap-2"
                        >
                            See My Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-full font-semibold text-lg hover:border-violet-500 dark:hover:border-violet-500 transition-all"
                        >
                            Book a Free Call
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-20"
                    >
                        {[
                            { value: '50+', label: 'Webflow Sites' },
                            { value: '100+', label: 'Automations Built' },
                            { value: '6+', label: 'Years Experience' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scrolling tools marquee */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-sm py-4">
                <div className="flex animate-marquee whitespace-nowrap">
                    {tools.map((tool, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 mx-6 text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest"
                        >
                            <span className="w-1.5 h-1.5 bg-violet-400 dark:bg-violet-600 rounded-full" />
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
