import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md shadow-violet-500/25">
                            S
                        </div>
                        <span className="text-lg font-extrabold dark:text-white tracking-tight">Stackzen</span>
                    </div>

                    <p className="text-slate-400 text-sm text-center">
                        © {new Date().getFullYear()} Olamide Alade · Webflow Expert & AI Automation Dev
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
