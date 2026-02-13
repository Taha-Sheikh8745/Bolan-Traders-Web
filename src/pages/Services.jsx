import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllServices } from '../features/services/servicesSlice';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';

const Services = () => {
    const services = useSelector(selectAllServices);

    const getIcon = (iconName) => {
        const IconComponent = Icons[iconName];
        return IconComponent ? <IconComponent /> : <Icons.FaTools />;
    };

    return (
        <div className="services-page">
            {/* Banner */}
            <section className="bg-dark py-20 text-white text-center">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-gray-400">Professional support and maintenance for your industrial systems.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="service-card bg-white p-10 rounded-lg shadow-md hover-lift transition-all">
                                <div className="service-icon text-5xl text-primary mb-6">
                                    {getIcon(service.icon)}
                                </div>
                                <h3 className="mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-8">{service.description}</p>
                                <div className="service-features mb-8">
                                    <ul className="list-unstyled">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                                                <span className="text-primary">✓</span> {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link to="/contact" className="text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                    Inquire Now <span>→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container">
                    <h2 className="text-white mb-6">Need a Custom Service Solution?</h2>
                    <p className="mb-10 text-xl opacity-90">Our technical team is ready to design a maintenance plan that fits your business.</p>
                    <Link to="/contact" className="btn btn-outline" style={{ border: '2px solid white' }}>Talk to an Expert</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
