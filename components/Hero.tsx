'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover duration-1000 select-none pointer-events-none"
                    src="/hero-video.webm"
                />
                {/* Subtle overlay to soften the video against the white theme */}
                <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block text-accent text-[10px] font-medium tracking-[0.3em] uppercase mb-8">
                        Vatsa Joshi // Series_01
                    </span>
                    <h1 className="text-5xl md:text-8xl font-light leading-[1.1] tracking-[-0.05em] mb-10 text-foreground">
                        Designing <span className="italic">minimal</span> <br />
                        software for the web.
                    </h1>
                    <p className="text-base md:text-lg text-foreground/50 max-w-lg font-light leading-relaxed mb-12 tracking-tight">
                        I focus on high-fidelity interfaces and clean engineering, adhering to a soft-minimalist aesthetic that prioritizes clarity and speed.
                    </p>

                    <div className="flex flex-wrap gap-8 items-center">
                        <button className="group flex items-center gap-2 text-foreground font-medium text-sm tracking-tight transition-all">
                            <span className="border-b border-foreground/20 group-hover:border-accent pb-1 transition-all">Explore Projects</span>
                            <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                        <button className="text-foreground/40 hover:text-foreground font-medium text-sm tracking-tight transition-all">
                            View Case Studies
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Subtle numbers/metric for developer feel */}
            <div className="absolute bottom-12 right-12 hidden md:block z-10">
                <div className="font-mono text-[10px] text-foreground/20 tracking-[0.5em] uppercase vertical-text space-y-4">
                    <span>V.2026</span>
                    <span className="block border-l border-foreground/10 h-10 ml-1"></span>
                    <span>43.67°N</span>
                </div>
            </div>

            {/* Scanning line effect for the "techny" vibe */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/10 z-20 animate-scan"></div>
        </section>
    );
};

export default Hero;
