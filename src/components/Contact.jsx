import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) onShowToast('Email copied to clipboard! 📋');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenEmail = () => {
    window.location.href = `mailto:${personalInfo.email}`;
    setTimeout(() => {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, '_blank');
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast('Please complete all required fields.');
      return;
    }

    setSending(true);

    // Simulate network delay & success
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      if (onShowToast) onShowToast('Message sent successfully! Thank you. 🎉');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {}

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(236, 72, 153, 0.1)', borderColor: 'rgba(236, 72, 153, 0.3)', color: '#f472b6' }}>
            <Mail size={16} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-description">
            Have a project in mind, want to collaborate on ConnectHub, or discuss software engineering opportunities? Send a message or reach out directly!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'start' }} className="contact-grid">
          
          {/* Left Column: Direct Contact Info & Quick Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Email Card */}
            <div 
              className="glass-card"
              style={{
                padding: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '12px', 
                    background: 'rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={22} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>DIRECT EMAIL</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{personalInfo.email}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                  title="Copy Email Address"
                >
                  {copied ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleOpenEmail}
                  className="btn btn-primary"
                  style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                  title="Open Mail Client"
                >
                  <span>Mail</span>
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card"
              style={{
                padding: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: '#fff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '12px', 
                    background: 'rgba(10, 102, 194, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Linkedin size={22} color="#0a66c2" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>LINKEDIN PROFILE</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>mohammad-ibrahim77</div>
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700 }}>Connect ↗</span>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card"
              style={{
                padding: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: '#fff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '12px', 
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Github size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600 }}>GITHUB REPOSITORIES</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>ibrahiim77</div>
                </div>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700 }}>Follow ↗</span>
            </a>

          </div>

          {/* Right Column: Interactive Form */}
          <div 
            className="glass-card"
            style={{
              padding: '36px',
              background: 'rgba(15, 23, 42, 0.85)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MessageSquare size={20} color="var(--primary)" />
              <span>Send Me a Direct Message</span>
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <Check size={32} color="#34d399" />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>Message Delivered!</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Thank you for reaching out, Muhammad Ibrahim will respond shortly!
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Your Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry / ConnectHub / Internship opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Your Message *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={sending}
                  className="btn btn-primary btn-glow"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  <Send size={18} />
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
