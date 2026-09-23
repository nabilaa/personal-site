import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar sticky top-0 z-50 flex items-center justify-between border-b px-12 py-2 transition-colors ${isScrolled ? 'bg-white/55 backdrop-blur-sm' : 'bg-transparent'}`}
      style={{ borderColor: isScrolled ? 'var(--color-brand-brown)' : 'transparent' }}
    >
      <div className="logo" />
      <ul className="menu flex items-center gap-2">
        <li>
          <a className="menu-item block mb-0 px-3 py-3 text-lg font-medium transition-colors hover:text-brand-cream" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:text-brand-cream" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:text-brand-cream" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:text-brand-cream" href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar