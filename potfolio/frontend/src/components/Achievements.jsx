import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar } from 'lucide-react';

const Achievements = () => {
    const [achievements] = useState([
        {
            _id: '1',
            title: 'Hackathon Winner',
            date: 'March 2026',
            description: 'First place in university hackathon.'
        },
        {
            _id: '2',
            title: 'Open Source Contributor',
            date: 'Jan 2026',
            description: 'Contributed multiple PRs to major React open source libraries.'
        }
    ]);

    return (
        <section id="achievements" className="py-5 bg-body-tertiary">
            <div className="container py-5">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5 pb-3"
                >
                    <h2 className="display-5 fw-bold mb-3">Achievements</h2>
                    <div className="bg-primary mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
                </motion.div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="timeline position-relative">
                            {achievements.map((item, index) => (
                                <div key={item._id} className="timeline-item position-relative mb-5 d-flex gap-4">
                                    <div className="timeline-icon d-flex align-items-center justify-content-center bg-primary text-white rounded-circle flex-shrink-0" style={{ width: '40px', height: '40px', zIndex: 2}}>
                                        <Trophy size={18} />
                                    </div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="card glass-panel flex-grow-1 border-0 shadow-sm"
                                    >
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center gap-2 mb-2 text-primary fw-medium small">
                                                <Calendar size={14} />
                                                <span>{item.date}</span>
                                            </div>
                                            <h4 className="card-title h5 fw-bold mb-2">{item.title}</h4>
                                            <p className="card-text text-secondary small mb-0">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx="true">{`
                .timeline::before {
                    content: '';
                    position: absolute;
                    top: 20px;
                    bottom: 0;
                    left: 20px;
                    width: 2px;
                    background: var(--bs-primary);
                    opacity: 0.3;
                    z-index: 1;
                }
            `}</style>
        </section>
    );
};

export default Achievements;
