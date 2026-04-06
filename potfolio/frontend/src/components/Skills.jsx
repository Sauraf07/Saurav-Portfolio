import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            color: 'bg-primary',
            skills: [
                { name: 'React.js', percent: 85 },
                { name: 'HTML & CSS', percent: 90 },
                { name: 'JavaScript (ES6+)', percent: 80 },
                { name: 'Web Designing / Bootstrap', percent: 88 },
            ]
        },
        {
            title: 'Backend & Database',
            color: 'bg-success',
            skills: [
                { name: 'Node.js & Express.js', percent: 75 },
                { name: 'MySQL & Sequelize ORM', percent: 72 },
                { name: 'REST APIs & MVC', percent: 78 },
                { name: 'JWT & bcryptjs (Auth)', percent: 70 },
            ]
        },
        {
            title: 'Languages & Tools',
            color: 'bg-warning',
            skills: [
                { name: 'Python (DSA & OOP)', percent: 70 },
                { name: 'Java & Android Studio', percent: 65 },
                { name: 'ES Modules & OOP', percent: 75 },
                { name: 'Google Colab & AI Tools', percent: 68 },
            ]
        }
    ];

    const techBadges = [
        'React.js', 'Node.js', 'Express.js', 'JavaScript', 'Python', 'Java',
        'HTML5', 'CSS3', 'Bootstrap', 'MySQL', 'Sequelize', 'JWT',
        'Android Studio', 'Google Colab', 'REST API', 'MVC', 'Git', 'VS Code'
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
                    <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '550px' }}>
                        A fresher with hands-on experience across the full web dev stack, Android development, and AI/ML fundamentals.
                    </p>
                </motion.div>

                <div className="row g-4 mb-5">
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                            className="col-lg-4"
                        >
                            <div className="card glass-panel border-0 shadow-sm h-100 p-4 rounded-4">
                                <h5 className={`fw-bold mb-4 text-${cat.color.replace('bg-','')}`}>{cat.title}</h5>
                                <div className="d-flex flex-column gap-4">
                                    {cat.skills.map((skill, index) => (
                                        <div key={skill.name}>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span className="fw-medium small">{skill.name}</span>
                                                <span className="text-secondary small">{skill.percent}%</span>
                                            </div>
                                            <div className="progress" style={{ height: '0.6rem' }}>
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.percent}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: index * 0.1 + catIdx * 0.15 }}
                                                    className={`progress-bar ${cat.color} rounded-pill`}
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
                        </motion.div>
                    ))}
                </div>

                {/* Tech Badge Cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <h5 className="fw-semibold mb-4 text-secondary">Technologies I Work With</h5>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {techBadges.map((tech) => (
                            <span key={tech} className="badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2 fs-6 fw-normal">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
