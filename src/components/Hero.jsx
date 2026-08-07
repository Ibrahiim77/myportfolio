import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Terminal, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onDownloadResume }) {
  return (
    <section 
      id="hero" 
      style={{ 
        minHeight: '100vh', 
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="bg-glow-orb bg-glow-orb-1"></div>
      <div className="bg-glow-orb bg-glow-orb-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Main Left Content */}
          <div style={{ maxWidth: '650px' }}>
            
            {/* Status Badge */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '6px 16px', 
                borderRadius: 'var(--radius-full)', 
                background: 'rgba(16, 185, 129, 0.1)', 
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '24px'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
              <span>Software Engineering Student & Full-Stack Enthusiast</span>
            </div>

            {/* Main Greeting Title */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
                fontWeight: 900, 
                lineHeight: 1.1,
                marginBottom: '16px',
                letterSpacing: '-1px'
              }}
            >
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Subtitle */}
            <h2 
              style={{ 
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', 
                color: 'var(--text-main)', 
                fontWeight: 600,
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap'
              }}
            >
              <span>Full-Stack Developer</span>
              <span style={{ color: 'var(--primary)' }}>•</span>
              <span style={{ color: 'var(--text-muted)' }}>Web Applications</span>
            </h2>

            {/* Bio Description */}
            <p 
              style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-muted)', 
                lineHeight: 1.7, 
                marginBottom: '36px' 
              }}
            >
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="#projects" className="btn btn-primary btn-glow">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Get In Touch</span>
              </a>

              <button onClick={onDownloadResume} className="btn btn-secondary" style={{ gap: '8px' }}>
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 600 }}>CONNECT:</span>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '50%', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.3s ease'
                }}
                className="social-hover"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '50%', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.3s ease'
                }}
                className="social-hover"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </div>

          </div>

          {/* Right Visual Tech Terminal Card */}
          <div className="hero-card-wrapper" style={{ position: 'relative' }}>
            <div 
              className="glass-card animate-float"
              style={{
                padding: '28px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Terminal Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-code)' }}>
                  <Terminal size={14} />
                  <span>developer_profile.js</span>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                <p><span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#38bdf8' }}>developer</span> = &#123;</p>
                <p style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#94a3b8' }}>name:</span> <span style={{ color: '#a7f3d0' }}>"{personalInfo.name}"</span>,
                </p>
                <p style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#94a3b8' }}>role:</span> <span style={{ color: '#a7f3d0' }}>"Full Stack Web Developer"</span>,
                </p>
                <p style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#94a3b8' }}>coreTech:</span> [<span style={{ color: '#fde047' }}>"React"</span>, <span style={{ color: '#fde047' }}>"Node.js"</span>, <span style={{ color: '#fde047' }}>"MySQL"</span>, <span style={{ color: '#fde047' }}>"Java"</span>],
                </p>
                <p style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#94a3b8' }}>experience:</span> <span style={{ color: '#a7f3d0' }}>"Al-Khidmat Internship (8wks)"</span>,
                </p>
                <p style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#94a3b8' }}>status:</span> <span style={{ color: '#34d399' }}>"Ready to build & innovate 🚀"</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Quick Highlight Badges */}
              <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>Real-time Apps</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sockets & Web Architecture</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)' }}>API Design</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Express & DB Queries</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div 
          style={{ 
            marginTop: '80px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '24px' 
          }}
        >
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{ 
                padding: '20px 24px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px',
                background: 'rgba(17, 24, 39, 0.4)'
              }}
            >
              <div 
                style={{ 
                  fontSize: '2rem', 
                  fontWeight: 900, 
                  fontFamily: 'var(--font-heading)',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-cyan) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500, lineHeight: 1.3 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .social-hover:hover {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
        }
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
