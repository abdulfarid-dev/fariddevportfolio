import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import '../styles/Header.css';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

      const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
                       ];



  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <Code2 className="logo-icon" />
            <span className="logo-text">faridDevPortfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="mobile-menu-icon" />
            ) : (
              <Menu className="mobile-menu-icon" />
            )}
          </button>
        </div>

        /* Mobile Navigation
        {isMenuOpen && (
          <div className="nav-mobile">
            <nav className="nav-mobile-content">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )} */
      </div>
    </header>
  );
};

export default Header;