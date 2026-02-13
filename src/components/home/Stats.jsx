import React from 'react';
import { FaProjectDiagram, FaCalendarAlt, FaUsers, FaUserTie } from 'react-icons/fa';
import { statsData } from '../../data/clients';
import './Stats.css';

const Stats = () => {
    const stats = [
        { label: 'Successful Projects', value: statsData.projects, icon: <FaProjectDiagram /> },
        { label: 'Years of Service', value: statsData.yearsOfService, icon: <FaCalendarAlt /> },
        { label: 'Happy Clients', value: statsData.clients, icon: <FaUsers /> },
        { label: 'Expert Employees', value: statsData.employees, icon: <FaUserTie /> },
    ];

    return (
        <section className="stats section-dark">
            <div className="container">
                <div className="grid grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item text-center">
                            <div className="stat-icon mb-4">
                                {stat.icon}
                            </div>
                            <h2 className="stat-value text-white">{stat.value}+</h2>
                            <p className="stat-label text-gray-400 uppercase tracking-wider text-xs">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
