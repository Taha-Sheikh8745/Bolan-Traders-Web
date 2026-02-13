import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaTimes, FaAngleDown, FaSearch } from 'react-icons/fa';
import {
    toggleMobileMenu,
    closeMobileMenu,
    setScrollPosition,
    selectIsMobileMenuOpen,
    selectIsHeaderSticky
} from '../../features/ui/uiSlice';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isMobileMenuOpen = useSelector(selectIsMobileMenuOpen);
    const isHeaderSticky = useSelector(selectIsHeaderSticky);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            dispatch(setScrollPosition(window.scrollY));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch]);

    useEffect(() => {
        dispatch(closeMobileMenu());
    }, [location, dispatch]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Our Company',
            path: '/company',
            dropdown: [
                { name: 'What We Do', path: '/processes' },
                { name: 'Company', path: '/company' },
                { name: 'Team', path: '/team' },
                { name: 'Projects', path: '/projects' }
            ]
        },
        {
            name: 'Products',
            path: '/products',
            dropdown: [
                { name: 'Consumer Electronics', path: '/products/consumer-electronics' },
                { name: 'Home Appliances', path: '/products/home-appliances' },
                { name: 'Industrial Equipment', path: '/products/industrial-equipment' },
                { name: 'Power Solutions', path: '/products/power-solutions' },
                { name: 'Lighting Solutions', path: '/products/lighting-solutions' },
                { name: 'Security Systems', path: '/products/security-systems' }
            ]
        },
        { name: 'Services', path: '/services' },
        { name: 'Processes', path: '/processes' },
        { name: 'Blogs', path: '/blog' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className={`header ${isHeaderSticky ? 'header-sticky' : ''}`}>
            <div className="container flex justify-between items-center">
                <Link to="/" className="logo">
                    <span className="logo-primary">BOLAN</span>
                    <span className="logo-secondary">TRADERS</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className="nav-item"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.name} {link.dropdown && <FaAngleDown className="icon-down" />}
                                </Link>

                                {link.dropdown && activeDropdown === link.name && (
                                    <ul className="dropdown-menu">
                                        {link.dropdown.map((sublink) => (
                                            <li key={sublink.name}>
                                                <Link to={sublink.path}>{sublink.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions flex items-center gap-4">
                    <button className="search-btn"><FaSearch /></button>
                    <Link to="/contact" className="quote-btn">Request Quote</Link>
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => dispatch(toggleMobileMenu())}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name} className="mobile-nav-item">
                            <div className="mobile-nav-link-wrapper flex justify-between items-center">
                                <Link to={link.path}>{link.name}</Link>
                                {link.dropdown && (
                                    <button onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}>
                                        <FaAngleDown className={activeDropdown === link.name ? 'rotate-180' : ''} />
                                    </button>
                                )}
                            </div>
                            {link.dropdown && activeDropdown === link.name && (
                                <ul className="mobile-dropdown">
                                    {link.dropdown.map((sublink) => (
                                        <li key={sublink.name}>
                                            <Link to={sublink.path}>{sublink.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
