import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code } from 'lucide-react';

export default function Navbar({ onDownloadResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--nav-height)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(9, 13, 22, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            textDecoration: 'none',
            color: 'white',
            fontWeight: 800,
            fontSize: '1.4rem',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <div 
            style={{ 
              width: '38px', 
              height: '38px', 
              borderRadius: '10px', 
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
            }}
          >
            <Code size={20} color="#fff" />
          </div>
          <span>
            MI<span style={{ color: 'var(--primary)' }}>.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const sectionKey = link.href.substring(1);
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Resume Download Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <button
            onClick={onDownloadResume}
            className="btn btn-primary btn-glow"
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
          >
            <Download size={16} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle menu"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            padding: '10px',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            width: '100%',
            background: 'rgba(15, 23, 42, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            animation: 'fadeIn 0.3s ease-out forwards'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <span>{link.name}</span>
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onDownloadResume();
            }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '10px' }}
          >
            <Download size={18} />
            <span>Download Resume</span>
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 850px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
