import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            title: 'Solar Power Plant - DHA Lahore',
            client: 'DHA Lahore',
            category: 'Power Solutions',
            image: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            title: 'Industrial CCTV Network - Karachi Port',
            client: 'Karachi Port Trust',
            category: 'Security Systems',
            image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            title: 'HVAC System - Islamabad City Center',
            client: 'Park Land Group',
            category: 'Industrial Equipment',
            image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
    ];

    return (
        <div className="projects-page">
            {/* Banner */}
            <section className="bg-dark py-20 text-white text-center">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
                    <p className="text-gray-400">Showcase of our successful implementations across Pakistan.</p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card relative overflow-hidden rounded-lg group">
                                <img src={project.image} alt={project.title} className="w-full h-80 object-cover transition-transform group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-secondary text-xs font-bold uppercase mb-2">{project.category}</span>
                                    <h3 className="text-white text-xl mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4">Client: {project.client}</p>
                                    <Link to="/contact" className="text-white font-bold text-sm border-b-2 border-primary w-fit pb-1">Case Study →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
