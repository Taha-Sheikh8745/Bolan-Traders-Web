import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaFax } from 'react-icons/fa';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-cols-4 footer-top">
                    <div className="footer-col">
                        <Logo className="footer-logo" />
                        <p className="footer-desc mt-4">
                            Trusted by renowned brands all around the world, Bolan Traders is the leading provider of full-stack industrial and electronic solutions. From home appliances and consumer electronics to industrial equipment and power solutions!
                        </p>
                        <div className="social-links flex gap-4 mt-4">
                            <a href="https://facebook.com/bolantraders" className="social-link"><FaFacebookF /></a>
                            <a href="#" className="social-link"><FaLinkedinIn /></a>
                            <a href="#" className="social-link"><FaInstagram /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/company">About Us</Link></li>
                            <li><Link to="/team">Our Team</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/blog">Our Blogs</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Product Categories</h4>
                        <ul className="footer-links">
                            <li><Link to="/products/lifting-equipments-parts">Lifting Equipments</Link></li>
                            <li><Link to="/products/industrial-steamers">Industrial Steamers</Link></li>
                            <li><Link to="/products/generator-sets">Generator Sets</Link></li>
                            <li><Link to="/products/racking-system">Racking System</Link></li>
                            <li><Link to="/products/ups">UPS Systems</Link></li>
                            <li><Link to="/products/high-pressure-cleaning">Cleaning Machinery</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Contact Info</h4>
                        <ul className="footer-contact">
                            <li className="flex gap-4">
                                <FaMapMarkerAlt className="icon" />
                                <div>
                                    <p className="mb-1"><strong>Head Office:</strong> Suit # 13, Ground Floor, National Business Centre, Shamsabad Murree Road, Rawalpindi.</p>
                                    <p className="mb-0"><strong>Karachi Office:</strong> Plot No. 1-K 17, Faqir Mohammad Durra Khan Road, Usmanabad, Karachi.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <FaPhone className="icon" />
                                <span>Ph: 021- 6018969, Fax: 021- 2722505</span>
                            </li>
                            <li className="flex gap-4">
                                <FaEnvelope className="icon" />
                                <span>bolan_traders@yahoo.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom flex justify-between items-center py-8">
                    <p>© 2026 Bolan Traders. All Rights Reserved.</p>
                    <p>Designed & Developed by <a href="#" className="text-primary">Antigravity</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
