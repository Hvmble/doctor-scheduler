import React, { useRef } from 'react'
import { navbarLinks } from '../utils/navbarLinks'
import { NavLink } from './NavLink'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header className="Header-container">
            <img src="/logo.png" alt="Logo Colraices" width={70} height={60} />

            <nav ref={navRef}>
                <button className="Header-btn-close" onClick={showNavBar}>
                    <img src="/icons/close_icon.svg" alt="Close icon" width={14} height={14} />
                </button>
                <Link href="/">
                    <img
                        src="/logo.png"
                        alt=""
                        width={70}
                        height={60}
                    />
                </Link>
                {navbarLinks?.map((link) => (
                    <NavLink key={link.href} label={link.label} to={link.href} />
                ))}
            </nav>

            <button className="Header-btn-open" onClick={showNavBar}>
                <img
                    src="/icons/hamburguer_icon.svg"
                    alt="Hamburgures icon"
                    width={17}
                    height={11}
                />
            </button>
        </header>
  )
}
