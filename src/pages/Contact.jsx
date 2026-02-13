import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import QuoteForm from '../components/forms/QuoteForm';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Head Office',
            details: ['Peshawar Road, Rawalpindi, Pakistan']
        },
        {
            icon: <FaPhone />,
            title: 'Phone Numbers',
            details: ['+92 51 1234567', '+92 300 8765432']
        },
        {
            icon: <FaEnvelope />,
            title: 'Email Address',
            details: ['info@bolantraders.com.pk', 'sales@bolantraders.com.pk']
        },
        {
            icon: <FaClock />,
            title: 'Business Hours',
            details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed']
        }
    ];

    return (
        <div className="contact-page">
            {/* Banner */}
            <section className="bg-dark py-20 text-white text-center">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-400">Get in touch with us for any inquiries or support.</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-12 gap-12">
                        {/* Info Column */}
                        <div className="col-span-12 lg:col-span-4">
                            <h2 className="mb-8">Get In <span className="text-secondary">Touch</span></h2>
                            <p className="mb-10 text-gray-600">
                                Have a project in mind or need technical assistance? Our team of experts is ready to help you find the right solution for your electronics and industrial needs.
                            </p>

                            <div className="contact-cards flex flex-col gap-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="contact-info-card bg-white p-6 rounded-lg shadow-sm flex gap-4">
                                        <div className="icon text-primary text-2xl mt-1">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg mb-2">{info.title}</h4>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-500 mb-0">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="col-span-12 lg:col-span-8">
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="map-placeholder bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center">
                    <FaMapMarkerAlt className="text-5xl text-primary mx-auto mb-4" />
                    <h3 className="text-gray-500">Google Map Integration</h3>
                </div>
            </section>
        </div>
    );
};

export default Contact;
