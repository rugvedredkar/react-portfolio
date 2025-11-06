import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { projectId } = useParams();

  const projectData = {
    'data-migration': {
      title: 'Data Migration',
      description: 'A backend automation project that streamlined large-scale data transfer between client databases and the Distribution Management System.',
      overview: 'This enterprise-level project focused on automating the migration of millions of insurance policy records from legacy systems to a modern Distribution Management System. The solution reduced manual intervention by 80% and improved data accuracy significantly.',
      technologies: ['Java', 'SQL Server', 'Spring Boot', 'REST APIs'],
      challenges: 'The main challenges included handling large volumes of data, ensuring data integrity during transfer, managing different database schemas, and maintaining zero downtime during migration.',
      solutions: 'Implemented a robust ETL pipeline with validation checks, created automated rollback mechanisms, and designed a modular architecture that could handle different data formats and sources.',
      outcomes: 'Successfully migrated 10M+ policy records, reduced processing time by 60%, and achieved 99.9% data accuracy with comprehensive logging and error handling.'
    },
    'schedulerr': {
      title: 'Schedulerr.com',
      description: 'A full-stack meeting scheduling application with real-time conflict detection.',
      overview: 'Schedulerr is a modern meeting scheduling platform that simplifies the process of finding common availability between multiple participants. Built with a focus on user experience and real-time synchronization.',
      technologies: ['React', 'CSS3', 'Flask', 'SQLite3', 'AWS', 'Google OAuth'],
      challenges: 'Implementing real-time conflict detection across multiple users, handling timezone conversions, ensuring secure authentication, and managing concurrent booking requests.',
      solutions: 'Developed a reactive frontend with React, implemented efficient database queries for conflict checking, integrated Google OAuth for seamless authentication, and deployed on AWS for scalability.',
      outcomes: 'Created a fully functional scheduling platform with sub-second response times, supporting multiple concurrent users with real-time updates and comprehensive conflict resolution.'
    },
    'united-airlines': {
      title: 'United Airlines Analytics Dashboard',
      description: 'A comprehensive Tableau dashboard analyzing flight performance metrics.',
      overview: 'An analytical dashboard that processes and visualizes over 1 million flight records from 2023 to provide insights into delays, cancellations, and operational efficiency of United Airlines compared to competitors.',
      technologies: ['Tableau', 'Python', 'Pandas', 'Data Visualization'],
      challenges: 'Processing large datasets efficiently, creating meaningful visualizations, identifying correlations between various factors affecting delays, and presenting complex data in an accessible format.',
      solutions: 'Utilized Python for data cleaning and preprocessing, designed interactive Tableau dashboards with drill-down capabilities, and implemented statistical analysis to identify key performance indicators.',
      outcomes: 'Revealed that United Airlines had a 10% higher delay rate than competitors, identified peak delay periods, and provided actionable insights for operational improvements.'
    },
    'invisible-cloak': {
      title: 'InvisibleCloak',
      description: 'A computer vision project creating an invisibility effect using real-time video processing.',
      overview: 'An innovative Python project that uses computer vision techniques to create a "Harry Potter style" invisibility cloak effect in real-time video streams using color detection and background subtraction.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Image Processing'],
      challenges: 'Achieving real-time performance, handling varying lighting conditions, accurately detecting the cloak color, and seamlessly blending the background.',
      solutions: 'Implemented HSV color space for robust color detection, used morphological operations for noise reduction, and optimized frame processing for real-time performance.',
      outcomes: 'Successfully created a working invisibility effect running at 30+ FPS, with accurate object detection and smooth background replacement.'
    }
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="project-detail page-transition">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">Portfolio</Link>
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </nav>
        <div className="container">
          <h1 className="project-detail-title">Project not found</h1>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail page-transition">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">Portfolio</Link>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '120px' }}>
        <h1 className="project-detail-title">{project.title}</h1>
        
        <section className="project-section">
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </section>

        <section className="project-section">
          <h2>Technologies Used</h2>
          <div className="project-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tag">{tech}</span>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>Challenges</h2>
          <p>{project.challenges}</p>
        </section>

        <section className="project-section">
          <h2>Solutions</h2>
          <p>{project.solutions}</p>
        </section>

        <section className="project-section">
          <h2>Outcomes</h2>
          <p>{project.outcomes}</p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
          <Link to="/" className="btn btn-primary">Back to Portfolio</Link>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: '4rem' }}>
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

export default ProjectDetail;