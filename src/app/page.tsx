import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Godfred Fokuo | Full-Stack Developer',
  description: 'Full-stack developer specializing in React Native, Kotlin, Supabase, and modern web technologies. Building digital experiences that matter.',
}

export default function Home() {
  const projects = [
    {
      name: 'OneTap',
      desc: 'Smart productivity app with 50+ active users. Task management and smart scheduling built with Kotlin.',
      tech: ['Kotlin', 'Android', 'MVVM'],
      link: 'https://github.com/EasWay/OneTap'
    },
    {
      name: 'M-Kopa CRM',
      desc: 'Customer relationship management system for M-Kopa sales team with real-time follow-ups.',
      tech: ['Next.js', 'Redis', 'Vercel'],
      link: 'https://mkopa-crm.vercel.app'
    },
    {
      name: 'Humanize AI',
      desc: 'AI-powered text humanizer using Llama 3.3 70B for natural-sounding content. Free, no accounts.',
      tech: ['Next.js', 'NVIDIA NIM', 'Render'],
      link: 'https://humanize-ai-jqbi.onrender.com'
    },
    {
      name: 'Bliss Braids',
      desc: 'E-commerce website for hair salon with online booking and product catalog.',
      tech: ['Next.js', 'Supabase', 'Vercel'],
      link: '#'
    },
    {
      name: 'EduConnect',
      desc: 'Educational platform connecting students and teachers with course management.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      name: 'AlphaPortfolio',
      desc: 'Portfolio website for Alpha Group of Developers team.',
      tech: ['Next.js', 'Tailwind', 'Vercel'],
      link: '#'
    }
  ]

  const skills = [
    'React Native', 'Kotlin', 'Android', 'Next.js', 'React',
    'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind',
    'Git', 'REST APIs', 'Mobile Dev', 'Web Dev'
  ]

  const experience = [
    {
      role: 'Sales Representative',
      company: 'M-Kopa',
      period: 'Nov 2022 - Present',
      desc: 'DSR at MTN Mallam Junction, McCarthy Hill branch. Sales, customer acquisition, and CRM management.'
    },
    {
      role: 'IT Officer (Pending)',
      company: 'DSTRKT24',
      period: 'Applied 2026',
      desc: 'Application submitted for IT Officer position.'
    }
  ]

  const stats = [
    { value: '5+', label: 'Mobile Apps' },
    { value: '2+', label: 'Web Apps' },
    { value: '50+', label: 'Active Users' },
    { value: '3+', label: 'Years' }
  ]

  return (
    <main>
      {/* Navigation */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            <span>&lt;/&gt;</span> Godfred
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <img 
            src="/profile.png" 
            alt="Godfred Fokuo" 
            className="profile-img"
          />
          <p className="hero-label font-mono animate-in">Full-Stack Developer</p>
          <h1 className="animate-in delay-1">Building digital<br/>experiences that matter</h1>
          <p className="hero-subtitle animate-in delay-2">
            I build mobile apps, web platforms, and smart systems. React Native, Kotlin, Supabase, and beyond.
          </p>
          <div className="hero-cta animate-in delay-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="stats animate-in delay-4">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <p>
                I'm a <strong>software developer</strong> based in Accra, Ghana. 
                I build apps that solve real problems — from task management tools to sales CRMs.
              </p>
              <p>
                Currently working at <strong style={{ color: 'var(--accent)' }}>M-Kopa</strong> as a Sales Representative 
                while building apps on the side. Diploma in IT from GCTU (2023-2025).
              </p>
              <p>
                When I'm not coding, I'm improving my skills, researching tech, or building something new.
                Always learning, always building.
              </p>
            </div>
            <div className="about-card">
              <h4>Connect</h4>
              <ul className="contact-list">
                <li>
                  <span style={{ color: 'var(--accent)' }}>@</span>
                  <a href="https://github.com/EasWay" target="_blank" rel="noopener">github.com/EasWay</a>
                </li>
                <li>
                  <span style={{ color: 'var(--accent)' }}>in</span>
                  <a href="https://linkedin.com/in/resilience-fred" target="_blank" rel="noopener">linkedin.com/in/resilience-fred</a>
                </li>
                <li>
                  <span style={{ color: 'var(--accent)' }}>@</span>
                  <a href="mailto:fokuogodfred@gmail.com">fokuogodfred@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Projects</h2>
            <p>Recent work and side projects</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <a 
                key={i} 
                href={project.link}
                className="project-card"
              >
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-link">View →</span>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tag">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <h2>Skills</h2>
            <p>Technologies and tools I work with</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">
                  {exp.company} <span>• {exp.period}</span>
                </p>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Let's Build Something</h2>
          <p>Want to work together or have a question? I'd love to hear from you.</p>
          <div className="contact-links">
            <a href="https://github.com/EasWay" target="_blank" rel="noopener" className="btn btn-secondary">GitHub</a>
            <a href="https://linkedin.com/in/resilience-fred" target="_blank" rel="noopener" className="btn btn-secondary">LinkedIn</a>
            <a href="mailto:fokuogodfred@gmail.com" className="btn btn-primary">Email Me</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Built with Next.js • Deployed on Vercel</p>
        <p style={{ marginTop: '0.5rem' }}>© 2026 Godfred Fokuo. All rights reserved.</p>
      </footer>
    </main>
  )
}