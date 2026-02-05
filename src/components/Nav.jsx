import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import LoopingTypingText from './LoopingTypingText';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? { color: 'var(--accent-cyan)' } : {};
    };

    return (
        <nav className="glass-nav">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                {/* Logo / Brand */}
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="text-gradient"><LoopingTypingText texts={["Gurusubramaniam", "Guru"]} /></span>
                </Link>

                {/* Desktop Links */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <Link to="/" style={{ ...isActive('/'), fontWeight: '500' }}>About</Link>
                    <Link to="/experience" style={{ ...isActive('/experience'), fontWeight: '500' }}>Experience</Link>
                    <Link to="/blog" style={{ ...isActive('/blog'), fontWeight: '500' }}>Blog</Link>
                    <div style={{ width: '1px', height: '24px', background: 'var(--glass-border)' }}></div>
                    <a href="mailto:gurusubramaniams@gmail.com" aria-label="Email">
                        <FaEnvelope size={20} />
                    </a>
                    <a href="https://github.com/gurusubramaniam" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={20} />
                    </a>
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: '0',
                    width: '100%',
                    padding: '40px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    textAlign: 'center',
                    borderRadius: '0 0 16px 16px',
                    borderTop: '1px solid var(--glass-border)',
                    background: 'rgba(15, 23, 42, 0.98)', // Much darker for readability
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    zIndex: 999
                }}>
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                        About
                    </Link>
                    <Link
                        to="/experience"
                        onClick={() => setIsOpen(false)}
                        style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                        Experience
                    </Link>
                    <Link
                        to="/blog"
                        onClick={() => setIsOpen(false)}
                        style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                        Blog
                    </Link>
                </div>
            )}

            <style>{`
        .desktop-menu { display: flex; }
        .mobile-toggle { display: none; cursor: pointer; }

        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block; }
        }
      `}</style>
        </nav>
    );
};

export default Nav;
