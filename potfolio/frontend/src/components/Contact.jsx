import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });
        
        // Simulating a network request since backend was removed
        setTimeout(() => {
            setStatus({ loading: false, success: true, error: '' });
            setFormData({ name: '', email: '', message: '' });
            
            // Clear success message after 5 seconds
            setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-5 my-5 position-relative">
            <div className="container z-1 position-relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5 pb-3"
                >
                    <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
                    <div className="bg-primary mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
                </motion.div>

                <div className="row g-5">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-lg-5"
                    >
                        <h3 className="h2 fw-bold mb-4">Let's talk about your project</h3>
                        <p className="text-secondary mb-5">
                            Feel free to reach out for collaborations, opportunities, or just a friendly hello. I typically respond within 24 hours.
                        </p>
                        
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex align-items-start gap-3">
                                <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-3">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="h6 fw-semibold text-secondary mb-1">Email</h4>
                                    <p className="mb-0 fs-5 fw-medium">hello@saurafkumar.com</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-3">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="h6 fw-semibold text-secondary mb-1">Phone</h4>
                                    <p className="mb-0 fs-5 fw-medium">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-3">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="h6 fw-semibold text-secondary mb-1">Location</h4>
                                    <p className="mb-0 fs-5 fw-medium">New Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-lg-7"
                    >
                        <form onSubmit={handleSubmit} className="card glass-panel border-0 shadow-sm p-4 p-md-5 rounded-4">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-medium">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-control form-control-lg bg-body text-body"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-medium">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-control form-control-lg bg-body text-body"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-medium">Message</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="form-control bg-body text-body"
                                        style={{ resize: 'none' }}
                                        placeholder="How can I help you?"
                                    ></textarea>
                                </div>
                                
                                {status.error && <div className="col-12 text-danger small">{status.error}</div>}
                                {status.success && <div className="col-12 text-success small">Message sent successfully!</div>}
                                
                                <div className="col-12">
                                    <button 
                                        type="submit" 
                                        disabled={status.loading}
                                        className="btn btn-primary btn-lg w-100 d-flex justify-content-center align-items-center gap-2 py-3"
                                    >
                                        {status.loading ? <Loader2 className="spinner-border spinner-border-sm" /> : <><Send size={20} /> Send Message</>}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
