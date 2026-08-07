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
        background: 'rgba(5, 8, 15, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.25s ease-out forwards'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', fontWeight: 700 }}>
              {project.badge}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Category: {project.category}
            </span>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
            {project.title}
          </h2>

          <div style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 600 }}>
            {project.subtitle}
          </div>
        </div>

        {/* Modal Description */}
        <div style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
          {project.longDescription || project.description}
        </div>

        {/* Key Features List */}
        {project.keyFeatures && (
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '14px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="var(--primary)" />
              <span>Key Technical Highlights</span>
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {project.keyFeatures.map((feat, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '10px', 
                    background: 'rgba(255,255,255,0.03)', 
                    padding: '10px 14px', 
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    fontSize: '0.92rem'
                  }}
                >
                  <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div style={{ marginBottom: '32px' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '10px' }}>
            TECHNOLOGIES & FRAMEWORKS:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: '#c084fc',
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {project.links?.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
              <ExternalLink size={18} />
              <span>View Demo</span>
            </a>
          )}
          {project.links?.certificate && (
            <a href={project.links.certificate} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
              <Award size={18} />
              <span>Verified Certificate</span>
            </a>
          )}
          {project.links?.figma && (
            <a href={project.links.figma} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)' }}>
              <Figma size={18} />
              <span>Open Figma Design</span>
            </a>
          )}
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Github size={18} />
              <span>GitHub Repo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
