import React from 'react';
import { X, ExternalLink, Github, Award, Figma, CheckCircle2, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.25s ease-out forwards'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(20px, 4vw, 36px)',
          background: 'rgba(15, 23, 42, 0.96)',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          position: 'relative',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px', paddingRight: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', padding: '3px 10px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', fontWeight: 700 }}>
              {project.badge}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
              {project.category}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
            {project.title}
          </h2>

          <div style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 600 }}>
            {project.subtitle}
          </div>
        </div>

        {/* Modal Description */}
        <div style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
          {project.longDescription || project.description}
        </div>

        {/* Key Features List */}
        {project.keyFeatures && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="var(--primary)" />
              <span>Key Technical Highlights</span>
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {project.keyFeatures.map((feat, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '10px', 
                    background: 'rgba(255,255,255,0.03)', 
                    padding: '9px 12px', 
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.88rem'
                  }}
                >
                  <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '8px' }}>
            TECHNOLOGIES & FRAMEWORKS:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: '#c084fc',
                  fontWeight: 600,
                  fontSize: '0.82rem'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '18px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {project.links?.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ flex: '1 1 auto' }}>
              <ExternalLink size={16} />
              <span>Live Application Demo</span>
            </a>
          )}
          {project.links?.certificate && (
            <a href={project.links.certificate} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', flex: '1 1 auto' }}>
              <Award size={16} />
              <span>Verified Certificate</span>
            </a>
          )}
          {project.links?.figma && (
            <a href={project.links.figma} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)', flex: '1 1 auto' }}>
              <Figma size={16} />
              <span>Open Figma Design</span>
            </a>
          )}
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: '1 1 auto' }}>
              <Github size={16} />
              <span>GitHub Repo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
