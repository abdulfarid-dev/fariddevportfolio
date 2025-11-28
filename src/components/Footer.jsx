import React from 'react';
import { Code2, Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <Code2 className="footer-logo-icon" />
            <span className="footer-logo-text">faridDevPortfolio</span>
          </div>
          
          <div className="footer-made-with">
            <span>Made with</span>
            <Heart className="footer-heart" />
            <span>by Farid_dev</span>
          </div>
        </div>
        
        <div className="footer-divider">
          <p>&copy; 2025 Farid Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;