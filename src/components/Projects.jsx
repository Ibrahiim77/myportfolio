import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Github, Award, Figma, Layers, Code, ArrowUpRight } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'UI/UX', 'Java & APIs', 'Web Dev'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack': return <Layers size={14} />;
      case 'UI/UX': return <Figma size={14} />;
      case 'Java & APIs': return <Code size={14} />;
      case 'Web Dev': return <ExternalLink size={14} />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={16} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Explore a collection of software engineering solutions, full-stack applications, UI/UX designs, and desktop apps.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '10px', 
            flexWrap: 'wrap', 
            marginBottom: '48px' 
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isActive ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  boxShadow: isActive ? '0 4px 20px rgba(99, 102, 241, 0.35)' : 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '28px' 
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Card Header */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span 
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: project.featured ? 'rgba(168, 85, 247, 0.2)' : 'rgba(99, 102, 241, 0.15)',
                      color: project.featured ? '#c084fc' : '#818cf8',
                      border: project.featured ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    {project.badge}
                  </span>

                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.description}
                </p>
              </div>

              {/* Tech Badges & Actions */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-muted)',
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    {project.links?.certificate && (
                      <a 
                        href={project.links.certificate} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ color: '#f59e0b', display: 'flex', alignItems: 'center' }}
                        title="View Certificate"
                      >
                        <Award size={20} />
                      </a>
                    )}
                    {project.links?.figma && (
                      <a 
                        href={project.links.figma} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ color: '#c084fc', display: 'flex', alignItems: 'center' }}
                        title="Open Figma Prototype"
                      >
                        <Figma size={20} />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ color: '#34d399', display: 'flex', alignItems: 'center' }}
                        title="View Live Demo / Post"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
