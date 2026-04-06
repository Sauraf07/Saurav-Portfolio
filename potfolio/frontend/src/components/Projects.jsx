import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
    const [projects] = useState([
        {
            _id: '1',
            title: 'Job Portal Application',
            description: 'A full-stack Job Portal using modern technologies.',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
            githubLink: '#',
            liveLink: '#'
        },
        {
            _id: '2',
            title: 'E-commerce Platform',
            description: 'A scalable application with shopping cart and payment integration.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2065&auto=format&fit=crop',
            techStack: ['Next.js', 'Bootstrap', 'Firebase'],
            githubLink: '#',
            liveLink: '#'
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
                            <div className="card h-100 glass-panel border-0 shadow-sm overflow-hidden text-decoration-none group hover-lift">
                                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                                    <img 
                                        src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80"} 
                                        alt={project.title} 
                                        className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-scale"
                                    />
                                    <div className="position-absolute inset-0 bg-dark bg-opacity-50 opacity-0 d-flex align-items-center justify-content-center gap-3 transition-opacity overlay-links">
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
