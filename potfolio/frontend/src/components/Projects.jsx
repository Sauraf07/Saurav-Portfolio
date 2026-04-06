import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Smartphone, Brain } from 'lucide-react';

const Projects = () => {
    const [projects] = useState([
        {
            _id: '1',
            title: 'Tech Career Navigator',
            description: 'A full-stack career guidance web app with a dark "mission control" theme. Features user authentication (JWT), career guidance dashboard, and complete CRUD operations.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT'],
            githubLink: '#',
            liveLink: '#',
            icon: <Code size={16} />,
            tag: 'Full Stack'
        },
        {
            _id: '2',
            title: 'HealthCare Plus',
            description: 'An Android health application built in Java with XML layouts. Complete Android Studio project structure with modern UI components and health tracking features.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
            techStack: ['Java', 'XML', 'Android Studio', 'Android SDK'],
            githubLink: '#',
            liveLink: null,
            icon: <Smartphone size={16} />,
            tag: 'Android'
        },
        {
            _id: '3',
            title: 'AI Presentation — Our Smart Helper',
            description: 'An 11-slide professional PowerPoint presentation on Artificial Intelligence, designed with a modern dark navy/cyan theme covering AI concepts for educational purposes.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
            techStack: ['Generative AI', 'IBM Watsonx', 'IBM Granite', 'Python'],
            githubLink: null,
            liveLink: null,
            icon: <Brain size={16} />,
            tag: 'AI / IBM SkillsBuild'
        }
    ]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" className="py-5 my-5">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5 pb-3"
                >
                    <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
                    <div className="bg-primary mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
                    <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '550px' }}>
                        Real-world projects built across web, mobile, and AI domains during my learning journey.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="row g-4"
                >
                    {projects.map((project) => (
                        <motion.div key={project._id} variants={itemVariants} className="col-md-6 col-lg-4">
                            <div className="card h-100 glass-panel border-0 shadow-sm overflow-hidden group hover-lift">
                                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-100 h-100 object-fit-cover hover-scale"
                                    />
                                    <div className="position-absolute top-0 start-0 m-2">
                                        <span className="badge bg-primary rounded-pill px-3 py-2 d-flex align-items-center gap-1">
                                            {project.icon} {project.tag}
                                        </span>
                                    </div>
                                    <div className="position-absolute inset-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center gap-3 overlay-links">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-light rounded-circle p-2">
                                                <Code size={20} />
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-light rounded-circle p-2">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold mb-2">{project.title}</h5>
                                    <p className="card-text text-secondary mb-4 flex-grow-1 small">
                                        {project.description}
                                    </p>
                                    <div className="d-flex flex-wrap gap-2 mt-auto">
                                        {project.techStack?.map((tech, idx) => (
                                            <span key={idx} className="badge bg-primary bg-opacity-10 text-primary px-2 py-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <style jsx="true">{`
                .hover-lift {
                    transition: transform 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-8px);
                }
                .hover-scale {
                    transition: transform 0.5s ease;
                }
                .card:hover .hover-scale {
                    transform: scale(1.1);
                }
                .overlay-links {
                    top: 0; bottom: 0; left: 0; right: 0;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .card:hover .overlay-links {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default Projects;
