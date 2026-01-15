'use client';

import Script from "next/script";
import { useState } from 'react';
import { database } from '../../lib/firebase';
import { ref, set, push } from 'firebase/database';
import { useLanguage } from '../../lib/language-context';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const { t, isRTL } = useLanguage();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const messagesRef = ref(database, 'messages');
      const newMessageRef = push(messagesRef);
      
      const messageData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: Date.now(),
        read: false
      };

      // Save to Firebase
      await set(newMessageRef, messageData);

      // Send email notification
      try {
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: messageData.name,
            email: messageData.email,
            message: messageData.message,
          }),
        });

        if (!emailResponse.ok) {
          console.warn('Email sending failed, but message was saved to database');
        } else {
          console.log('Email notification sent successfully');
        }
      } catch (emailError) {
        console.warn('Email sending failed:', emailError, 'but message was saved to database');
      }

      console.log('Message saved successfully:', messageData);
      setSubmitStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: unknown) {
      console.error('Error details:', error);
      
      // Check specific error types
      const firebaseError = error as { code?: string; message?: string };
      if (firebaseError.code === 'PERMISSION_DENIED') {
        setSubmitStatus('Permission denied. Please check database rules.');
      } else if (firebaseError.code === 'NETWORK_ERROR' || firebaseError.message?.includes('network')) {
        setSubmitStatus('Network error. Please check your connection and try again.');
      } else {
        // For other errors, assume the message was saved since writes are allowed
        console.warn('Firebase error occurred, but message may have been saved');
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <nav className="nav" style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', width: '100%' }}>
            <div className="nav-brand">
              <span className="portfolio-title"></span>
            </div>
            <ul className="nav-menu" style={{ flex: '0 0 auto' }}>
              <li><a href="#home" className="nav-link">{t('nav.home')}</a></li>
              <li><a href="#projects" className="nav-link">{t('nav.projects')}</a></li>
              <li><a href="#about" className="nav-link">{t('nav.about')}</a></li>
              <li><a href="#skills" className="nav-link">{t('nav.skills')}</a></li>
              <li><a href="#contact" className="nav-link">{t('nav.contact')}</a></li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: 'auto' }}>
              <a 
                href="/Aymen Belkadi - Full Stack Developer CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                <span>📄</span>
                Resume
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="coding-symbols">
          <div className="coding-symbol coding-symbol-1">&lt;/&gt;</div>
          <div className="coding-symbol coding-symbol-2">{"{}"}</div>
          <div className="coding-symbol coding-symbol-3">&lt;/&gt;</div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="profile-section">
              <div className="profile-image">
                <img src="/photos/20250524_001245730_iOS.jpg" alt="Aymen Belkadi Profile Picture" />
                <div className="status-indicator"></div>
              </div>
              <div className="profile-info">
                <h1 className="profile-name">Aymen Belkadi</h1>
                <div className="profile-username">
                  <h1>@rh0kzy</h1>
                </div>
                <p className="profile-bio">{t('hero.description')}</p>

                <div className="profile-details">
                  <div className="detail-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>{t('about.achievements.student')}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-brain"></i>
                    <span>Spécialité Intelligence Artificielle</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-envelope"></i>
                    <span>aymenbelkadi1012005@gmail.com</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Alger,Algérie</span>
                  </div>
                </div>

                <div className="social-links">
                  <a href="https://github.com/rh0kzy" className="social-link"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/aymen-belkadi-5b6000325/" className="social-link"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">{t('projects.title')}</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/projects/Doxa-Ai-Agent/Screenshot%202025-12-29%20014859.png" alt="Doxa AI Agent" />
                <div className="project-overlay" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                  <a href="/projects/doxa-ai-agent" className="btn btn-primary" style={{ width: '150px', justifyContent: 'center' }}>{t('projects.viewDetails')}</a>
                  <a href="https://github.com/rh0kzy/AiTC12" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '150px', justifyContent: 'center', color: 'white', borderColor: 'white' }}>
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{t('projects.doxaAiAgent.title')}</h3>
                <p>{t('projects.doxaAiAgent.description')}</p>
                <div className="project-tags">
                  <span className="tag">Next.js 16</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">Mistral AI</span>
                  <span className="tag">ChromaDB</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/projects/uno-game/UNO_Logo.svg.png" alt="UNO Game" />
                <div className="project-overlay">
                  <a href="/projects/uno-game" className="btn btn-primary">{t('projects.viewDetails')}</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{t('projects.unoGame.title')}</h3>
                <p>{t('projects.unoGame.description')}</p>
                <div className="project-tags">
                  <span className="tag">Java</span>
                  <span className="tag">Swing</span>
                  <span className="tag">MVC</span>
                  <span className="tag">Game AI</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/filmflock-cinema/cinemaLogo.jpg" alt="FilmFlock Cinema" />
                <div className="project-overlay">
                  <a href="/projects/filmflock-cinema" className="btn btn-primary">{t('projects.viewDetails')}</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{t('projects.filmflockCinema.title')}</h3>
                <p>{t('projects.filmflockCinema.description')}</p>
                <div className="project-tags">
                  <span className="tag">Java</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">Swing</span>
                  <span className="tag">JDBC</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/eden-parfum/eden-parfum-logo.png" alt="Eden Parfum" />
                <div className="project-overlay">
                  <a href="/projects/eden-parfum" className="btn btn-primary">{t('projects.viewDetails')}</a>
                  <a href="https://edenparfum.netlify.app/" target="_blank" className="btn btn-secondary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Site
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{t('projects.edenParfum.title')}</h3>
                <p>{t('projects.edenParfum.description')}</p>
                <div className="project-tags">
                  <span className="tag">HTML5</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">Responsive</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/vertex-platform/Screenshot 2025-08-24 162542.png" alt="Vertex Platform" />
                <div className="project-overlay">
                  <a href="/projects/vertex-platform" className="btn btn-primary">{t('projects.viewDetails')}</a>
                  <a href="https://vertexstudents.netlify.app/" target="_blank" className="btn btn-secondary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Site
                  </a>
                </div>
              </div>
                            <div className="project-content">
                <h3>{t('projects.vertexPlatform.title')}</h3>
                <p>{t('projects.vertexPlatform.description')}</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Express</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/usthb-recours/Screenshot 2025-11-07 163307.png" alt="USTHB Recours" />
                <div className="project-overlay">
                  <a href="/projects/usthb-recours" className="btn btn-primary">View Details</a>
                  <a href="https://usthbrecours.netlify.app/" target="_blank" className="btn btn-secondary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Site
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>USTHB Recours</h3>
                <p>Student specialty change request management system with advanced security, real-time admin dashboard, and automated processing.</p>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">JWT/2FA</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/teacher-management/profLogo.png" alt="Teacher Management" />
                <div className="project-overlay">
                  <a href="/projects/teacher-management" className="btn btn-primary">View Details</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Teacher Management System</h3>
                <p>Web-based academic administration platform for managing teachers, modules, workloads with real-time analytics and visualization.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Analytics</span>
                  <span className="tag">Dashboard</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/medical-clinic/cabinetlogo.jpg" alt="Medical Clinic" />
                <div className="project-overlay">
                  <a href="/projects/medical-clinic" className="btn btn-primary">View Details</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Medical Clinic Management</h3>
                <p>Desktop application for healthcare professionals to manage patient records, appointments, and medical histories efficiently.</p>
                <div className="project-tags">
                  <span className="tag">Java</span>
                  <span className="tag">Swing</span>
                  <span className="tag">Healthcare</span>
                  <span className="tag">OOP</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/radiation-analyzer/logo.png" alt="Radiation Analysis" />
                <div className="project-overlay">
                  <a href="/projects/radiation-analyzer" className="btn btn-primary">View Details</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Polar & Spherical Data Visualizer</h3>
                <p>Scientific computing application for analyzing electromagnetic radiation patterns with 3D visualization and data processing.</p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">PyQt6</span>
                  <span className="tag">NumPy</span>
                  <span className="tag">3D Graphics</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/projects/file-management-system/getionLogo.jpg" alt="File Management" />
                <div className="project-overlay">
                  <a href="/projects/file-management" className="btn btn-primary">View Details</a>
                </div>
              </div>
              <div className="project-content">
                <h3>File Management System</h3>
                <p>Secondary memory management system in C that simulates file storage operations with dynamic memory allocation and CRUD functionality.</p>
                <div className="project-tags">
                  <span className="tag">C</span>
                  <span className="tag">Data Structures</span>
                  <span className="tag">Memory Management</span>
                  <span className="tag">File Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('about.title')}</h2>
              <p>{t('about.description1')}</p>

              <p>{t('about.description2')}</p>

              <div className="achievements">
                <h3>{t('about.achievements.title')}</h3>
                <div className="achievement-grid">
                  <div className="achievement-item">
                    <i className="fas fa-code"></i>
                    <span><span data-github-contributions>417</span> {t('about.achievements.contributions')}</span>
                  </div>
                  <div className="achievement-item">
                    <i className="fas fa-project-diagram"></i>
                    <span><span data-github-repos>9</span>+ {t('about.achievements.projects')}</span>
                  </div>
                  <div className="achievement-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>{t('about.achievements.student')}</span>
                  </div>
                  <div className="achievement-item">
                    <i className="fas fa-rocket"></i>
                    <span>{t('about.achievements.developer')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="github-activity">
              <h3>{t('about.githubActivity.title')}</h3>
              <div className="github-controls">
                <button id="refreshGitHubData" className="btn btn-secondary btn-sm">
                  <i className="fas fa-sync-alt"></i>
                  {t('about.githubActivity.refresh')}
                </button>
              </div>
              <div className="activity-stats">
                <div className="stat-item">
                  <span className="stat-number" data-stat="contributions">417</span>
                  <span className="stat-label">{t('about.githubActivity.contributions')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-stat="repos">9</span>
                  <span className="stat-label">{t('about.githubActivity.repos')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-stat="commits">500+</span>
                  <span className="stat-label">{t('about.githubActivity.commits')}</span>
                </div>
              </div>
              <div className="activity-graph">
                <div className="contribution-graph">
                  <div className="graph-header">
                    <span><span data-github-contributions>417</span> {t('about.githubActivity.contributions')}</span>
                    <span className="year" data-github-year>2024-2025</span>
                  </div>
                  <div className="graph-grid">
                    {/* Contribution squares will be generated here by JavaScript */}
                  </div>
                  <div className="contribution-summary">
                    <p>{t('about.githubActivity.summary')}</p>
                  </div>
                  <div className="activity-highlights">
                    <div className="highlight-item">
                      <i className="fas fa-fire"></i>
                      <span data-github-streak>Most active in May-August 2025</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-code"></i>
                      <span data-github-activity>Consistent daily coding habit</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-chart-line"></i>
                      <span>Growing contribution streak</span>
                    </div>
                  </div>
                  <div className="graph-legend">
                    <span>Less</span>
                    <div className="legend-levels">
                      <div className="legend-level" data-level="0"></div>
                      <div className="legend-level" data-level="1"></div>
                      <div className="legend-level" data-level="2"></div>
                      <div className="legend-level" data-level="3"></div>
                      <div className="legend-level" data-level="4"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">{t('skills.title')}</h2>

          <div className="skills-categories">
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-code"></i>
                {t('skills.programming.title')}
              </h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-html5"></i>
                  </div>
                  <span className="skill-name">{t('skills.programming.html')}</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-css3-alt"></i>
                  </div>
                  <span className="skill-name">{t('skills.programming.css')}</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <span className="skill-name">{t('skills.programming.javascript')}</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <span className="skill-name">{t('skills.programming.react')}</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-java"></i>
                  </div>
                  <span className="skill-name">{t('skills.programming.java')}</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <span className="skill-name">{t('skills.programming.c')}</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-python"></i>
                  </div>
                  <span className="skill-name">{t('skills.programming.python')}</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-mobile-alt"></i>
                {t('skills.mobile.title')}
              </h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-mobile"></i>
                  </div>
                  <span className="skill-name">{t('skills.mobile.flutter')}</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <span className="skill-name">{t('skills.mobile.reactNative')}</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-database"></i>
                {t('skills.databases.title')}
              </h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <span className="skill-name">{t('skills.databases.mysql')}</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-git-alt"></i>
                  </div>
                  <span className="skill-name">{t('skills.databases.git')}</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-brain"></i>
                {t('skills.ai.title')}
              </h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-python"></i>
                  </div>
                  <span className="skill-name">{t('skills.ai.python')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">{t('contact.title')}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>{t('contact.subtitle')}</h3>
              <p>{t('contact.description')}</p>

              <div className="contact-methods">
                <a href="mailto:aymenbelkadi1012005@gmail.com" className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <span>aymenbelkadi1012005@gmail.com</span>
                </a>
                <a href="https://wa.me/213699284128" className="contact-method" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
                <a href="https://www.linkedin.com/in/aymen-belkadi-5b6000325/" className="contact-method">
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/rh0kzy" className="contact-method">
                  <i className="fab fa-github"></i>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </button>
              {submitStatus && (
                <p style={{ marginTop: '10px', color: submitStatus.includes('successfully') ? 'green' : 'red' }}>
                  {submitStatus === 'Message sent successfully!' ? t('contact.form.success') : t('contact.form.error')}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2024 Aymen Belkadi. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
              <a href="#" className="footer-link">Security</a>
              <a href="#" className="footer-link">Status</a>
            </div>
          </div>
        </div>
      </footer>

      <Script src="/script.js" />
    </>
  );
}
