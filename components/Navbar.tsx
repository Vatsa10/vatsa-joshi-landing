'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-foreground">
                <Link href="/" className="text-xl font-light tracking-[-0.05em] hover:text-accent transition-colors">
                    Vatsa_Joshi
                </Link>

                <div className="hidden md:flex space-x-12 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-medium uppercase tracking-[0.2em] hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="text-[11px] font-medium uppercase tracking-[0.2em] px-6 py-2 border border-foreground/10 rounded-full hover:bg-foreground hover:text-background transition-all"
                    >
                        Inquire
                    </Link>
                </div>

                <button className="md:hidden text-foreground">
                    <div className="w-5 h-[1px] bg-foreground mb-1.5"></div>
                    <div className="w-5 h-[1px] bg-foreground"></div>
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
