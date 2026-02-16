import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo2.png';

const Logo = ({ className = "" }) => {
    return (
        <Link to="/" className={`logo-wrapper ${className}`}>
            <img
                src={logoImg}
                alt="Bolan Traders Logo"
                className="logo-img"
            />
        </Link>
    );
};

export default Logo;
