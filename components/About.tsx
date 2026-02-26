'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-32 bg-background border-y border-foreground/[0.03]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-accent mb-6 inline-block">01 / Profile</span>
                        <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-10 leading-tight">
                            Elevating the standard <br />
                            of digital interaction.
                        </h2>
                        <div className="space-y-6 text-foreground/60 font-light leading-relaxed tracking-tight max-w-md">
                            <p>
                                I specialize in building interfaces that feel intuitive and alive. My work is defined by a precision-first approach to both design and code.
                            </p>
                            <p>
                                Currently exploring the intersection of AI-assisted development and high-performance frontend architectures.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12">
                        {[
                            { title: "Interface Design", icon: Palette, desc: "Sleek, slim-font focused UI with high attention to whitespace." },
                            { title: "Engineering", icon: Code2, desc: "Type-safe, scalable applications built with Bun and Next.js." },
                            { title: "Open Source", icon: Globe, desc: "Contributing to tools that make the web faster and more accessible." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="flex gap-8 group"
                            >
                                <div className="text-foreground/20 group-hover:text-accent transition-colors pt-1">
                                    <item.icon className="w-5 h-5 stroke-[1.5px]" />
                                </div>
                                <div className="space-y-2 border-b border-foreground/[0.05] pb-6 w-full">
                                    <h3 className="text-lg font-medium tracking-tight uppercase text-[12px] tracking-[0.1em]">{item.title}</h3>
                                    <p className="text-sm text-foreground/40 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
