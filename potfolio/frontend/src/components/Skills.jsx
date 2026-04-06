import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'React & Next.js', percent: 90, color: 'bg-primary' },
        { name: 'JavaScript / TypeScript', percent: 85, color: 'bg-warning' },
        { name: 'Node.js & Express', percent: 80, color: 'bg-success' },
        { name: 'MongoDB / SQL', percent: 75, color: 'bg-info' },
        { name: 'Bootstrap / CSS', percent: 95, color: 'bg-danger' },
        { name: 'Framer Motion', percent: 70, color: 'bg-secondary' },
    ];

    return (
        <section id="skills" className="py-5 bg-body-tertiary">
            <div className="container py-5">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5 pb-3"
                >
                    <h2 className="display-5 fw-bold mb-3">My Skills</h2>
                    <div className="bg-primary mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
                </motion.div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex flex-column gap-4">
                            {skills.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-medium">{skill.name}</span>
                                        <span className="text-secondary">{skill.percent}%</span>
                                    </div>
                                    <div className="progress" style={{ height: '0.75rem' }}>
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percent}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className={`progress-bar ${skill.color} rounded-pill`}
                                            role="progressbar" 
                                            aria-valuenow={skill.percent} 
                                            aria-valuemin="0" 
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
