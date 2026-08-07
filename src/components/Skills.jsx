import React from 'react';
import { skillsCategories } from '../data/portfolioData';
import { Code2, Layout, Database, Wrench, Brain, Languages } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={22} color="var(--primary)" />;
      case 'Layout': return <Layout size={22} color="var(--secondary)" />;
      case 'Database': return <Database size={22} color="var(--accent-cyan)" />;
      case 'Wrench': return <Wrench size={22} color="var(--accent-emerald)" />;
      case 'Brain': return <Brain size={22} color="#f59e0b" />;
      case 'Languages': return <Languages size={22} color="#ec4899" />;
      default: return <Code2 size={22} />;
    }
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.3)', color: '#38bdf8' }}>
            <Brain size={16} />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text-cyan">Competencies</span>
          </h2>
          <p className="section-description">
            A comprehensive overview of programming languages, web stacks, database management, development tools, and core computer science principles.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '28px' 
          }}
        >
          {skillsCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '30px',
                background: 'rgba(17, 24, 39, 0.65)'
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getIcon(category.icon)}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Progress Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.92rem', fontWeight: 600 }}>
                      <span style={{ color: 'var(--text-main)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>{skill.level}%</span>
                    </div>

                    <div 
                      style={{ 
                        width: '100%', 
                        height: '8px', 
                        background: 'rgba(255, 255, 255, 0.08)', 
                        borderRadius: 'var(--radius-full)', 
                        overflow: 'hidden' 
                      }}
                    >
                      <div 
                        style={{ 
                          width: `${skill.level}%`, 
                          height: '100%', 
                          background: category.title.includes('Language') && !category.title.includes('Spoken')
                            ? 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)'
                            : category.title.includes('Web')
                            ? 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)'
                            : 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)',
                          borderRadius: 'var(--radius-full)',
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
