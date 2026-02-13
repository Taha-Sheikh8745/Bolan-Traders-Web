import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogs = [
        {
            title: 'Future of Solar Energy in Pakistan',
            date: 'May 12, 2026',
            author: 'Majid Khan',
            excerpt: 'Discover how new solar technologies are making renewable energy more accessible for Pakistani businesses...',
            image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            title: 'Maintenance Tips for Industrial Generators',
            date: 'April 28, 2026',
            author: 'Usman Bolan',
            excerpt: 'Learn the key maintenance steps to ensure your backup power systems never fail you during critical hours...',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            title: 'Smart Home Security Trends 2026',
            date: 'March 15, 2026',
            author: 'Zainab Qazi',
            excerpt: 'How AI and IoT are revolutionizing home security systems and what you should consider for your property...',
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
    ];

    return (
        <div className="blog-page">
            {/* Banner */}
            <section className="bg-dark py-20 text-white text-center">
                <div className="container">
                    <h1 className="text-5xl font-bold mb-4">Industry Insights</h1>
                    <p className="text-gray-400">Latest news, tips, and trends from the world of electronics and industry.</p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="grid grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <div key={index} className="blog-card bg-white rounded-lg shadow-md overflow-hidden hover-lift">
                                <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                                <div className="p-8">
                                    <div className="flex justify-between items-center text-xs text-gray-400 mb-4 font-semibold uppercase tracking-widest">
                                        <span>{blog.date}</span>
                                        <span>By {blog.author}</span>
                                    </div>
                                    <h3 className="text-xl mb-4 hover:text-primary transition-colors cursor-pointer">{blog.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{blog.excerpt}</p>
                                    <Link to="/contact" className="text-primary font-bold text-sm">Read Full Article →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
