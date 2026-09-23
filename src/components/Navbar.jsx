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
      className="navbar sticky top-0 z-50 box-border flex h-16 items-center justify-between border-b bg-white/55 px-12 py-2 backdrop-blur-sm transition-colors"
      style={{
        borderColor: isScrolled ? 'var(--color-brand-brown)' : 'transparent',
        height: '64px',
        minHeight: '64px',
      }}
    >
      <div className="logo" />
      <ul className="menu flex items-center gap-2">
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:text-brand-ring" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:text-brand-ring" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:text-brand-ring" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:text-brand-ring" href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar