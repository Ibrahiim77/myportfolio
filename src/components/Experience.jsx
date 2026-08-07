import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>
            <Briefcase size={16} />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="section-title">
            Internship & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-description">
            Real-world software engineering internship experience, backend API design, database optimizations, and academic foundation.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Internship Timeline Card */}
          {experienceData.map((exp, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '36px',
                position: 'relative',
                borderLeft: '4px solid var(--primary)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 700 }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: '#34d399', fontWeight: 600, background: 'rgba(16, 185, 129, 0.1)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                {exp.description}
              </p>

              {/* Achievements Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {exp.achievements.map((item, iIdx) => (
                  <div 
                    key={iIdx}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '10px', 
                      fontSize: '0.94rem', 
                      color: 'var(--text-main)' 
                    }}
                  >
                    <CheckCircle2 size={18} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Certificate Verification Badge */}
              {exp.certificateUrl && (
                <div style={{ paddingTop: '18px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ gap: '10px', borderColor: 'rgba(245, 158, 11, 0.4)', color: '#fde047' }}
                  >
                    <Award size={18} color="#f59e0b" />
                    <span>View Verified Internship Certificate on LinkedIn</span>
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Education Card */}
          <div 
            className="glass-card"
            style={{
              padding: '36px',
              borderLeft: '4px solid var(--secondary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={22} color="var(--secondary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                  Bachelor of Science in Software Engineering (BSSE)
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  Focused on Software Architecture, Web Development, Object-Oriented Programming, & Databases.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
