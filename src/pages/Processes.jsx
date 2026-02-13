import React from 'react';
import { FaCheckCircle, FaLightbulb, FaCogs, FaHandsHelping } from 'react-icons/fa';

const Processes = () => {
    const steps = [
        {
            icon: <FaLightbulb />,
            title: 'Consultation',
            desc: 'We start by understanding your specific business needs and technical requirements.'
        },
        {
            icon: <FaCogs />,
            title: 'Design & Solution',
            desc: 'Our engineering team designs a customized electronics or industrial solution for you.'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Implementation',
            desc: 'Expert installation and commissioning of the equipment by our certified staff.'
        },
        {
            icon: <FaHandsHelping />,
            title: 'Support',
            desc: 'Continuous maintenance and repair services to ensure maximum uptime.'
        }
    ];

    return (
        <div className="processes-page">
            {/* Banner */}
            <section className="bg-dark py-20 text-white text-center">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Our Processes</h1>
                    <p className="text-gray-400">How we deliver excellence to our clients.</p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header text-center mb-16">
                        <h5 className="text-primary uppercase tracking-widest font-bold">What We Do</h5>
                        <h2>Our <span className="text-secondary">Working Process</span></h2>
                    </div>

                    <div className="grid grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="process-step text-center relative">
                                <div className="step-icon-wrapper w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-primary border-4 border-gray-50 shadow-sm relative z-2">
                                    {step.icon}
                                    <div className="step-number absolute -top-2 -right-2 w-8 h-8 bg-secondary-dark text-white rounded-full flex items-center justify-center text-xs font-bold">
                                        0{index + 1}
                                    </div>
                                </div>
                                <h3 className="mb-4">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

                                {index < steps.length - 1 && (
                                    <div className="step-connector absolute top-12 left-1/2 w-full h-1 bg-gray-100 -z-1 hidden lg:block"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-2 gap-16 items-center">
                        <div>
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Process" className="rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <h5 className="text-primary font-bold uppercase mb-4">Why Bolan Traders?</h5>
                            <h2 className="mb-8">Dedicated to <span className="text-secondary">Quality & Innovation</span></h2>
                            <div className="features-list flex flex-col gap-6">
                                <div className="feature flex gap-4">
                                    <div className="text-2xl text-primary mt-1"><FaCheckCircle /></div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Over 25 Years of Experience</h4>
                                        <p className="text-gray-500 text-sm">Decades of providing reliable electronics and industrial equipment in Pakistan.</p>
                                    </div>
                                </div>
                                <div className="feature flex gap-4">
                                    <div className="text-2xl text-primary mt-1"><FaCheckCircle /></div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Nationwide Support Network</h4>
                                        <p className="text-gray-500 text-sm">Branches in major cities like Rawalpindi, Karachi, and Islamabad for fast response.</p>
                                    </div>
                                </div>
                                <div className="feature flex gap-4">
                                    <div className="text-2xl text-primary mt-1"><FaCheckCircle /></div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">Genuine Spare Parts</h4>
                                        <p className="text-gray-500 text-sm">We only provide original components to ensure longevity for your systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Processes;
