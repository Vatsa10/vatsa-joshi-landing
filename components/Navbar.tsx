'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const navLinks = [
        { name: 'INDEX', href: '#about' },
        { name: 'WORK', href: '#projects' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
            <div className="max-w-[1400px] mx-auto px-6 pt-6 flex justify-between items-start pointer-events-auto">

                {/* Brand Module */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex flex-col gap-1"
                >
                    <Link href="/" className="bg-background border border-foreground/[0.05] px-4 py-2 flex items-center gap-3 backdrop-blur-md group hover:border-accent transition-colors">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        <span className="text-[12px] font-medium tracking-[0.2em]">VATSA_JOSHI</span>
                    </Link>
                    <div className="flex gap-1">
                        <div className="h-[1px] w-8 bg-foreground/10"></div>
                        <span className="text-[8px] font-mono text-foreground/20 tracking-tighter uppercase italic">Port_v2.0</span>
                    </div>
                </motion.div>

                {/* Nav Module - Segmented */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="hidden md:flex items-center gap-[1px]"
                >
                    <div className="bg-background border border-foreground/[0.05] p-1 flex gap-[1px] backdrop-blur-md">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-[10px] font-medium tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="bg-background border border-foreground/[0.05] p-1 flex items-center backdrop-blur-md">
                        <Link
                            href="#contact"
                            className="bg-accent text-white px-5 py-2 text-[10px] font-medium tracking-[0.2em] transform transition-transform active:scale-95"
                        >
                            ENQUIRE_
                        </Link>
                    </div>
                </motion.div>

                {/* Status Module */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex flex-col items-end gap-1"
                >
                    <div className="bg-background border border-foreground/[0.05] px-4 py-2 backdrop-blur-md">
                        <span className="text-[11px] font-mono tracking-widest text-foreground/40">
                            {time || '00:00:00'}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[8px] font-mono text-foreground/20 tracking-widest uppercase">SYS_ACTIVE</span>
                        <div className="w-1 h-1 bg-green-500/50 rounded-full"></div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator Line at the top of the screen */}
            <motion.div
                className="absolute top-0 left-0 h-[2px] bg-accent/20 transition-all duration-300"
                style={{ width: `${scrolled ? '100%' : '0%'}` }}
            ></motion.div>
        </div>
    );
};

export default Navbar;
