import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Team = () => {
    const team = [
        {
            name: 'Usman Bolan',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            name: 'Sarah Ahmed',
            role: 'Operations Manager',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            name: 'Majid Khan',
            role: 'Technical Lead',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            name: 'Zainab Qazi',
            role: 'Sales Director',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        }
    ];

    return (
        <div className="team-page">
            {/* Banner */}
            <section className="bg-dark py-20 text-white text-center">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Our Team</h1>
                    <p className="text-gray-400">The brilliant minds behind Bolan Traders' success.</p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="team-card bg-white rounded-lg overflow-hidden shadow-md hover-lift transition-all">
                                <div className="team-image h-80 overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform hover:scale-110" />
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-xl mb-1">{member.name}</h3>
                                    <p className="text-primary font-semibold text-sm mb-6">{member.role}</p>
                                    <div className="social-icons flex justify-center gap-4 text-gray-400">
                                        <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
                                        <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
                                        <a href="#" className="hover:text-primary transition-colors"><FaEnvelope /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruitment CTA */}
            <section className="py-20 bg-white text-center">
                <div className="container">
                    <h2 className="mb-6">Join Our Growing <span className="text-secondary">Expert Team</span></h2>
                    <p className="mb-10 text-gray-600 max-w-2xl mx-auto">We are always looking for passionate professionals in engineering, sales, and operations to help us build the future of electronic solutions in Pakistan.</p>
                    <a href="/contact" className="btn btn-primary">View Open Positions</a>
                </div>
            </section>
        </div>
    );
};

export default Team;
