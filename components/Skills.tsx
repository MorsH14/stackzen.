'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Layers, GitBranch, BarChart2, Brain } from 'lucide-react';
import { skills } from '../lib/data';

const iconMap: { [key: string]: React.ReactNode } = {
    Code: <Code className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    GitBranch: <GitBranch className="w-6 h-6" />,
    BarChart: <BarChart2 className="w-6 h-6" />,
    Brain: <Brain className="w-6 h-6" />,
};

const levelColor: { [key: string]: string } = {
    Expert: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
    Advanced: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
};

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-violet-600 dark:text-violet-400 font-bold tracking-wider uppercase mb-4 text-sm">Services & Tools</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">The full stack — no-code to AI</h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        I sit at the intersection of beautiful design, no-code platforms, and AI automation.
                        Here&apos;s what I bring to every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group gradient-border bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/25">
                                {iconMap[skill.icon]}
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{skill.name}</h4>
                                <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${levelColor[skill.level] ?? levelColor.Advanced}`}>
                                    {skill.level}
                                </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
