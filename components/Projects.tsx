'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "OmniHealth",
        number: "01",
        category: "SaaS",
        description: "A comprehensive health monitoring system built with high-performance graph databases.",
        link: "#"
    },
    {
        title: "Arcane Voice",
        number: "02",
        category: "AI",
        description: "Real-time AI voice processing engine with sub-200ms latency.",
        link: "#"
    },
    {
        title: "Minimalist E-Com",
        number: "03",
        category: "Design",
        description: "A conversion-optimized shopping experience focusing on high-end typography.",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-24">
                    <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-accent mb-6 inline-block">02 / Selected Works</span>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tighter">Featured <br />Archive.</h2>
                </div>

                <div className="space-y-0">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group py-12 border-b border-foreground/[0.05] flex flex-col md:flex-row md:items-center justify-between gap-8 hover:px-4 transition-all"
                        >
                            <div className="flex items-center gap-12">
                                <span className="font-mono text-[11px] text-foreground/20">{project.number}</span>
                                <div className="space-y-1">
                                    <h3 className="text-2xl md:text-3xl font-light tracking-tight group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-medium">/{project.category}</p>
                                </div>
                            </div>

                            <p className="text-sm text-foreground/40 font-light max-w-xs">{project.description}</p>

                            <a href={project.link} className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-foreground/40 group-hover:text-foreground transition-colors">
                                View <ExternalLink className="w-3 h-3" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
