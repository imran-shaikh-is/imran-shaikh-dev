import React, { useState } from 'react';
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Database,
  BrainCircuit, Layers3, GraduationCap, BriefcaseBusiness, Sparkles, FileText, Server, Cloud,
  ShieldCheck, Workflow, Wrench, Globe, MapPin, Receipt, Lock, ExternalLink
} from 'lucide-react';

const projects = [
  {
    category: 'BACKEND DEVELOPMENT',
    title: 'SaaS Organization Task Management System',
    description: 'A multi-tenant task management platform that helps organizations manage teams, assign work, track progress, and view productivity insights from one place.',
    stack: ['Python', 'Django', 'Django REST Framework', 'HTML', 'CSS', 'Bootstrap'],
    points: [
      'Built organization, team, and task management workflows.',
      'Implemented authentication and Admin/Member role-based access.',
      'Developed team invitations, task assignments, status tracking, and dashboard filters.',
      'Added analytics, reporting, and REST API endpoints.'
    ],
    url: 'https://github.com/imran-shaikh-is/saas-organization-task-management-system',
    accent: 'violet',
    icon: Layers3,
    artLabel: 'SAAS / API'
  },
  {
    category: 'GENERATIVE AI · RAG',
    title: 'Hospital Information Chatbot',
    description: 'A Retrieval-Augmented Generation chatbot that answers questions about hospital departments, doctors, visiting hours, admission procedures, and policies using a document knowledge base.',
    stack: ['Python', 'Streamlit', 'FAISS', 'Sentence Transformers', 'Gemini API', 'NLP'],
    points: [
      'Designed the end-to-end RAG pipeline with document loading and chunking.',
      'Generated local embeddings using Sentence Transformers and retrieved context with FAISS.',
      'Integrated Gemini for context-aware answer generation with source-grounded responses.',
      'Added an out-of-scope fallback and an evaluation process for retrieval and answer quality.'
    ],
    url: 'https://github.com/imran-shaikh-is/Hospital-RAG-chatbot',
    accent: 'cyan',
    icon: BrainCircuit,
    artLabel: 'RETRIEVAL / LLM'
  },
  {
    category: 'ADVANCED RAG ENGINEERING',
    title: 'Advanced RAG Challenge',
    description: 'An intelligent question-answering system for three structurally different PDF reports, using document-specific ingestion, semantic retrieval, and cross-encoder re-ranking.',
    stack: ['Python', 'Streamlit', 'ChromaDB', 'Sentence Transformers', 'Cross-Encoder', 'PyMuPDF', 'Groq API'],
    points: [
      'Built specialized PDF ingestion for page text, hierarchical sections, tables, charts, and footnotes.',
      'Implemented vector retrieval with ChromaDB and cross-encoder re-ranking.',
      'Generated source- and page-aware answers using a Groq-hosted LLM.',
      'Created an evaluation harness using Page Hit@5, MRR, and keyword recall.'
    ],
    metrics: [
      ['Page Hit@5', '1.00 across all 3 test sets'],
      ['MRR', '0.92 · 0.76 · 1.00'],
      ['Manual review', '36 answerable questions reported correct']
    ],
    url: 'https://github.com/imran-shaikh-is/advanced-rag-challenge',
    accent: 'orange',
    icon: Sparkles,
    artLabel: 'ADVANCED RAG'
  }
];

const professionalProjects = [
  {
    category: 'ENTERPRISE BACKEND · SAAS',
    title: 'Reimburse — Travel & Expense Management Backend',
    description: 'Backend for an enterprise travel and expense management add-on to SAP SuccessFactors, handling expense, mileage, and allowance claims, approval workflows, and policy enforcement across tenants.',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Swagger / drf-yasg', 'Git'],
    points: [
      'Designed a tenant-level configuration toggle for enterprise clients, spanning REST APIs, migrations, email templates, and approval workflows.',
      'Enforced policy consistency across 10+ modules with validation guards on claim CRUD APIs and permission checks.',
      'Built a rejection-resubmission policy engine for expense, mileage, and allowance claims with configurable edit-and-resubmit workflows.',
      'Fixed currency-conversion and financial-year aggregation bugs, improving data accuracy in claim calculations.'
    ],
    metrics: [
      ['Integration', 'SAP SuccessFactors add-on'],
      ['Policy coverage', '10+ modules']
    ],
    accent: 'violet',
    icon: Receipt,
    artLabel: 'EXPENSE / API'
  },
  {
    category: 'DATA ENGINEERING · SCRAPING',
    title: 'TikTok Shop — Large-Scale Data Scraping Pipeline',
    description: 'A production data pipeline that extracts TikTok Shop data at scale every day and delivers clean, deduplicated datasets to clients.',
    stack: ['Python', 'Scrapy', 'Selenium', 'BeautifulSoup', 'MongoDB'],
    points: [
      'Designed and built a production-grade pipeline extracting 15M+ records daily.',
      'Delivered cleaned, deduplicated output to clients on a recurring schedule.',
      'Owned the project end-to-end, from crawler design to client delivery.'
    ],
    metrics: [
      ['Daily volume', '15M+ records'],
      ['Ownership', 'End-to-end']
    ],
    accent: 'green',
    icon: Database,
    artLabel: 'SCRAPING / DATA'
  },
  {
    category: 'CLOUD DATA PLATFORM · AWS',
    title: 'UniDataHub — Live Scraping & Ready-Made Datasets Platform',
    description: 'A cloud-native data platform where users launch live web-scraping jobs on demand, monitor execution in real time, and purchase pre-collected, structured datasets.',
    stack: ['Python', 'Flask', 'MongoDB', 'AWS Lambda', 'Amazon S3', 'DynamoDB'],
    points: [
      'Connected the Flask application to distributed scraping services running on AWS, with live job tracking in Amazon DynamoDB.',
      'Implemented backend workflows for securely storing, caching, and serving dataset artifacts using Amazon S3 and MongoDB.',
      'Engineered a user credit system with quota controls and automated starter credits for newly registered users.'
    ],
    liveUrl: 'https://unidatahub.coderaim.com/',
    accent: 'orange',
    icon: Cloud,
    artLabel: 'SCRAPING / DATASETS'
  }
];

const skillGroups = [
  { icon: Server, title: 'Backend', items: ['Python', 'OOP', 'Django', 'Django REST Framework', 'FastAPI', 'Flask', 'RESTful API Design', 'Django ORM'] },
  { icon: Database, title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Query Optimization', 'Schema Design', 'Indexing'] },
  { icon: Cloud, title: 'Cloud & DevOps', items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'Linux', 'Docker', 'CI/CD Pipelines'] },
  { icon: ShieldCheck, title: 'Auth & Security', items: ['JWT', 'OAuth2', 'RBAC', 'Authentication', 'Authorization'] },
  { icon: Workflow, title: 'Async & Messaging', items: ['Celery', 'Redis', 'asyncio'] },
  { icon: BrainCircuit, title: 'AI & Data', items: ['RAG', 'FAISS', 'ChromaDB', 'Sentence Transformers', 'Pandas', 'NumPy', 'Matplotlib'] },
  { icon: Wrench, title: 'Tools & Testing', items: ['Git', 'Bitbucket', 'Postman', 'Swagger / drf-yasg', 'Jira', 'unittest / mock'] },
  { icon: Globe, title: 'Front-end & Scraping', items: ['JavaScript', 'HTML', 'CSS', 'React.js (basic)', 'Scrapy', 'Selenium', 'BeautifulSoup', 'Requests'] }
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Ansh Infotech',
    period: 'May 2026 – Present',
    current: true,
    points: [
      'Designed, developed, and deployed scalable Django web applications and REST APIs (DRF, FastAPI) for integration with front-end and third-party services, from requirement gathering to deployment.',
      'Implemented secure JWT-based authentication, authorization, and role-based access control (RBAC) for multi-tenant applications.',
      'Built asynchronous background jobs and task queues using Celery and Redis for scheduled, production-grade workflows.',
      'Wrote and optimized PostgreSQL/MongoDB queries; troubleshot application issues, participated in code reviews, and delivered features and bug fixes through Jira and Git.'
    ],
    stack: ['Django', 'DRF', 'FastAPI', 'JWT', 'RBAC', 'Celery', 'Redis', 'PostgreSQL', 'MongoDB']
  },
  {
    role: 'Python Developer',
    company: 'X-Byte Enterprise Pvt. Ltd.',
    period: 'June 2023 – May 2026',
    points: [
      'Built production-grade web scraping and data pipelines using Scrapy, Selenium, BeautifulSoup, and Requests, processing millions of records daily.',
      'Fetched, processed, and stored data from REST APIs into MongoDB and PostgreSQL.',
      'Implemented data validation, error handling, deduplication, and logging for reliable, well-documented pipelines.',
      'Deployed and managed workloads on AWS (EC2, S3, RDS, Lambda) on Linux servers; automated daily data updates and reporting with Celery + Redis schedulers.'
    ],
    stack: ['Scrapy', 'Selenium', 'BeautifulSoup', 'MongoDB', 'PostgreSQL', 'AWS', 'Linux', 'Celery', 'Redis']
  },
  {
    role: 'Python Developer Intern',
    company: 'Tops Technology',
    period: 'Feb 2023 – Apr 2023',
    points: [
      'Built a full-stack web application using Django and PostgreSQL, reducing manual effort by 40%.',
      'Applied Django ORM, views, forms, and REST API patterns in a real project environment.'
    ],
    stack: ['Django', 'PostgreSQL', 'Django ORM']
  }
];

function ProjectCard({ project, number }) {
  const Icon = project.icon;
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-number">{number}</div>
      <div className="project-content">
        <div className="project-category">{project.category}</div><h3>{project.title}</h3><p className="project-description">{project.description}</p>
        <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <div className="project-details"><h4>What I built</h4><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul></div>
        {project.metrics && <div className="metrics-row">{project.metrics.map(([label, value]) => <div className="metric" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>}
        {project.url
          ? <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View source code <Github size={16}/><ArrowUpRight size={15}/></a>
          : project.liveUrl
            ? <span className="project-links"><a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">View live site <ExternalLink size={15}/></a><span className="project-link project-private"><Lock size={14}/> Source code confidential</span></span>
            : <span className="project-link project-private"><Lock size={14}/> Client project · source code confidential</span>}
      </div>
      <div className="project-art"><div className="art-core"><Icon/></div><span className="art-label">{project.artLabel}</span></div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const email = 'is746245@gmail.com';
  const resumeUrl = '/Imran-Shaikh-Resume.pdf';

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">IS</span><span>Imran Shaikh<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a href={resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> PYTHON DEVELOPER · DJANGO · 3.5+ YRS</div>
            <h1>Building useful software.<br/><span className="gradient-text">Exploring intelligent AI.</span></h1>
            <p className="hero-lead">I’m a Software Engineer focused on Python and backend development, with hands-on projects in Generative AI, Retrieval-Augmented Generation, and data-driven applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-secondary" href="https://github.com/imran-shaikh-is" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer"><FileText size={17}/> Resume</a>
            </div>
            <div className="hero-meta"><span><Code2 size={15}/> Backend engineering</span><span><BrainCircuit size={15}/> RAG & Generative AI</span></div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i/><i/><i/></div><span>building.py</span><span className="code-live">● LIVE IDEAS</span></div>
              <div className="code-body">
                <div><span className="line-no">01</span><span className="code-purple">class</span> <span className="code-blue">Developer</span>:</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;<span className="code-purple">def</span> <span className="code-yellow">build</span>(self):</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;&nbsp;&nbsp;skills = [</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Python'</span>,</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Backend'</span>,</div>
                <div><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Generative AI'</span></div>
                <div><span className="line-no">07</span>&nbsp;&nbsp;&nbsp;&nbsp;]</div>
                <div><span className="line-no">08</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-yellow">impact</span>(skills)<span className="cursor">▍</span></div>
              </div>
              <div className="code-footer"><span><span className="footer-pulse"/> Ready to create</span><span>UTF-8 · Python</span></div>
            </div>
            <div className="float-chip chip-one"><BrainCircuit size={16}/> RAG Systems</div>
            <div className="float-chip chip-two"><Database size={16}/> Backend APIs</div>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Engineering with <span className="gradient-text">curiosity.</span></h2></div>
          <div className="about-grid">
            <figure className="about-photo"><img src="/imran.webp" alt="Imran Shaikh" width="640" height="640" loading="lazy" /></figure>
            <div className="about-main"><p className="large-copy">I’m a developer who enjoys turning ideas into practical, reliable applications.</p><p>My foundation is in Python development, backend engineering, and database management. I work with technologies such as Django, Django REST Framework, FastAPI, SQL, and modern development tools.</p><p>Alongside backend development, I build hands-on projects in Artificial Intelligence and Generative AI. I’m especially interested in RAG systems, document intelligence, and using data to solve real-world problems.</p></div>
            <div className="about-side"><div className="about-stat"><span className="stat-icon"><BriefcaseBusiness size={19}/></span><div><strong>3.5+ years experience</strong><small>Python/Django development at X-Byte Enterprise and Ansh Infotech</small></div></div><div className="about-stat"><span className="stat-icon"><BrainCircuit size={19}/></span><div><strong>AI-focused projects</strong><small>Practical work with retrieval pipelines and LLM applications</small></div></div><div className="about-stat"><span className="stat-icon"><Code2 size={19}/></span><div><strong>Python-first</strong><small>Backend development and application engineering</small></div></div></div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading"><span className="section-index">02 / EXPERIENCE</span><h2>Where I’ve <span className="gradient-text">worked.</span></h2><p>3.5+ years building Django applications, REST APIs, and production data pipelines.</p></div>
          <div className="timeline">{experience.map(job => <article className={job.current ? 'job current' : 'job'} key={job.company}>
            <div className="job-head"><div><h3>{job.role}</h3><div className="job-company">{job.company}</div></div><div className="job-date">{job.current && <span className="job-badge">Current</span>}{job.period}</div></div>
            <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
            <div className="tag-list job-stack">{job.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
          </article>)}</div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading"><span className="section-index">03 / TOOLKIT</span><h2>Technologies I <span className="gradient-text">work with.</span></h2><p>A practical toolkit across backend development, data, and AI applications.</p></div>
          <div className="skills-grid">{skillGroups.map(({icon: Icon, title, items}) => <article className="skill-card" key={title}><div className="skill-card-head"><span className="skill-icon"><Icon size={19}/></span><h3>{title}</h3></div><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading project-heading"><div><span className="section-index">04 / SELECTED WORK</span><h2>Projects built <span className="gradient-text">end to end.</span></h2><p>Production systems I’ve built for clients, plus personal projects in Generative AI and RAG.</p></div><a className="text-link" href="https://github.com/imran-shaikh-is" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={16}/></a></div>
          <h3 className="project-group-label"><BriefcaseBusiness size={15}/> Professional work <span>Client projects · source code is confidential</span></h3>
          <div className="projects-list">{professionalProjects.map((project, index) => <ProjectCard key={project.title} project={project} number={String(index + 1).padStart(2, '0')} />)}</div>
          <h3 className="project-group-label personal"><Code2 size={15}/> Personal projects <span>Independently designed and built · open source</span></h3>
          <div className="projects-list">{projects.map((project, index) => <ProjectCard key={project.title} project={project} number={String(professionalProjects.length + index + 1).padStart(2, '0')} />)}</div>
          <p className="metrics-note">Evaluation figures are reported in the Advanced RAG project README. They reflect the documented test run and its stated dataset limitations.</p>
        </section>

        <section className="section-wrap education-section" id="education">
          <div className="section-heading"><span className="section-index">05 / EDUCATION</span><h2>Academic <span className="gradient-text">foundation.</span></h2></div>
          <div className="education-card"><span className="education-icon"><GraduationCap size={23}/></span><div><h3>Bachelor of Computer Applications (BCA)</h3><div className="education-meta"><span>Silver Oak University, Ahmedabad</span><span>2020 – 2023</span><span>CGPA 7.11</span></div><p>Built a strong base in programming, data structures, database management, web development, and software engineering — the foundation for my work in Python and backend development.</p></div><span className="education-label">COMPLETED</span></div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel"><div className="contact-glow"/><span className="section-index">06 / GET IN TOUCH</span><h2>Have a project or opportunity<br/>in mind? <span className="gradient-text">Let’s connect.</span></h2><p>I’m open to conversations about Python development, backend engineering, AI/ML, and Generative AI opportunities.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${email}`}><Mail size={17}/> Email me <ArrowUpRight size={16}/></a><a className="button button-secondary" href="https://github.com/imran-shaikh-is" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a className="button button-secondary" href={resumeUrl} download="Imran-Shaikh-Resume.pdf"><FileText size={17}/> Download resume</a></div><div className="contact-socials"><a href="https://github.com/imran-shaikh-is" target="_blank" rel="noreferrer"><Github size={17}/> github.com/imran-shaikh-is</a><a href="https://www.linkedin.com/in/is-imran-shaikh/" target="_blank" rel="noreferrer"><Linkedin size={17}/> linkedin.com/in/is-imran-shaikh/</a><span><MapPin size={17}/> Ahmedabad, India · 15-day notice</span></div></div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">IS</span><span>Imran Shaikh<span className="brand-dot">.</span></span></a><span>© {new Date().getFullYear()} Imran Shaikh · Designed & built with care.</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;