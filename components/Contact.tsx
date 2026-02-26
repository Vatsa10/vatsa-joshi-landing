'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-background border-t border-foreground/[0.03]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl">
                    <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-accent mb-6 inline-block">03 / Connection</span>
                    <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-12 leading-tight">
                        Starting something <br />
                        impactful? <span className="text-foreground/20 italic">Let&apos;s talk.</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 md:items-center">
                        <a href="mailto:hello@vatsajoshi.com" className="text-2xl md:text-3xl font-light tracking-tight hover:text-accent transition-colors border-b border-foreground/10 pb-2">
                            hello@vatsajoshi.com
                        </a>

                        <div className="flex gap-8 items-center">
                            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                                <a key={social} href="#" className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-12 border-t border-foreground/[0.03] flex justify-between items-end">
                    <div className="space-y-4">
                        <div className="text-xl font-light tracking-tighter">VJ.</div>
                        <p className="text-[10px] text-foreground/20 uppercase tracking-widest font-mono">
                            Digital Architect © 2026
                        </p>
                    </div>

                    <div className="text-[10px] text-foreground/20 uppercase tracking-widest font-mono">
                        FAFAFA_WHITE / SATOSHI_SLIM
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
