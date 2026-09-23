import { useState } from 'react'
import {
  Cloud,
  CodeXml,
  Container,
  Database,
  Download,
  FlaskConical,
  GitBranch,
  Leaf,
  Mail,
  Send,
  TestTube,
  Workflow,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import heroImg from '/assets/hero-desktop.jpg'
import { experiences, skills, tools} from './data.js'
import './App.css'

const toolIcons = {
  Java: CodeXml,
  'Spring Boot': Leaf,
  PostgreSQL: Database,
  AWS: Cloud,
  Docker: Container,
  Terraform: Workflow,
  MongoDB: Database,
  'GitHub Actions': GitBranch,
  JUnit: TestTube,
  Mockito: FlaskConical,
  'IntelliJ IDEA': CodeXml,
  Postman: Send,
  Jira: Workflow,
  Confluence: Workflow,
}

function App() {
  const [count, setCount] = useState(0)
  const skillRows = [
    skills,
    tools,
  ]

  return (
    <>
      <section id="center">
        <div id="home" className="hero">
          <div className="hero-content relative" style={{ width: 'calc(100% + 40px)', marginInline: '-20px' }}>
            <img src={heroImg} alt="Hero" className="hero-image block h-auto w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 pl-10 text-left text-white md:pl-12">
              <p className="typewriter text-brand-brown text-3xl font-bold mb-6 md:text-5xl">Hi, I'm Nabilah</p>
              <p className="hero-subtitle text-brand-brown text-base/loose mb-6 opacity-60">A software engineer focused on backend development.</p>
              <div className="hero-actions flex items-center gap-4">
                <a href="/assets/Nabilah_Backend_Engineer_CV.pdf" download className="hero-action flex items-center gap-2 rounded-md border border-transparent bg-brand-brown px-2 py-2 text-brand-cream transition-colors hover:border-brand-brown hover:bg-brand-cream hover:text-brand-brown">
                  <Download size={18} aria-hidden="true" />
                </a>
                <a href="https://github.com/nabilaa" target="_blank" rel="noreferrer" aria-label="GitHub" className="hero-action flex items-center gap-2 rounded-md border border-transparent bg-brand-brown px-2 py-2 text-brand-cream transition-colors hover:border-brand-brown hover:bg-brand-cream hover:text-brand-brown">
                  <FaGithub size={18} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/snabilah" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero-action flex items-center gap-2 rounded-md border border-transparent bg-brand-brown px-2 py-2 text-brand-cream transition-colors hover:border-brand-brown hover:bg-brand-cream hover:text-brand-brown">
                  <FaLinkedin size={18} aria-hidden="true" />
                </a>
                <a href="mailto:shalihah.nabilah@gmail.com" aria-label="Email me" className="hero-action flex items-center gap-2 rounded-md border border-transparent bg-brand-brown px-2 py-2 text-brand-cream transition-colors hover:border-brand-brown hover:bg-brand-cream hover:text-brand-brown">
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <h1 className="hero-title text-xl"></h1>
        </div>


        {/* About Section */}
          <div id="about" className="mt-8 w-full px-8 py-4 text-brand-brown md:px-4 md:py-4">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-4 max-w-[650px] md:mb-6">
              <h2 className="font-serif text-2xl font-medium leading-[1.1]">
                About <span className="text-brand-accent"> Me</span>
              </h2>
            </div>
            <div className="px-4 text-sm/loose text-brand-body md:px-2">
              <p>
                I'm a Software Engineer with over ten years of experience building and maintaining backend systems, with a strong focus on Java, Spring Boot, APIs, and distributed services. Throughout my career, I’ve worked across the software development lifecycle, from designing and developing new features to production support, troubleshooting, and root-cause analysis. I enjoy solving complex technical problems, building reliable systems, and continuously learning new technologies. I’m particularly interested in backend engineering, system design, and creating solutions that are both practical and scalable.
              </p>
            </div>
          </div>
        </div>
              

        {/* Experience Section */}
          <div id="experience" className="mt-4 px-8 py-4 text-brand-brown md:px-4 md:py-8">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-[30px] max-w-[650px] md:mb-[30px]">
              <h2 className="font-serif text-2xl font-medium leading-[1.1]">
                Work <span className="text-brand-accent">Experience</span>
              </h2>
            </div>

            {/* Timeline */}
            <div>
              {experiences.map((experience, index) => (
                <article
                  className="relative grid grid-cols-[25px_1fr] gap-[15px] md:grid-cols-[42px_1fr] md:gap-6 last:[&>div:last-child]:mb-0"
                  key={`${experience.company}-${experience.period}`}
                >
                  {/* Timeline */}
                  <div className="relative flex justify-center">
                    <div className="relative z-10 mt-[7px] h-3.5 w-3.5 rounded-full border-[3px] border-brand-cream bg-brand-accent shadow-[0_0_0_1px_var(--color-brand-ring)]" />
                    {index !== experiences.length - 1 && (
                      <div className="absolute top-[21px] bottom-0 w-px bg-brand-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mb-24 rounded-[18px] border border-brand-border bg-brand-card p-8 transition duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(59,43,43,0.08)] md:mb-[75px] md:p-8">
                    <div>
                      <div>
                        <span className="mb-3 inline-block text-xs font-semibold tracking-[0.08em] text-brand-muted">
                          {experience.period}
                        </span>

                        <div className="text-[1.2rem] font-semibold text-brand-heading md:text-[1rem]">
                          {experience.role}
                        </div>

                        <div className="mt-[7px] text-small font-medium text-brand-accent">
                          {experience.company}
                        </div>
                      </div>
                    </div>

                    <p className="mb-6 max-w-[750px] text-sm/loose text-brand-body">
                      {experience.description}
                    </p>

                    <ul className="m-0 list-disc pl-5 text-sm/loose text-brand-body marker:text-brand-accent">
                      {experience.achievements.map((achievement) => (
                        <li className="mb-2.5 pl-[5px] leading-[1.65]" key={achievement}>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-[25px] flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span className="rounded-full border border-brand-border bg-brand-cream px-3 py-[7px] text-xs font-semibold text-brand-accent"
                          key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Section */}
          <div id="skills" className="bg-brand-cream px-8 py-8 text-brand-brown md:px-4 md:py-8" style={{ width: 'calc(100% + 40px)', marginInline: '-20px' }}>
          <div className="mx-auto max-w-[900px]">
            <div className="mb-4 max-w-[650px] md:mb-6">
              <h2 className="font-serif text-2xl font-medium leading-[1.1]">
                <span className="text-brand-accent">Tech Stack</span> and <span className="text-brand-accent">Tools</span>
              </h2>
            </div>
            <div className="skills-marquee">
              {skillRows.map((row, rowIndex) => (
                <div className={`skills-track ${rowIndex === 1 ? 'skills-track-reverse' : ''}`} key={rowIndex}>
                  {[...row, ...row].map((skill, index) => {
                    const ToolIcon = toolIcons[skill.name]

                    return (
                      <div key={`${skill.id}-${index}`} className="skill-card group flex flex-col items-center rounded-lg p-4 text-center transition-colors duration-200 hover:bg-brand-accent/60">
                        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg">
                          <ToolIcon className="h-12 w-12 text-brand-accent transition-colors duration-200 group-hover:text-brand-cream" strokeWidth={1.2} aria-hidden="true" />
                        </div>
                        <h3 className="font-semibold text-brand-heading transition-colors duration-200 group-hover:text-brand-cream">{skill.name}</h3>
                        <p className="text-sm text-brand-accent transition-colors duration-200 group-hover:text-brand-cream">{skill.desc}</p>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-6 py-6 text-center text-sm text-brand-muted">
        <p>
          © {new Date().getFullYear()} Nabilah.{' '}
          <a className="text-brand-accent underline-offset-4 hover:underline" href="mailto:shalihah.nabilah@gmail.com">
            Get in touch
          </a>
        </p>
      </footer>
    </>
  )
}

export default App
