'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Publications from '@/components/sections/Publications';
import Contact from '@/components/sections/Contact';

export default function PortfolioContent() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Publications />
            <Contact />
            <Footer />
        </>
    );
}
