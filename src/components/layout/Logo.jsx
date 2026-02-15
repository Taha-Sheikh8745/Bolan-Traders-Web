import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "" }) => {
    return (
        <Link to="/" className={`flex items-center gap-2 group ${className}`}>
            <div className="flex items-center justify-center bg-[#1a3a8a] text-white font-bold text-2xl w-12 h-12 rounded-sm transform transition-transform group-hover:scale-105">
                BT
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-[#1a3a8a] font-black text-2xl tracking-tighter">BOLAN</span>
                <span className="text-[#1a3a8a] font-bold text-xl tracking-[0.2em] mt-1">TRADERS</span>
            </div>
        </Link>
    );
};

export default Logo;
