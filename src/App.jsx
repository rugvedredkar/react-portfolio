import { useState, useEffect } from 'react';
import './App.css';
import Typed from "typed.js";
import hero from './assets/hero.png';

// Import skill icons
import awsIcon from './assets/skills/aws.png';
// Add more imports as you add more skill icons
// import javaIcon from './assets/skills/java.png';
// import pythonIcon from './assets/skills/python.png';
// etc.

const skillsData = [
  { name: 'Java', icon: '☕', category: 'backend', isImage: false },
  { name: 'C++', icon: '⚙️', category: 'backend', isImage: false },
  { name: 'Python', icon: '🐍', category: 'backend', isImage: false },
  { name: 'Flask', icon: '🌶️', category: 'backend', isImage: false },
  { name: 'Looker Studio', icon: '📊', category: 'tools', isImage: false },
  { name: 'Neo4j', icon: '🔗', category: 'database', isImage: false },
  { name: 'SQL (MySQL)', icon: '🗄️', category: 'database', isImage: false },
  { name: 'Pandas', icon: '🐼', category: 'data', isImage: false },
  { name: 'Tableau', icon: '📈', category: 'tools', isImage: false },
  { name: 'Power BI', icon: '📊', category: 'tools', isImage: false },
  { name: 'HTML5', icon: '🌐', category: 'frontend', isImage: false },
  { name: 'CSS3', icon: '🎨', category: 'frontend', isImage: false },
  { name: 'JavaScript', icon: '⚡', category: 'frontend', isImage: false },
  { name: 'Django', icon: '🎸', category: 'backend', isImage: false },
  { name: 'AWS', icon: awsIcon, category: 'cloud', isImage: true },
  { name: 'Azure', icon: '☁️', category: 'cloud', isImage: false },
  { name: 'Google Cloud', icon: '☁️', category: 'cloud', isImage: false },
  { name: 'Apache Hadoop', icon: '🐘', category: 'bigdata', isImage: false },
  { name: 'Git', icon: '📂', category: 'tools', isImage: false },
  { name: 'Docker', icon: '🐳', category: 'tools', isImage: false },
  { name: 'Kubernetes', icon: '☸️', category: 'tools', isImage: false },
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-bg">
        <div 
          className="gradient-orb orb-1" 
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="gradient-orb orb-3"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Rugved Redkar</span>
          </h1>

          {/* Typed.js animated subtitle */}
          <p className="hero-subtitle">
            <span ref={el => {
              if (el && !el.typed) {
                el.typed = new Typed(el, {
                  strings: ['Full Stack Developer', 'Data Engineer', 'Web App Developer'],
                  typeSpeed: 50,
                  backSpeed: 30,
                  backDelay: 1000,
                  loop: true,
                });
              }
            }} />
          </p>

          <p className="hero-description">
            I create beautiful and functional web experiences. Passionate about 
            building innovative solutions that make a difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Developer at desk" className="hero-img" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects I've Worked On</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">📱</div>
              <h3>Data Migration</h3>
              <p>A backend automation project that streamlined large-scale data transfer between client databases and the Distribution Management System.</p>
              <div className="project-tags">
                <span className="tag">Java</span>
                <span className="tag">SQL Server</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-image">🎨</div>
              <h3>Schedulerr.com</h3>
              <p>A full-stack meeting scheduling application with real-time conflict detection, Google OAuth login, and cloud deployment for seamless collaboration.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">CSS3</span>
                <span className="tag">Flask</span>
                <span className="tag">SQLite3</span>
                <span className="tag">AWS</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-image">📊</div>
              <h3>United Airlines Analytics Dashboard</h3>
              <p>A Tableau dashboard analyzing 1M+ 2023 flight records to evaluate delays and cancellations, revealing United's 10% higher delay rate and key improvement insights.</p>
              <div className="project-tags">
                <span className="tag">Tableau</span>
                <span className="tag">Data Visualization</span>
                <span className="tag">Python</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-image">🤖</div>
              <h3>InvisibleCloak</h3>
              <p>A computer vision Python project that overlays a dynamic invisibility effect using real-time background subtraction and chroma key techniques to mask objects in video.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">OpenCV</span>
                <span className="tag">Image Processing</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - New Icon Grid Layout */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    {skill.isImage ? (
                      <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                    ) : (
                      skill.icon
                    )}
                  </div>
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Senior Full Stack Developer</h3>
                <p className="company">Tech Company Inc.</p>
                <p className="duration">Jan 2022 - Present</p>
                <p className="description">
                  Leading development of web applications, mentoring junior developers, 
                  and implementing best practices across the team.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <p className="company">Digital Solutions Ltd.</p>
                <p className="duration">Jun 2020 - Dec 2021</p>
                <p className="description">
                  Developed and maintained multiple client projects, focusing on 
                  responsive design and performance optimization.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Junior Web Developer</h3>
                <p className="company">StartUp Innovations</p>
                <p className="duration">Jan 2019 - May 2020</p>
                <p className="description">
                  Built user interfaces and collaborated with designers to create 
                  engaging web experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <h3>AWS Certified Developer</h3>
              <p className="cert-issuer">Issued by: Amazon Web Services</p>
              <p className="cert-date">Issued on: March 2023</p>
            </div>

            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <h3>React Professional Certificate</h3>
              <p className="cert-issuer">Issued by: Meta</p>
              <p className="cert-date">Issued on: January 2023</p>
            </div>

            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <h3>Full Stack Web Development</h3>
              <p className="cert-issuer">Issued by: Coursera</p>
              <p className="cert-date">Issued on: November 2022</p>
            </div>

            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <h3>Python for Data Science</h3>
              <p className="cert-issuer">Issued by: IBM</p>
              <p className="cert-date">Issued on: August 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Connect With Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities. 
                Feel free to reach out!
              </p>
              <div className="contact-details">
                <p>📧 johndoe@example.com</p>
                <p>📍 New York, United States</p>
                <p>💼 LinkedIn | GitHub | Twitter</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Rugved Redkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;