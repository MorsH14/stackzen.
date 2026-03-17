'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../lib/data';

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
                    <div>
                        <h2 className="text-violet-600 dark:text-violet-400 font-bold tracking-wider uppercase mb-4 text-sm">Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Featured Projects</h3>
                    </div>
                    <a
                        href="#contact"
                        className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 font-semibold transition-colors text-sm"
                    >
                        Start a project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="space-y-28">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}
                        >
                            {/* Image */}
                            <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <a
                                            href={project.liveLink}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                                        >
                                            View Case Study <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-7xl font-black text-slate-100 dark:text-slate-800 leading-none select-none">
                                        0{index + 1}
                                    </span>
                                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                                </div>

                                <h4 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{project.title}</h4>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-7 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3.5 py-1.5 bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/50 rounded-full text-xs font-semibold text-violet-700 dark:text-violet-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 px-4 py-2.5 bg-green-50 dark:bg-green-900/20 rounded-full w-fit border border-green-100 dark:border-green-800/50">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    <span className="text-sm font-bold text-green-700 dark:text-green-400">{project.stats}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
