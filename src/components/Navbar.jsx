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
      className="navbar sticky top-0 z-50 box-border flex h-16 items-center justify-center bg-brand-base px-4 py-2 backdrop-blur-sm transition-colors md:justify-between md:px-12"
      style={{
        borderBottom: isScrolled ? '1px solid var(--color-brand-body)' : '1px solid transparent',
        backgroundColor: isScrolled ? 'rgba(247, 230, 230, 0.5)' : 'var(--color-brand-base)',
        height: '80px',
        minHeight: '80px',
      }}
    >
      <div className="logo hidden md:block" />
      <ul className="menu flex w-full items-center justify-center gap-0 md:w-auto md:gap-2">
        <li>
          <a className="menu-item block px-3 py-2 text-md font-medium transition-colors hover:text-brand-ring" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-md font-medium transition-colors hover:text-brand-ring" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-md font-medium transition-colors hover:text-brand-ring" href="#skills">
            Skills
          </a>
        </li>
        {/* <li>
          <a className="menu-item block px-3 py-2 text-md font-medium transition-colors hover:text-brand-ring" href="#projects">
            Projects
          </a>
        </li> */}
        <li>
          <a className="menu-item block px-3 py-2 text-md font-medium transition-colors hover:text-brand-ring" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar