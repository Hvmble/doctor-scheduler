import React from 'react';
import { Link } from 'react-router-dom';

export const NavLink = ({ label, to, onClick }) => {
    const activeRoute = window.location.pathname;

    return (
        <Link
            className={`NavLink ${activeRoute === to ? 'active' : ''}`}
            to={to}
            onClick={onClick}
        >
            {label}
        </Link>
    );
};


