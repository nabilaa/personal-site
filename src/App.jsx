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
import heroImg from '/assets/hero.jpg'
import { experiences, skills } from './data.js'
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
  ]

  return (
    <>
      <section id="center">
        <div id="home" className="hero bg-brand-base">
          <div className="hero-content mx-auto mt-4 py-4 text-brand-brown md:py-4">
            <div className="hero-text flex flex-col items-start justify-center text-left">
              <p className="font-handwriting text-brand-body text-3xl font-bold mb-6 md:text-5xl tracking-wide antialiased animate-handwriting">Hi, I'm Nabilah</p>
              <p className="hero-subtitle text-brand-brown text-base/loose mb-6 opacity-60">A software engineer focused on backend development. Over ten years building and operating business-critical backend systems.</p>
              <div className="hero-actions flex items-center gap-4">
                <a href={`${import.meta.env.BASE_URL}assets/Nabilah_Backend_Engineer_CV.pdf`} download="Nabilah_Backend_Engineer_CV.pdf" className="hero-action flex items-center gap-2 rounded-md border border-transparent bg-brand-brown px-2 py-2 text-brand-card transition duration-300 ease-in-out hover:-translate-y-[3px] hover:border-brand-brown hover:bg-brand-card hover:text-brand-brown hover:shadow-[0_12px_30px_rgba(59,43,43,0.08)]">
                  <Download size={18} aria-hidden="true" />
                </a>
                <a href="https://github.com/nabilaa" target="_blank" rel="noreferrer" aria-label="GitHub" className="hero-action flex items-center gap-2 rounded-md border border-transparent bg-brand-brown px-2 py-2 text-brand-card transition duration-300 ease-in-out hover:-translate-y-[3px] hover:border-brand-brown hover:bg-brand-card hover:text-brand-brown hover:shadow-[0_12px_30px_rgba(59,43,43,0.08)]">
                  <FaGithub size={18} aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/snabilah" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero-action flex items-center gap-2 rounded-md border border-transparent bg-brand-brown px-2 py-2 text-brand-card transition duration-300 ease-in-out hover:-translate-y-[3px] hover:border-brand-brown hover:bg-brand-card hover:text-brand-brown hover:shadow-[0_12px_30px_rgba(59,43,43,0.08)]">
                  <FaLinkedin size={18} aria-hidden="true" />
                </a>
                <a href="mailto:shalihah.nabilah@gmail.com" aria-label="Email me" className="hero-action flex items-center gap-2 rounded-md border border-transparent bg-brand-brown px-2 py-2 text-brand-card transition duration-300 ease-in-out hover:-translate-y-[3px] hover:border-brand-brown hover:bg-brand-card hover:text-brand-brown hover:shadow-[0_12px_30px_rgba(59,43,43,0.08)]">
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="Hero" className="block h-full w-full object-cover" />
            </div>
          </div>
          <h1 className="hero-title text-xl"></h1>
        </div>

        <div id="about" className="w-full py-4 text-brand-brown md:py-4 bg-brand-base">
          <div className="section-content">
            <div className="mb-4 max-w-[650px] md:mb-6">
              <h2 className="font-serif text-2xl font-medium leading-[1.1]">
                About <span className="text-brand-accent"> Me</span>
              </h2>
            </div>
            <div className="text-base text-brand-body">
              <p>
                I'm a Software Engineer with over ten years of experience building and maintaining backend systems, with a strong focus on Java, Spring Boot, APIs, and distributed services. Throughout my career, I’ve worked across the software development lifecycle, from designing and developing new features to production support, troubleshooting, and root-cause analysis. I enjoy solving complex technical problems, building reliable systems, and continuously learning new technologies. I’m particularly interested in backend engineering, system design, and creating solutions that are both practical and scalable.
              </p>
            </div>
          </div>
        </div>
              
        <div id="experience" className="w-full py-4 text-brand-brown md:py-8">
          <div className="section-content">
            <div className="mb-[30px] max-w-[650px] md:mb-[30px]">
              <h2 className="font-serif text-2xl font-medium leading-[1.1]">
                Work <span className="text-brand-accent">Experience</span>
              </h2>
            </div>

            <div>
              {experiences.map((experience, index) => (
                <article
                  className="relative grid grid-cols-[25px_1fr] gap-[15px] md:grid-cols-[42px_1fr] md:gap-6 last:[&>div:last-child]:mb-0"
                  key={`${experience.company}-${experience.period}`}
                >
                  <div className="relative flex justify-center">
                    <div className="relative z-10 mt-[7px] h-3.5 w-3.5 rounded-full border-[3px] border-brand-card bg-brand-accent shadow-[0_0_0_1px_var(--color-brand-ring)]" />
                    {index !== experiences.length - 1 && (
                      <div className="absolute top-[21px] bottom-0 w-px bg-brand-border" />
                    )}
                  </div>

                  <div className={`${index === experiences.length - 1 ? 'mb-0' : 'mb-10 md:mb-12'} rounded-[18px] border border-brand-border bg-brand-card p-8 transition duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(59,43,43,0.08)] md:p-8`}>
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

                    <p className="mb-4 max-w-[750px] text-sm/none text-brand-body">
                      {experience.description}
                    </p>

                    <ul className="m-0 list-disc pl-5 text-sm leading-6 text-brand-body marker:text-brand-accent">
                      {experience.achievements.map((achievement) => (
                        <li className="mb-1.5 pl-[5px]" key={achievement}>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-[25px] flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span className="rounded-full border border-brand-border bg-brand-card px-3 py-[7px] text-xs font-semibold text-brand-accent"
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

        <div id="skills" className="w-full bg-brand-base py-8 text-brand-brown md:py-8">
          <div className="section-content">
            <div className="mb-4 max-w-[650px] md:mb-6">
              <h2 className="font-serif text-2xl font-medium leading-[1.1]">
                <span className="text-brand-accent">Tech Stack</span> and <span className="text-brand-accent">Tools</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {skillRows.map((row, rowIndex) => (
                <div className="flex flex-wrap gap-4" key={rowIndex}>
                  {row.map((skill, index) => {
                    const ToolIcon = toolIcons[skill.name]

                    return (
                      <div key={`${skill.id}-${index}`} className="skill-card group flex items-center gap-2 rounded-2xl border-2 border-brand-rose bg-brand-card/50 px-3 py-2 transition duration-300 ease-in-out hover:-translate-y-[3px] hover:bg-brand-body hover:shadow-[0_12px_30px_rgba(59,43,43,0.08)]">
                        <ToolIcon className="h-[1em] w-[1em] shrink-0 text-brand-accent transition-colors duration-200 group-hover:text-brand-card" strokeWidth={1.5} aria-hidden="true" />
                        <div className="text-left">
                          <h3 className="text-sm font-semibold text-brand-heading transition-colors duration-200 group-hover:text-brand-card">{skill.name}</h3>
                          <p className="hidden text-xs text-brand-accent transition-colors duration-200 group-hover:text-brand-card md:block">{skill.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="contact" className="w-full py-8 text-brand-brown md:py-8 bg-brand-base">
        <div className="section-content">
          <div className="mb-12 rounded-[18px] border border-brand-border bg-brand-body p-8 text-center md:p-8">
            <div className="mx-auto mb-4 flex max-w-[650px] flex-col items-center md:mb-6">
              <p className="font-handwriting text-brand-rose text-xl font-bold my-6 md:text-xl">Let's build something</p>
              <p className="text-brand-card text-xl mb-6 md:text-3xl">Open to new conversations</p>
              <a href="mailto:shalihah.nabilah@gmail.com" aria-label="Email me" className="flex items-center gap-2 rounded-full border bg-brand-card/80 px-4 py-4 text-brand-body hover:border-brand-brown hover:bg-brand-card hover:text-brand-brown hover:shadow-[0_12px_30px_rgba(59,43,43,0.08)] hover:-translate-y-[3px]">
                <Mail size={18} aria-hidden="true" /> shalihah.nabilah@gmail.com
              </a>
              <div className="hero-actions flex items-center gap-4 pt-6">
                <a href={`${import.meta.env.BASE_URL}assets/Nabilah_Backend_Engineer_CV.pdf`} download="Nabilah_Backend_Engineer_CV.pdf" className="flex items-center gap-2 rounded-md px-2 py-2 text-brand-rose hover:-translate-y-[3px] hover:text-brand-card">
                  Resume
                </a>
                <a href="https://github.com/nabilaa" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center gap-2 px-2 py-2 text-brand-rose hover:-translate-y-[3px] hover:text-brand-card">
                  Github
                </a>
                <a href="https://www.linkedin.com/in/snabilah" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 px-2 py-2 text-brand-rose hover:-translate-y-[3px] hover:text-brand-card">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="note" className="px-6 py-6 text-center text-sm text-brand-muted">
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
