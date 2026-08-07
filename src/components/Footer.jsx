import React from 'react';
import { Code, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(5, 8, 15, 0.95)',
        padding: '50px 0 30px 0',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', paddingBottom: '30px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          
          {/* Logo & Tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div 
              style={{ 
                width: '38px', 
                height: '38px', 
                borderRadius: '10px', 
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Code size={20} color="#fff" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
                Muhammad Ibrahim
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                Software Engineer & Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.82rem', gap: '6px' }}
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>

        </div>

        {/* Copyright */}
        <div style={{ paddingTop: '24px', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Muhammad Ibrahim. Built with React.js & Modern CSS.
        </div>
      </div>
    </footer>
  );
}
