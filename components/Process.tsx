'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Code, Zap } from 'lucide-react';
import { processSteps } from '../lib/data';

const iconMap: { [key: string]: React.ReactNode } = {
    Sparkles: <Sparkles className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
};

export default function Process() {
    return (
        <section id="process" className="py-32 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-violet-600 dark:text-violet-400 font-bold tracking-wider uppercase mb-4 text-sm">My Process</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">From brief to live in weeks</h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        A clear, collaborative process that eliminates surprises and
                        delivers results you can rely on.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="group bg-slate-50 dark:bg-slate-800/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 h-full hover:border-violet-400 dark:hover:border-violet-600 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-all duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-5xl font-black text-slate-200 dark:text-slate-700 group-hover:text-violet-200 dark:group-hover:text-violet-900/50 transition-colors leading-none">
                                        {step.number}
                                    </span>
                                    <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-500 rounded-full flex items-center justify-center text-white shadow-md shadow-violet-500/25">
                                        {iconMap[step.icon]}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector arrow */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 items-center justify-center">
                                    <div className="w-2 h-2 border-t-2 border-r-2 border-slate-300 dark:border-slate-600 rotate-45 -translate-x-1" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
