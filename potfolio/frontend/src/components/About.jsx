import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, PlayCircle, BookOpen, Smartphone } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const stats = [
        { label: 'Projects Built', value: '3+' },
        { label: 'Certifications', value: '2' },
        { label: 'Languages Known', value: '3' },
        { label: 'Weeks of Training', value: '6+' },
    ];

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
                                src={profileImg} 
                                alt="Sauraf Kumar" 
                                className="w-100 rounded-3 object-fit-cover"
                                style={{ maxHeight: '450px' }}
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
                        <h3 className="h2 fw-semibold mb-3">BCA Graduate & Aspiring IT Professional</h3>
                        <p className="text-secondary mb-4 lh-lg">
                            I'm Sauraf Kumar, a BCA graduate from <strong>DAVV University, Indore</strong> and currently enrolled in the <strong>ITEP (IT Enhancement Program)</strong> at Infobeans Foundation — a 9:30 AM–5:30 PM daily program covering Technical Skills, Aptitude Preparation, and Soft Skills.
                        </p>
                        <p className="text-secondary mb-4 lh-lg">
                            I'm passionate about building modern web applications and actively working toward my goal of entering the IT industry as a <strong>Frontend / Web Developer</strong>. I also run <strong>Saurav Education</strong> on YouTube, creating content for BCA students on DBMS, Java, Computer Networks, and more.
                        </p>

                        {/* Stats */}
                        <div className="row g-3 mb-4">
                            {stats.map((s, i) => (
                                <div key={i} className="col-6">
                                    <div className="glass-panel rounded-3 p-3 text-center">
                                        <div className="h3 fw-bold text-primary mb-0">{s.value}</div>
                                        <div className="small text-secondary">{s.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="row g-3">
                            {[
                                { icon: <Layout size={20} />, label: 'Frontend Dev', color: 'bg-primary' },
                                { icon: <Server size={20} />, label: 'Backend Dev', color: 'bg-primary' },
                                { icon: <Database size={20} />, label: 'MySQL & ORM', color: 'bg-success' },
                                { icon: <Smartphone size={20} />, label: 'Android (Java)', color: 'bg-warning' },
                                { icon: <PlayCircle size={20} />, label: 'YouTuber', color: 'bg-danger' },
                                { icon: <BookOpen size={20} />, label: 'DSA & Python', color: 'bg-info' },
                            ].map((item, i) => (
                                <div className="col-6" key={i}>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className={`p-2 ${item.color} bg-opacity-10 text-${item.color.replace('bg-','')} rounded-3`}>
                                            {item.icon}
                                        </div>
                                        <span className="fw-medium small">{item.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
