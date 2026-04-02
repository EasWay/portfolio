"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "React Native Developer | Kotlin & Android | Full-Stack Web";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      name: "OneTap",
      description: "Smart productivity app built with Kotlin. 50+ active users. Features task management, reminders, and smart scheduling.",
      tech: ["Kotlin", "Android", "MVVM"],
      link: "https://github.com/EasWay/OneTap"
    },
    {
      name: "M-Kopa CRM",
      description: "Customer relationship management system for M-Kopa sales team. Real-time follow-ups and lead tracking.",
      tech: ["Next.js", "Redis", "Vercel"],
      link: "https://mkopa-crm.vercel.app"
    },
    {
      name: "Humanize AI",
      description: "AI-powered text humanizer using Llama 3.3 70B. Converts robotic text to natural, human-sounding content.",
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
    "React Native", "Kotlin", "Android Development", "Next.js", "React",
    "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS",
    "Git", "REST APIs", "Mobile Development", "Web Development"
  ];

  const experience = [
    {
      role: "Sales Representative",
      company: "M-Kopa",
      period: "Nov 2022 - Present",
      location: "Accra, Ghana",
      description: "Working at M-Kopa DSR inside MTN office, Mallam Junction. Combining sales with software development."
    },
    {
      role: "Diploma in Information Technology",
      company: "GCTU",
      period: "2023 - 2025",
      location: "Ghana",
      description: "Pursuing IT diploma at Ghana Communication Technology University."
    },
    {
      role: "Software Developer (Self-taught)",
      company: "Freelance",
      period: "2020 - Present",
      location: "Accra, Ghana",
      description: "Built 5+ mobile apps and 2+ web apps. Projects include OneTap, M-Kopa CRM, Humanize AI."
    }
  ];

  return (
    <>
      <Head>
        <title>Godfred Fokuo | Software Developer</title>
        <meta name="description" content="Software developer from Ghana specializing in React Native, Kotlin, and web technologies. Built 5+ mobile apps and 2+ web apps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      
      <div className="matrix-bg" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="font-mono text-xl font-bold text-[#00ff88]">
            &lt;Godfred /&gt;
          </a>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="link-hover">About</a>
            <a href="#skills" className="link-hover">Skills</a>
            <a href="#projects" className="link-hover">Projects</a>
            <a href="#experience" className="link-hover">Experience</a>
            <a href="#contact" className="link-hover">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 font-mono text-[#00ff88] text-sm animate-pulse">
            Hello, World!
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Godfred Fokuo</span>
          </h1>
          <div className="font-mono text-xl md:text-2xl text-[#a1a1aa] mb-8 h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-[#71717a] max-w-xl mx-auto mb-8 text-lg">
            Software developer from Ghana building powerful mobile apps and elegant web solutions. 
            5+ mobile apps. 2+ web apps. 50+ users on production.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-float">
            <svg className="w-6 h-6 mx-auto text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-[#00ff88]">//</span>
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-6">
              I'm a software developer based in Accra, Ghana with a passion for building 
              impactful digital products. From mobile apps that help people be more productive 
              to web platforms that solve real business problems.
            </p>
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-6">
              Currently working at M-Kopa while completing my IT diploma at GCTU. 
              I balance my sales role with building apps - because why choose between 
              tech and business when I can do both?
            </p>
            <div className="flex gap-4 text-sm text-[#71717a]">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff88]">&#9679;</span>
                Accra, Ghana
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00ff88]">&#9679;</span>
                Open to opportunities
              </div>
            </div>
          </div>
          <div className="card glow-primary">
            <h3 className="font-mono text-[#00ff88] mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-[#71717a]">Mobile Apps</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-[#71717a]">Web Apps</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-[#71717a]">Users (OneTap)</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-[#71717a]">Years Coding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-[#00ff88]">//</span>
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-[#00ff88]">//</span>
          Projects
        </h2>
        <div className="project-grid">
          {projects.map((project) => (
            <a 
              key={project.name} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#00ff88] transition-colors">
                {project.name}
              </h3>
              <p className="text-[#a1a1aa] text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-[#71717a] bg-white/5 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-[#00ff88]">//</span>
          Experience
        </h2>
        <div className="max-w-2xl">
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="text-sm text-[#00ff88] font-mono mb-1">
                {exp.period}
              </div>
              <h3 className="text-xl font-bold mb-1">
                {exp.role}
              </h3>
              <div className="text-[#a1a1aa] mb-2">
                {exp.company} &bull; {exp.location}
              </div>
              <p className="text-[#71717a] text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-[#00ff88]">//</span>
          Get In Touch
        </h2>
        <div className="text-center">
          <p className="text-[#a1a1aa] mb-8 text-lg">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of something amazing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a 
              href="https://github.com/EasWay" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/resilience-fred" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:fokuogodfred@gmail.com" 
              className="btn-secondary"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[#71717a] text-sm border-t border-white/5">
        <p className="mb-2">
          Built with Next.js & Tailwind CSS
        </p>
        <p>
          &copy; {new Date().getFullYear()} Godfred Fokuo. All rights reserved.
        </p>
      </footer>
    </>
  );
}