const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-50 flex items-center justify-between px-10 py-5">
      <div className="logo" />
      <ul className="menu flex items-center gap-2">
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:bg-brand-accent hover:text-brand-cream" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:bg-brand-accent hover:text-brand-cream" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:bg-brand-accent hover:text-brand-cream" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="menu-item block px-3 py-2 text-lg font-medium transition-colors hover:bg-brand-accent hover:text-brand-cream" href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar