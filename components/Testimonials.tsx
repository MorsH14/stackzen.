'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../lib/data';

export default function Testimonials() {
    return (
        <section className="py-32 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-violet-600 dark:text-violet-400 font-bold tracking-wider uppercase mb-4 text-sm">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">What clients say</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl hover:shadow-violet-500/8 transition-all duration-300 relative flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base flex-1 mb-8">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-11 h-11 rounded-full object-cover ring-2 ring-violet-100 dark:ring-violet-900/50"
                                />
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
