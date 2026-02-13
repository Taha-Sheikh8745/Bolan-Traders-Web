import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section className="about section">
            <div className="container">
                <div className="grid grid-cols-2 items-center gap-12">
                    <div className="about-image fade-in">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="About Bolan Traders" className="rounded-lg shadow-xl" />
                        <div className="experience-badge">
                            <span className="years">25+</span>
                            <span className="text">Years of Experience</span>
                        </div>
                    </div>
                    <div className="about-content fade-in">
                        <h5 className="text-primary font-bold">Our Company</h5>
                        <h2 className="mb-6">Progress Through <br /> <span className="text-secondary">Powerful Tools</span></h2>
                        <p>
                            Bolan Traders is not only a name or a company. It is a passion to grow, serve, and excel. Trusted by renowned brands all around the world, Bolan Traders is the leading provider of full-stack industrial solutions, ranging from consumer electronics and warehousing to cleaning and backup power.
                        </p>
                        <p className="mb-8">
                            We offer a myriad of industrial services and solutions to our treasured clients. Our capabilities include material handling equipment, cleaning solutions, racking solutions, custom service contracts, and after-sales services.
                        </p>
                        <Link to="/company" className="btn btn-primary">Discover More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
