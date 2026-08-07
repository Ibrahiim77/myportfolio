import React, { useState } from 'react';
import { featuredProject } from '../data/portfolioData';
import { Sparkles, MessageSquare, ShieldCheck, Zap, Layers, Send, UserCheck, ExternalLink, Github, Check } from 'lucide-react';

export default function ConnectHubSpotlight({ onSelectProject }) {
  const [messages, setMessages] = useState([
    { sender: 'Ibrahim (Host)', text: 'Welcome to ConnectHub! Real-time messaging active. 🚀', time: '10:42 AM', isMe: false },
    { sender: 'System', text: 'User auth token verified. WebSockets connected.', time: '10:43 AM', isSystem: true },
    { sender: 'You', text: 'Testing real-time latency and chat stream...', time: '10:44 AM', isMe: true }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg = {
      sender: 'You',
      text: inputVal,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');

    // Simulate real-time bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ConnectHub Bot 🤖',
          text: `Message received: "${inputVal}" via Socket.io event bus!`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: false
        }
      ]);
    }, 900);
  };

  return (
    <section id="connecthub" className="section-padding" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{ background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)', color: '#c084fc' }}>
            <Sparkles size={16} />
            <span>RECENT PROJECT SPOTLIGHT</span>
          </div>
          <h2 className="section-title">
            Connect<span className="gradient-text">Hub</span>
          </h2>
          <p className="section-description">
            A full-stack real-time communication platform built with React, Node.js, Express, Socket.io, and modern security protocols.
          </p>
        </div>

        {/* ConnectHub Spotlight Grid */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '40px', 
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 27, 75, 0.6) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            boxShadow: '0 25px 60px rgba(99, 102, 241, 0.2)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="connecthub-grid">
            
            {/* Left Column: Project Overview & Features */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span 
                  style={{ 
                    padding: '6px 14px', 
                    borderRadius: 'var(--radius-full)', 
                    background: 'rgba(99, 102, 241, 0.2)', 
                    color: '#818cf8', 
                    fontSize: '0.8rem', 
                    fontWeight: 700 
                  }}
                >
                  FULL STACK ARCHITECTURE
                </span>
                <span 
                  style={{ 
                    padding: '6px 14px', 
                    borderRadius: 'var(--radius-full)', 
                    background: 'rgba(16, 185, 129, 0.2)', 
                    color: '#34d399', 
                    fontSize: '0.8rem', 
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }}></span>
                  REAL-TIME ACTIVE
                </span>
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>
                {featuredProject.title}
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                {featuredProject.description}
              </p>

              {/* Feature Highlights Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '28px' }}>
                {featuredProject.keyFeatures.slice(0, 4).map((feat, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      background: 'rgba(255, 255, 255, 0.04)', 
                      padding: '12px 14px', 
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.9rem',
                      color: 'var(--text-main)'
                    }}
                  >
                    <Check size={16} color="#34d399" style={{ flexShrink: 0 }} />
                    <span>{feat.replace(/^[^\s]+\s/, '')}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600, marginBottom: '10px' }}>
                  POWERED BY:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {featuredProject.techStack.map((tech) => (
                    <span 
                      key={tech}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(99, 102, 241, 0.15)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#c084fc'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onSelectProject(featuredProject)}
                  className="btn btn-primary btn-glow"
                >
                  <MessageSquare size={18} />
                  <span>Full Project Details</span>
                </button>
                <a 
                  href={featuredProject.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <Github size={18} />
                  <span>View GitHub Code</span>
                </a>
              </div>

            </div>

            {/* Right Column: Live Interactive ConnectHub Chat Simulator */}
            <div>
              <div 
                style={{ 
                  background: '#0f172a', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
                }}
              >
                {/* Chat Header */}
                <div 
                  style={{ 
                    padding: '16px 20px', 
                    background: 'rgba(30, 41, 59, 0.8)', 
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>
                        CH
                      </div>
                      <span style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', border: '2px solid #0f172a' }}></span>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}># general-channel</div>
                      <div style={{ fontSize: '0.75rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <UserCheck size={12} />
                        <span>Interactive Socket Simulator</span>
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', borderRadius: '10px', fontWeight: 600 }}>
                    DEMO CHAT
                  </span>
                </div>

                {/* Chat Messages Body */}
                <div 
                  style={{ 
                    padding: '20px', 
                    height: '240px', 
                    overflowY: 'auto', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '12px' 
                  }}
                >
                  {messages.map((msg, index) => (
                    <div 
                      key={index}
                      style={{ 
                        alignSelf: msg.isMe ? 'flex-end' : msg.isSystem ? 'center' : 'flex-start',
                        maxWidth: msg.isSystem ? '100%' : '80%'
                      }}
                    >
                      {msg.isSystem ? (
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: '10px', fontFamily: 'var(--font-code)' }}>
                          ⚡ {msg.text}
                        </div>
                      ) : (
                        <div 
                          style={{
                            background: msg.isMe 
                              ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' 
                              : 'rgba(30, 41, 59, 0.9)',
                            color: '#fff',
                            padding: '10px 14px',
                            borderRadius: msg.isMe ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                            fontSize: '0.88rem',
                            border: msg.isMe ? 'none' : '1px solid rgba(255,255,255,0.08)'
                          }}
                        >
                          <div style={{ fontSize: '0.72rem', color: msg.isMe ? '#e0e7ff' : '#94a3b8', fontWeight: 600, marginBottom: '2px', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                            <span>{msg.sender}</span>
                            <span>{msg.time}</span>
                          </div>
                          <div>{msg.text}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat Input Bar */}
                <form 
                  onSubmit={handleSendMessage}
                  style={{ 
                    padding: '12px', 
                    background: 'rgba(30, 41, 59, 0.6)', 
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    gap: '10px'
                  }}
                >
                  <input 
                    type="text"
                    placeholder="Try typing a test message..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    style={{ 
                      flex: 1, 
                      background: 'rgba(15, 23, 42, 0.8)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)', 
                      borderRadius: 'var(--radius-sm)', 
                      padding: '10px 14px', 
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                  <button 
                    type="submit"
                    style={{ 
                      background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                      border: 'none', 
                      borderRadius: 'var(--radius-sm)', 
                      padding: '0 16px', 
                      color: '#fff', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Send size={16} />
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .connecthub-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
