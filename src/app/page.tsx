"use client";

import Head from "next/head";

export default function Home() {
  const projects = [
    {
      name: "OneTap",
      description: "Smart productivity app built with Kotlin. 50+ active users with task management and smart scheduling.",
      tech: ["Kotlin", "Android", "MVVM"],
      link: "https://github.com/EasWay/OneTap"
    },
    {
      name: "M-Kopa CRM",
      description: "Customer relationship management system for M-Kopa sales team with real-time follow-ups.",
      tech: ["Next.js", "Redis", "Vercel"],
      link: "https://mkopa-crm.vercel.app"
    },
    {
      name: "Humanize AI",
      description: "AI-powered text humanizer using Llama 3.3 70B for natural-sounding content.",
      tech: ["Next.js", "NVIDIA NIM", "Render"],
      link: "https://humanize-ai-jqbi.onrender.com"
    },
    {
      name: "Bliss-Braids",
      description: "E-commerce website for hair salon with online booking and product catalog.",
      tech: ["Next.js", "Supabase", "Vercel"],
      link: "https://bliss-braids.vercel.app"
    },
    {
      name: "Educonnect",
      description: "Educational platform connecting students and teachers with course management.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/EasWay/educonnect"
    },
    {
      name: "AlphaPortfolio",
      description: "Portfolio website for Alpha Group of Developers team.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      link: "https://alpha-portfolio.vercel.app"
    }
  ];

  const skills = [
    "React Native", "Kotlin", "Android", "Next.js", "React",
    "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Tailwind",
    "Git", "REST APIs", "Mobile Dev", "Web Dev"
  ];

  const experience = [
    {
      role: "Sales Representative",
      company: "M-Kopa",
      period: "Nov 2022 - Present",
      description: "DSR at MTN office, Mallam Junction. Combining sales with software development."
    },
    {
      role: "Diploma in IT",
      company: "GCTU",
      period: "2023 - 2025",
      description: "Information Technology diploma at Ghana Communication Technology University."
    },
    {
      role: "Software Developer",
      company: "Freelance",
      period: "2020 - Present",
      description: "Built 5+ mobile apps and 2+ web apps. OneTap has 50+ active users."
    }
  ];

  return (
    <>
      <Head>
        <title>Godfred Fokuo | Software Developer</title>
        <meta name="description" content="Software developer from Ghana. React Native, Kotlin, and web technologies. Built 5+ mobile apps and 2+ web apps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="font-mono text-lg font-bold" style={{ color: '#22c55e' }}>
            godfred.dev
          </span>
          <div className="nav-links">
            <a href="#about" className="link">About</a>
            <a href="#projects" className="link">Projects</a>
            <a href="#skills" className="link">Skills</a>
            <a href="#experience" className="link">Experience</a>
            <a href="#contact" className="link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        {/* Profile Photo */}
        <div style={{ marginBottom: '2rem', animation: 'fadeIn 0.5s ease forwards' }}>
          <img 
            src="/profile.png" 
            alt="Godfred Fokuo" 
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '3px solid #22c55e',
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)'
            }} 
          />
        </div>
        <p className="font-mono text-sm animate-fade" style={{ color: '#22c55e', marginBottom: '1rem' }}>
          Hello, I'm
        </p>
        <h1 className="animate-fade delay-1" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
          Godfred Fokuo
        </h1>
        <p className="animate-fade delay-2" style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '500px', marginBottom: '2rem' }}>
          Software developer specializing in mobile apps & web platforms.
          <br />
          <span style={{ color: '#71717a' }}>React Native • Kotlin • Next.js</span>
        </p>
        <div className="animate-fade delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>About</h2>
        <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
          <p style={{ color: '#a1a1aa', fontSize: '1.125rem', lineHeight: 1.8 }}>
            I'm a software developer based in Accra, Ghana with a passion for building 
            impactful digital products. From mobile apps that help people be more productive 
            to web platforms that solve real business problems.
          </p>
          <p style={{ color: '#a1a1aa', fontSize: '1.125rem', lineHeight: 1.8 }}>
            Currently working at M-Kopa while completing my IT diploma at GCTU. 
            I've built 5+ mobile apps and 2+ production web apps, including OneTap 
            which serves 50+ active users.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#22c55e' }}>5+</div>
              <div style={{ color: '#71717a', fontSize: '0.875rem' }}>Mobile Apps</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#22c55e' }}>2+</div>
              <div style={{ color: '#71717a', fontSize: '0.875rem' }}>Web Apps</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#22c55e' }}>50+</div>
              <div style={{ color: '#71717a', fontSize: '0.875rem' }}>Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-clean"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fafafa' }}>
                {project.name}
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontSize: '0.75rem', color: '#71717a', background: '#1f1f1f', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Skills</h2>
        <div className="skills-wrap">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Experience</h2>
        <div className="timeline" style={{ maxWidth: '600px' }}>
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <p style={{ fontSize: '0.875rem', color: '#22c55e', marginBottom: '0.25rem' }}>
                {exp.period}
              </p>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
              <p style={{ color: '#a1a1aa', marginBottom: '0.5rem' }}>{exp.company}</p>
              <p style={{ color: '#71717a', fontSize: '0.9rem' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Get In Touch</h2>
        <p style={{ color: '#a1a1aa', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '500px' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/EasWay" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/resilience-fred" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            LinkedIn
          </a>
          <a href="mailto:fokuogodfred@gmail.com" className="btn btn-outline">
            Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', color: '#71717a', fontSize: '0.875rem', borderTop: '1px solid #2a2a2a' }}>
        <p>© {new Date().getFullYear()} Godfred Fokuo. Built with Next.js.</p>
      </footer>
    </>
  );
}