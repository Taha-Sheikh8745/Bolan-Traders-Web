import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <h5 className="fade-in">Progress Through Powerful Electronics</h5>
                <h1 className="fade-in">Leading Provider of Full-Stack <br /> <span className="text-secondary">Industrial Solutions</span></h1>
                <p className="fade-in">Trusted by renowned brands all around the world, Bolan Traders is the leading provider ranging from home appliances and consumer electronics to industrial equipment and backup power.</p>
                <div className="hero-actions flex gap-4 fade-in">
                    <Link to="/products" className="btn btn-primary">Our Products</Link>
                    <Link to="/company" className="btn btn-outline">Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
