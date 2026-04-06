import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Award, Briefcase, PlayCircle, GraduationCap } from 'lucide-react';

const Achievements = () => {
    const [achievements] = useState([
        {
            _id: '1',
            title: 'IBM SkillsBuild AI Internship',
            date: 'March – April 2026',
            description: '6-week virtual internship covering Generative AI, Agentic AI, IBM Watsonx, IBM Granite, Python, and Google Colab. Hands-on experience with real-world AI tools.',
            icon: <Award size={18} />,
            tag: 'Internship'
        },
        {
            _id: '2',
            title: 'Sustainable Life Hacks Internship',
            date: '2025',
            description: '8-day hands-on internship focused on sustainability — natural colors, waste paper products, and MSME sales training. Practical industry exposure.',
            icon: <Briefcase size={18} />,
            tag: 'Internship'
        },
        {
            _id: '3',
            title: 'ITEP – Infobeans Foundation',
            date: '2025 – Present',
            description: 'Enrolled in the IT Enhancement Program (ITEP) at Infobeans Foundation, Indore — a structured daily training covering Technical Skills, Aptitude, and Soft Skills (9:30 AM – 5:30 PM).',
            icon: <GraduationCap size={18} />,
            tag: 'Training'
        },
        {
            _id: '4',
            title: 'Saurav Education — YouTube Channel',
            date: 'Ongoing',
            description: 'Running a YouTube channel for BCA students covering DBMS, Java, Computer Networks, IoT, Web Designing, and Motivational content. Building a growing community of learners.',
            icon: <PlayCircle size={18} />,
            tag: 'Content Creation'
        },
        {
            _id: '5',
            title: 'BCA Graduate — DAVV University',
            date: '2022 – 2025',
            description: 'Successfully completed Bachelor of Computer Applications from Devi Ahilya Vishwavidyalaya (DAVV) University, Indore — building a strong foundation in Computer Science.',
            icon: <Trophy size={18} />,
            tag: 'Education'
        },
    ]);

    const tagColors = {
        'Internship': 'bg-success',
        'Training': 'bg-primary',
        'Content Creation': 'bg-danger',
        'Education': 'bg-warning',
    };

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
                    <h2 className="display-5 fw-bold mb-3">Certifications & Achievements</h2>
                    <div className="bg-primary mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
                    <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '550px' }}>
                        Milestones from my journey — internships, education, and content creation.
                    </p>
                </motion.div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="timeline position-relative">
                            {achievements.map((item, index) => (
                                <div key={item._id} className="timeline-item position-relative mb-4 d-flex gap-4">
                                    <div className="timeline-icon d-flex align-items-center justify-content-center bg-primary text-white rounded-circle flex-shrink-0" style={{ width: '40px', height: '40px', zIndex: 2}}>
                                        {item.icon}
                                    </div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="card glass-panel flex-grow-1 border-0 shadow-sm"
                                    >
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                                                <div className="d-flex align-items-center gap-2 text-primary fw-medium small">
                                                    <Calendar size={14} />
                                                    <span>{item.date}</span>
                                                </div>
                                                <span className={`badge ${tagColors[item.tag] || 'bg-secondary'} rounded-pill px-3 small`}>
                                                    {item.tag}
                                                </span>
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
