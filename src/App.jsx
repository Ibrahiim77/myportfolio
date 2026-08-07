import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ParticlesBackground from './components/ParticlesBackground';
import confetti from 'canvas-confetti';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Muhammad_Ibrahim_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Resume downloaded successfully! 📄');

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.8 }
      });
    } catch (e) {}
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Canvas Ambient Particles */}
      <ParticlesBackground />

      {/* Glassmorphic Navbar */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Content Sections */}
      <main>
        <Hero onDownloadResume={handleDownloadResume} />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
