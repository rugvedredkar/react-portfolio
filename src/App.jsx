import { useState, useEffect } from 'react';
import './App.css';
import Typed from "typed.js";

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
    <div className="image-placeholder">👨‍💻</div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects I've Worked On</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">📱</div>
              <h3>E-Commerce Platform</h3>
              <p>A full-stack e-commerce application with payment integration and real-time inventory management.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-image">🎨</div>
              <h3>Portfolio Website</h3>
              <p>A modern, responsive portfolio website with smooth animations and interactive elements.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-image">📊</div>
              <h3>Data Analytics Dashboard</h3>
              <p>Interactive dashboard for visualizing complex data sets with real-time updates.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">D3.js</span>
                <span className="tag">Python</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-image">🤖</div>
              <h3>AI Chatbot</h3>
              <p>Intelligent chatbot with natural language processing capabilities for customer support.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">TensorFlow</span>
                <span className="tag">Flask</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">React</span>
                <span className="skill-item">Vue.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">Java</span>
                <span className="skill-item">Express</span>
                <span className="skill-item">Django</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-items">
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">MySQL</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">Firebase</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">Docker</span>
                <span className="skill-item">AWS</span>
                <span className="skill-item">Figma</span>
                <span className="skill-item">Agile</span>
              </div>
            </div>
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
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;