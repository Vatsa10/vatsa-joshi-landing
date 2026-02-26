'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block text-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-8">
                        Student + Developer
                    </span>
                    <h1 className="text-5xl md:text-8xl font-light leading-[1.1] tracking-[-0.05em] mb-10 text-foreground">
                        Designing <span className="italic">minimal</span> <br />
                        software for the web.
                    </h1>
                    <p className="text-base md:text-lg text-foreground/50 max-w-lg font-light leading-relaxed mb-12 tracking-tight">
                        I am Vatsa Joshi. I focus on high-fidelity interfaces and clean engineering, adhering to a soft-minimalist aesthetic that prioritizes clarity and speed.
                    </p>

                    <div className="flex flex-wrap gap-8 items-center">
                        <button className="group flex items-center gap-2 text-foreground font-medium text-sm tracking-tight transition-all">
                            <span className="border-b border-foreground/20 group-hover:border-accent pb-1 transition-all">Explore Projects</span>
                            <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                        <button className="text-foreground/40 hover:text-foreground font-medium text-sm tracking-tight transition-all">
                            Get in touch
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Extremely subtle decorative element */}
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

            {/* Subtle numbers/metric for developer feel */}
            <div className="absolute bottom-12 right-12 hidden md:block">
                <div className="font-mono text-[10px] text-foreground/10 tracking-[0.5em] uppercase vertical-text">
                    v.2026 / series_01
                </div>
            </div>
        </section>
    );
};

export default Hero;
