import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="nav-brand">
              <span className="portfolio-title"></span>
            </div>
            <ul className="nav-menu">
              <li><a href="#home" className="nav-link">Overview</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
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
                <p className="profile-bio">Étudiant en 3ème année d&apos;ingéniorat informatique | Développeur d&apos;applications et web passionné</p>

                <div className="profile-details">
                  <div className="detail-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>3ème année Ingéniorat Informatique</span>
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
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/projects/uno-game/UNO_Logo.svg.png" alt="UNO Game" />
                <div className="project-overlay">
                  <a href="/projects/uno-game" className="btn btn-primary">View Details</a>
                </div>
              </div>
              <div className="project-content">
                <h3>UNO Game</h3>
                <p>A fully functional digital implementation of the classic UNO card game built in Java with custom GUI framework and intelligent AI players.</p>
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
                  <a href="/projects/filmflock-cinema" className="btn btn-primary">View Details</a>
                </div>
              </div>
              <div className="project-content">
                <h3>FilmFlock - Cinema Booking System</h3>
                <p>Comprehensive movie ticket booking system with seat selection, payment processing, and admin panel for cinema management.</p>
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
                  <a href="/projects/eden-parfum" className="btn btn-primary">View Details</a>
                  <a href="https://edenparfum.netlify.app/" target="_blank" className="btn btn-secondary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Site
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Eden Parfum - E-Commerce Website</h3>
                <p>Luxury perfume e-commerce platform with 507+ fragrances, advanced filtering, and responsive design for premium brand showcase.</p>
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
                  <a href="/projects/vertex-platform" className="btn btn-primary">View Details</a>
                  <a href="https://vertexstudents.netlify.app/" target="_blank" className="btn btn-secondary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Site
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Vertex - Academic Platform</h3>
                <p>Comprehensive student portal with Q&A system, academic calculators, and collaborative learning tools built with React.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">Authentication</span>
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
              <h2>About Me</h2>
              <p>I am Aymen Belkadi, a 3rd year Computer Engineering student specializing in Artificial Intelligence. Passionate about application and web development, I combine my academic knowledge with a practical approach to create innovative solutions.</p>

              <p>My engineering journey has enabled me to acquire solid skills in programming, system design, and web development. With <strong><span data-github-contributions>417</span> contributions</strong> on GitHub in the last year, I maintain a consistent coding practice and am constantly seeking new challenges and opportunities to apply my knowledge and develop new skills.</p>

              <div className="achievements">
                <h3>Key Achievements</h3>
                <div className="achievement-grid">
                  <div className="achievement-item">
                    <i className="fas fa-code"></i>
                    <span><span data-github-contributions>417</span> GitHub Contributions</span>
                  </div>
                  <div className="achievement-item">
                    <i className="fas fa-project-diagram"></i>
                    <span><span data-github-repos>9</span>+ Portfolio Projects</span>
                  </div>
                  <div className="achievement-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>AI Engineering Student</span>
                  </div>
                  <div className="achievement-item">
                    <i className="fas fa-rocket"></i>
                    <span>Full-Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="github-activity">
              <h3>GitHub Activity</h3>
              <div className="github-controls">
                <button id="refreshGitHubData" className="btn btn-secondary btn-sm">
                  <i className="fas fa-sync-alt"></i>
                  Refresh GitHub Data
                </button>
              </div>
              <div className="activity-stats">
                <div className="stat-item">
                  <span className="stat-number" data-stat="contributions">417</span>
                  <span className="stat-label">Contributions in the last year</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" data-stat="repos">9</span>
                  <span className="stat-label">Public Repositories</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Commits this year</span>
                </div>
              </div>
              <div className="activity-graph">
                <div className="contribution-graph">
                  <div className="graph-header">
                    <span><span data-github-contributions>417</span> contributions in the last year</span>
                    <span className="year" data-github-year>2024-2025</span>
                  </div>
                  <div className="graph-grid">
                    {/* Contribution squares will be generated here by JavaScript */}
                  </div>
                  <div className="contribution-summary">
                    <p>Consistent coding activity with regular contributions across multiple projects. Strong commitment to continuous learning and development.</p>
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
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-categories">
            {/* Programming Languages */}
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-code"></i>
                Langages de Programmation
              </h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-html5"></i>
                  </div>
                  <span className="skill-name">HTML</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-css3-alt"></i>
                  </div>
                  <span className="skill-name">CSS</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-java"></i>
                  </div>
                  <span className="skill-name">Java</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <span className="skill-name">C</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-python"></i>
                  </div>
                  <span className="skill-name">Python</span>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-mobile-alt"></i>
                Développement Mobile
              </h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-mobile"></i>
                  </div>
                  <span className="skill-name">Flutter</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <span className="skill-name">React Native</span>
                </div>
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-database"></i>
                Bases de Données & Outils
              </h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <span className="skill-name">MySQL</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-git-alt"></i>
                  </div>
                  <span className="skill-name">Git</span>
                </div>
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="skill-category">
              <h3 className="category-title">
                <i className="fas fa-brain"></i>
                Intelligence Artificielle
              </h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className="fab fa-python"></i>
                  </div>
                  <span className="skill-name">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let&apos;s collaborate</h3>
              <p>I&apos;m always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about technology, feel free to reach out!</p>

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

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
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
