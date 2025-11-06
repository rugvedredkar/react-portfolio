

import { useState, useEffect, useRef } from 'react';
import './App.css';
import Typed from "typed.js";
import hero from './assets/hero.png';
import './ProjectDetails.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectDetail from './ProjectDetails';
import ScrollToTop from './ScrollToTop';


// Import skill icons
import awsIcon from './assets/skills/aws.png';
import pythonIcon from './assets/skills/python.png';
import javaIcon from './assets/skills/java.png';
import htmlIcon from './assets/skills/html.png';
import flaskIcon from './assets/skills/flask.png';
import nodeIcon from './assets/skills/nodejs.png';
import jsIcon from './assets/skills/js.png';
import sqlIcon from './assets/skills/sqlite.png';
import vsIcon from './assets/skills/vs.png';
import dockerIcon from './assets/skills/docker.png';
import azureIcon from './assets/skills/azure.png';
import cppIcon from './assets/skills/c++.png';
import cssIcon from './assets/skills/css.png';
import tableauIcon from './assets/skills/tableau.png';
import reactIcon from './assets/skills/react.png';
import gcIcon from './assets/skills/gc.png';
import githubIcon from './assets/skills/github.png';
import eclipseIcon from './assets/skills/eclipse.png';
import pandasIcon from './assets/skills/pandas.png';
import pycharmIcon from './assets/skills/pycharm.png';
import jupyterIcon from './assets/skills/jupyter.png';
// Add more imports as you add more skill icons
// import javaIcon from './assets/skills/java.png';
// import pythonIcon from './assets/skills/python.png';
// etc.


const skillsData = [
  { name: 'Java', icon: javaIcon, category: 'backend', isImage: true },
  { name: 'C++', icon: cppIcon, category: 'backend', isImage: true },
  { name: 'Python', icon: pythonIcon, category: 'backend', isImage: true },
  { name: 'HTML5', icon: htmlIcon, category: 'frontend', isImage: true },
  { name: 'CSS3', icon: cssIcon, category: 'frontend', isImage: true },
  { name: 'JavaScript', icon: jsIcon, category: 'frontend', isImage: true },
  { name: 'NodeJs', icon: nodeIcon, category: 'database', isImage: true },
  { name: 'React', icon: reactIcon, category: 'tools', isImage: true },
  { name: 'Flask', icon: flaskIcon, category: 'backend', isImage: true },
  { name: 'Vs code', icon: vsIcon, category: 'tools', isImage: true },
  { name: 'Pycharm', icon: pycharmIcon, category: 'tools', isImage: true },
  { name: 'Eclipse', icon: eclipseIcon, category: 'bigdata', isImage: true },
  { name: 'Tableau', icon: tableauIcon, category: 'tools', isImage: true },
  { name: 'Pandas', icon: pandasIcon, category: 'data', isImage: true },
  { name: 'SQLite', icon: sqlIcon, category: 'database', isImage: true },
  { name: 'Jupyter Notebook', icon: jupyterIcon, category: 'backend', isImage: true },
  { name: 'AWS', icon: awsIcon, category: 'cloud', isImage: true },
  { name: 'Azure', icon: azureIcon, category: 'cloud', isImage: true },
  { name: 'Google Cloud', icon: gcIcon, category: 'cloud', isImage: true },
  { name: 'GitHub', icon: githubIcon, category: 'tools', isImage: true },
  { name: 'Docker', icon: dockerIcon, category: 'tools', isImage: true }
    
];

// university logo import 
import uicLogo from './assets/education/uic.png';
import muLogo from './assets/education/mu.png';

//experience logo import
import c2lLogo from './assets/experience/c2l.png';
import awaitingLogo from './assets/experience/awaiting.png';
import btLogo from './assets/experience/bt.png';

//certifications logo import
import awsLogo from './assets/certifications/aws.png';
import ucdLogo from './assets/certifications/ucd.png';
import uomLogo from './assets/certifications/uom.png';
import googleLogo from './assets/certifications/google.png';
import tcsLogo from './assets/certifications/tcs.png';

function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const experienceContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = experienceContainerRef.current;
      if (!wrapper) return;
  
      const rect = wrapper.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.7;
  
      if (rect.top < triggerPoint) {
        wrapper.classList.add('visible');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
          <Link to="/" className="logo">Portfolio</Link>
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
              <Link to="/project/data-migration" className="project-link">View Project →</Link>
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
              <Link to="/project/schedulerr" className="project-link">View Project →</Link>
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
              <Link to="/project/united-airlines" className="project-link">View Project →</Link>            
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
              <Link to="/project/invisible-cloak" className="project-link">View Project →</Link>
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

{/* ===== EXPERIENCE SECTION ===== */}
<section id="experience" className="experience">
  <div className="container">
    <h2 className="section-title">Experience</h2>

    <div className="experience-cards-wrapper" ref={experienceContainerRef}>
      <div className="experience-card">
        <div className="experience-left">
          <div className="testimonial">
            <p className="stars">★★★★★</p>
            <p>
            Rugved played a key role in automating backend processes and improving database efficiency. 
            His structured approach and debugging skills reduced data issues across multiple releases.
            </p>
            <img src={c2lLogo} alt="Company Logo" className="company-icon"  />
          </div>
        </div>

        <div className="experience-right">
          <div className="experience-header">
            <div>
              <h3>Full Stack Software Developer</h3>
              <p>📍 India | November 2022 – August 2024</p>
            </div>
          </div>

          <h4>Responsibilities</h4>
          <ul>
            <li>Built backend modules in Java, improving system performance by 25%.</li>
            <li>Optimized 50+ SQL queries, cutting report generation time by 60%.</li>
            <li>Debugged client issues via Jira, improving delivery timelines by 40%.</li>
            <li>Led a 3-member team to deliver Data Migration for 10M+ policy records in Drop 1.</li>
          </ul>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-left">
          <div className="testimonial">
            <p className="stars">★★★★★</p>
            <p>
            Rugved developed responsive web modules with an eye for usability and performance. 
            His focus on front-end optimization helped reduce load times and improve user engagement.
            </p>
            <img src={awaitingLogo} alt="Company Logo" className="company-icon-1"  /> 
          </div>
        </div>

        <div className="experience-right">
          <div className="experience-header">
            <div>
              <h3>Web Developer Intern</h3>
              <p>📍 India | February 2022 – March 2022</p>
            </div>
          </div>

          <h4>Responsibilities</h4>
          <ul>
            <li>Built 12+ dynamic pages using React.js and REST APIs, enhancing UX metrics by 20%.</li>
            <li>Designed and normalized 10 SQL Server tables, improving query response time by 35%.</li>
            <li>Collaborated in 3 Agile sprints to deliver UI components ahead of schedule.</li>
          </ul>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-left">
          <div className="testimonial">
            <p className="stars">★★★★★</p>
            <p>
            Rugved automated reporting for 5 departments and reduced manual data preparation by 40%. 
            His dashboards helped executives make faster, data-driven decisions.
            </p>
            <img src={btLogo} alt="Company Logo" className="company-icon-2"  /> 
          </div>
        </div>

        <div className="experience-right">
          <div className="experience-header">
            <div>
              <h3>Data Analyst Intern</h3>
              <p>📍 India | June 2022 – August 2022</p>
            </div>
          </div>

          <h4>Responsibilities</h4>
          <ul>
            <li>Cleaned and analyzed 250k+ records using Python (Pandas, Matplotlib).</li>
            <li>Built 6 Excel dashboards, automating weekly performance reports.</li>
            <li>Reduced report preparation time from 5 hours to 2 hours per cycle.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== EDUCATION SECTION ===== */}
<section id="education" className="education">
  <div className="container">
    <h2 className="section-title">Education</h2>

    <div className="education-timeline">
      <div className="education-item left">
        <div className="education-content">
        <div className="education-header">
        <img src={uicLogo} alt="University Logo" className="edu-logo-uic" />
          <h3>University of Illinois Chicago</h3>
        </div>
          <p className="degree">Master's of Science – Management Infomration Systems</p>
          <p><strong>Courses:</strong></p>
          <ul>
            <li>Enterprise Application Development</li>
            <li>Advanced Database Management System</li>
            <li>Data Mining for Business</li>
            <li>Object Oriented Programming</li>
            <li>Statistics for Management</li>
            <li>Project Management</li>
            <li>Supply Chain Management</li>
            <li>Intro to Marketing</li>
            <li>Intro to Operations Management</li>
          </ul>
          <span className="year">Aug 2024 – May 2026</span>
        </div>
      </div>

      <div className="education-item right">
        <div className="education-content">
        <div className="education-header">
        <img src={muLogo} alt="University Logo" className="edu-logo-mu" />
        <h3>University of Mumbai</h3>
        </div>
          <p className="degree">Bachelor's of Engineering - Electronics and Telecommunication</p>
          <p><strong>Courses:</strong></p>
          <ul>
            <li>Signals and Systems</li>
            <li>Digital Electronics</li>
            <li>Computer Networking</li>
            <li>Mobile Communications</li>
            <li>Database Management Systems</li>
            <li>Mathematics</li>
          </ul>
          <span className="year"> July 2018 – June 2022</span>
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
              <img src={awsLogo} alt="certification Logo" className="cert-icon"  /> 
              <h3>AWS Cloud Foundation</h3>
              <p className="cert-issuer">Issued by: Amazon Web Services</p>
              <p className="cert-date">Issued on: April 2025</p>
              <a href="https://www.credly.com/badges/8d32d932-514f-403a-8266-e792085d3810" target="_blank" rel="noopener noreferrer" className="btn-credential">
              See Credential
              </a>

            </div>

            <div className="cert-card">
            <img src={awsLogo} alt="certification Logo" className="cert-icon"  /> 
              <h3>AWS Cloud Security</h3>
              <p className="cert-issuer">Issued by: Amazon Web Services</p>
              <p className="cert-date">Issued on: April 2025</p>
              <a href="https://www.credly.com/earner/earned/badge/0063b079-c730-4bfe-bf45-363ae6ec1624" target="_blank" rel="noopener noreferrer" className="btn-credential">
              See Credential
              </a>

            </div>

            <div className="cert-card">
            <img src={tcsLogo} alt="certification Logo" className="cert-icon"  /> 
              <h3>Machine Learning</h3>
              <p className="cert-issuer">Issued by: Tata Consultancy Services</p>
              <p className="cert-date">Issued on: July 2021</p>
              <a href="https://drive.google.com/file/d/1Dr1wqdRqdC_7mb-5pRv0pzTDmZzVgYZA/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-credential">
              See Credential
              </a>
            </div>

            <div className="cert-card">
            <img src={ucdLogo} alt="certification Logo" className="cert-icon"  /> 
              <h3>SQL for Data Science</h3>
              <p className="cert-issuer">Issued by: University of California, Davis</p>
              <p className="cert-date">Issued on: September 2021</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/4KZUHC8DCBSR" target="_blank" rel="noopener noreferrer" className="btn-credential">
              See Credential
              </a>
            </div>

            <div className="cert-card">
            <img src={uomLogo} alt="certification Logo" className="cert-icon"  /> 
              <h3>Applied Machine Learning</h3>
              <p className="cert-issuer">Issued by: University of Michigan</p>
              <p className="cert-date">Issued on: September 2020</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/2WS7WEQ5J39M" target="_blank" rel="noopener noreferrer" className="btn-credential">
              See Credential
              </a>
            </div>

            <div className="cert-card">
            <img src={googleLogo} alt="certification Logo" className="cert-icon"  /> 
              <h3>Crash Course on Python</h3>
              <p className="cert-issuer">Issued by: Google</p>
              <p className="cert-date">Issued on: July 2020</p>
              <a href="https://www.coursera.org/account/accomplishments/verify/QD4H6U6RJ4C5" target="_blank" rel="noopener noreferrer" className="btn-credential">
              See Credential
              </a>
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
                <p>📧 rugvedredkar02@gmail.com</p>
                <p>📍 chicago, United States</p>
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
  <div className="footer-container">
    <p className="footer-left">Terms & Conditions</p>

    <div className="footer-socials">
      <a href="https://www.instagram.com/rugved_redkar/" target="_blank" rel="noreferrer" className="footer-icon">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/share/1JQgmkvvCr/" target="_blank" rel="noreferrer" className="footer-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://github.com/rugvedredkar" target="_blank" rel="noreferrer" className="footer-icon">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/rugvedredkar02" target="_blank" rel="noreferrer" className="footer-icon">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>

    <p className="footer-right">© 2025 Rugved Redkar. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

// Replace the entire App function with:
function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

