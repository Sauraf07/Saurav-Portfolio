import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    const titles = ["Full Stack Developer.", "UI/UX Enthusiast.", "Problem Solver."];
    const [titleIndex, setTitleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            timer = setTimeout(() => {
                setText(currentTitle.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }, 50);
        } else {
            timer = setTimeout(() => {
                setText(currentTitle.substring(0, text.length + 1));
                if (text.length === currentTitle.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            }, 100);
        }
        return () => clearTimeout(timer);
    }, [text, isDeleting, titleIndex]);

    return (
        <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5">
            {/* Background elements - custom CSS in index.css needed for absolute positioning if we avoid Tailwind, we'll use inline styles or bootstrap position utils */}
            <div className="position-absolute rounded-circle animate-blob opacity-25" style={{ top: '25%', left: '25%', width: '400px', height: '400px', backgroundColor: 'var(--bs-primary)', filter: 'blur(100px)', mixBlendMode: 'multiply', zIndex: 0 }}></div>
            <div className="position-absolute rounded-circle animate-blob animation-delay-2000 opacity-25" style={{ top: '33%', right: '25%', width: '400px', height: '400px', backgroundColor: '#6f42c1', filter: 'blur(100px)', mixBlendMode: 'multiply', zIndex: 0 }}></div>
            
            <div className="container position-relative z-1 mb-5 pb-5">
                <div className="row align-items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0"
                    >
                        <h2 className="text-primary fw-semibold tracking-wide fs-5 mb-3">
                            Hello, I'm
                        </h2>
                        <h1 className="display-3 fw-bolder mb-4" style={{ letterSpacing: '-0.02em'}}>
                            Sauraf Kumar
                        </h1>
                        <div className="h2 fw-medium text-secondary mb-4" style={{ minHeight: '3rem'}}>
                            I am a <span className="text-body border-end pe-2">{text}</span>
                        </div>
                        <p className="lead text-secondary mb-5 mx-auto mx-lg-0" style={{ maxWidth: '600px'}}>
                            I build modern, scalable, and fully responsive web applications using the latest technologies. Turning ideas into real life products is my calling.
                        </p>
                        
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                            <a href="#projects" className="btn btn-primary btn-lg rounded-pill px-4 d-flex align-items-center justify-content-center gap-2 shadow">
                                View Work
                                <ArrowRight size={18} />
                            </a>
                            <a href="#" className="btn btn-secondary btn-lg rounded-pill px-4 d-flex align-items-center justify-content-center gap-2">
                                Resume
                                <Download size={18} />
                            </a>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="col-lg-6 d-none d-lg-flex justify-content-end p-5"
                    >
                        <div className="position-relative" style={{ width: '400px', height: '400px' }}>
                            <div className="position-absolute bg-primary rounded-circle opacity-50" style={{ inset: 0, filter: 'blur(60px)' }}></div>
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                                alt="Developer Portrait" 
                                className="w-100 h-100 rounded-circle object-fit-cover position-relative shadow-lg border border-3 border-light"
                                style={{ zIndex: 10 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
