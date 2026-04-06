import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Database } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-5 my-5 position-relative">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5 pb-3"
                >
                    <h2 className="display-5 fw-bold mb-3">About Me</h2>
                    <div className="bg-primary mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
                </motion.div>

                <div className="row align-items-center g-5">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-md-6"
                    >
                        <div className="glass-panel p-2 rounded-4 shadow-sm">
                            <img 
                                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?fit=crop&w=800&q=80" 
                                alt="Coding setup" 
                                className="w-100 rounded-3 object-fit-cover"
                            />
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-md-6"
                    >
                        <h3 className="h2 fw-semibold mb-3">Crafting digital experiences with passion</h3>
                        <p className="text-secondary mb-4 lh-lg">
                            I am a dedicated Full Stack Developer with a strong proficiency in modern web technologies. My journey in software development started with a curiosity for how things work on the internet, which quickly turned into a passion for building scalable, user-centric applications.
                        </p>
                        <p className="text-secondary mb-5 lh-lg">
                            Whether it's designing highly interactive frontend interfaces or creating robust backend architectures, I enjoy tackling complex problems and delivering high-quality solutions.
                        </p>
                        
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-3">
                                        <Layout size={24} />
                                    </div>
                                    <span className="fw-medium">Frontend</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-3">
                                        <Server size={24} />
                                    </div>
                                    <span className="fw-medium">Backend</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="p-3 bg-success bg-opacity-10 text-success rounded-3">
                                        <Code size={24} />
                                    </div>
                                    <span className="fw-medium">Clean Code</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="p-3 bg-danger bg-opacity-10 text-danger rounded-3">
                                        <Database size={24} />
                                    </div>
                                    <span className="fw-medium">Databases</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
