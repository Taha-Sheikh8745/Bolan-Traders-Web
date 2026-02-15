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
                            <span className="years">17+</span>
                            <span className="text">Years of Excellence</span>
                        </div>
                    </div>
                    <div className="about-content fade-in">
                        <h5 className="text-primary font-bold">Our Company</h5>
                        <h2 className="mb-6">A Tradition of <br /> <span className="text-secondary">Excellence</span></h2>
                        <p>
                            BOLAN TRADERS is a young independent company firmly rooted in a heritage of innovation and excellence since 1st October, 2006. We work in different derived areas providing state-of-the-art industrial solutions.
                        </p>
                        <p className="mb-8">
                            Our wide range of products includes Lifting Equipment, High Pressure Cleaning Machinery, Generator Sets, Racking Systems, and Power Solutions. We are dedicated to providing quality storage and material handling equipment to cater to a wide spectrum of customers.
                        </p>
                        <Link to="/company" className="btn btn-primary">Discover More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
