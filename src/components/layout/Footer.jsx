import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-cols-4 footer-top">
                    <div className="footer-col">
                        <Link to="/" className="footer-logo">
                            <span className="logo-primary">BOLAN</span>
                            <span className="logo-secondary">TRADERS</span>
                        </Link>
                        <p className="footer-desc mt-4">
                            Trusted by renowned brands all around the world, Bolan Traders is the leading provider of full-stack industrial and electronic solutions. From home appliances and consumer electronics to industrial equipment and power solutions!
                        </p>
                        <div className="social-links flex gap-4 mt-4">
                            <a href="#" className="social-link"><FaFacebookF /></a>
                            <a href="#" className="social-link"><FaTwitter /></a>
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
                            <li><Link to="/products/consumer-electronics">Consumer Electronics</Link></li>
                            <li><Link to="/products/home-appliances">Home Appliances</Link></li>
                            <li><Link to="/products/industrial-equipment">Industrial Equipment</Link></li>
                            <li><Link to="/products/power-solutions">Power Solutions</Link></li>
                            <li><Link to="/products/lighting-solutions">Lighting Solutions</Link></li>
                            <li><Link to="/products/security-systems">Security Systems</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Contact Info</h4>
                        <ul className="footer-contact">
                            <li className="flex gap-4">
                                <FaMapMarkerAlt className="icon" />
                                <span>Head Office: Peshawar Road, Rawalpindi, Pakistan</span>
                            </li>
                            <li className="flex gap-4">
                                <FaPhone className="icon" />
                                <span>+92 51 1234567</span>
                            </li>
                            <li className="flex gap-4">
                                <FaEnvelope className="icon" />
                                <span>info@bolantraders.com.pk</span>
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
