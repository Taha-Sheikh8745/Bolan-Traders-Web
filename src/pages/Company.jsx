import React from 'react';
import { FaHistory, FaBullseye, FaGem, FaAward, FaHandsHelping, FaLightbulb, FaUsers } from 'react-icons/fa';

const Company = () => {
    return (
        <div className="company-page">
            {/* Banner */}
            <section className="bg-dark py-20 text-white text-center">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Our Company</h1>
                    <p className="text-gray-400">The tradition of excellence since 2006.</p>
                </div>
            </section>

            {/* History Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 gap-16 items-center">
                        <div>
                            <h5 className="text-primary font-bold uppercase mb-4">Our Journey</h5>
                            <h2 className="mb-6">Over <span className="text-secondary">17 Years</span> of Excellence</h2>
                            <p className="mb-6 leading-relaxed">
                                BOLAN TRADERS, the tradition of excellence, is a young independent company. Firmly rooted in a heritage of innovation and excellence, founded on 1st October, 2006.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                We work in different derived areas including Lifting Equipment, Industrial Steamers, Generator Sets, Racking Systems, and High Pressure Cleaning Machinery. We are dedicated to providing the most complete range of quality solutions to cater to the wide spectrum of customers.
                            </p>
                            <div className="flex gap-8 mt-10">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-primary">2006</span>
                                    <p className="text-sm font-semibold uppercase tracking-widest mt-2">Founded</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-primary">3,000+</span>
                                    <p className="text-sm font-semibold uppercase tracking-widest mt-2">Projects</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-primary">150+</span>
                                    <p className="text-sm font-semibold uppercase tracking-widest mt-2">Experts</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Company Office" className="rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-2 gap-12">
                        <div className="bg-white p-12 rounded-lg shadow-sm">
                            <div className="text-5xl text-primary mb-6"><FaBullseye /></div>
                            <h3 className="mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide high-quality electronic and industrial solutions that empower businesses and homes through innovation, reliability, and exceptional service. We strive to be the most trusted partner for our clients' technical needs.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-lg shadow-sm">
                            <div className="text-5xl text-secondary mb-6"><FaGem /></div>
                            <h3 className="mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To lead the transformation of Pakistan's industrial landscape by introducing state-of-the-art technologies and sustainable power solutions that drive progress for generations to come.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-white text-center">
                <div className="container">
                    <h5 className="text-primary font-bold uppercase mb-4">Core Values</h5>
                    <h2 className="mb-16">What Drive <span className="text-secondary">Us Forward</span></h2>

                    <div className="grid grid-cols-4 gap-8">
                        <div className="value-item">
                            <div className="text-4xl text-primary mb-4 flex justify-center"><FaAward /></div>
                            <h4>Quality</h4>
                            <p className="text-sm text-gray-500">Uncompromising standards in every product and service.</p>
                        </div>
                        <div className="value-item">
                            <div className="text-4xl text-primary mb-4 flex justify-center"><FaHandsHelping /></div>
                            <h4>Integrity</h4>
                            <p className="text-sm text-gray-500">Honesty and transparency in all our business dealings.</p>
                        </div>
                        <div className="value-item">
                            <div className="text-4xl text-primary mb-4 flex justify-center"><FaLightbulb /></div>
                            <h4>Innovation</h4>
                            <p className="text-sm text-gray-500">Always looking for better, smarter ways to serve our clients.</p>
                        </div>
                        <div className="value-item">
                            <div className="text-4xl text-primary mb-4 flex justify-center"><FaUsers /></div>
                            <h4>Client Focus</h4>
                            <p className="text-sm text-gray-500">Your success is our ultimate goal.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Company;
