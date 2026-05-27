import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About',       to: '/about' },
  { label: 'Our Mission', href: '/#our-mission' },
  { label: 'Team',        to: '/team' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'nav-blur bg-richBlack/85 border-b border-[rgba(181,154,99,0.12)] pt-2 pb-5'
            : 'bg-transparent pt-3 pb-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo + submark tagline */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center">
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-4">
              <img
                src="/assets/clarke-logo.png"
                alt="Clarke Capital Partners"
                className="h-32 md:h-36 lg:h-40 w-auto object-contain flex-shrink-0"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              {/* Vertical divider — large desktop only */}
              <div className="hidden lg:block w-px h-8 bg-mutedGold/20 flex-shrink-0" />
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-mutedGold/50 leading-none lg:leading-[1.55] -mt-2 md:-mt-2.5 lg:mt-0 lg:whitespace-nowrap">
                Operators investing in Operators
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ label, to, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  className="font-sans text-sm tracking-widest uppercase transition-colors duration-200 text-silverGray hover:text-ivory"
                >
                  {label}
                </a>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `font-sans text-sm tracking-widest uppercase transition-colors duration-200 ${
                      isActive ? 'text-mutedGold' : 'text-silverGray hover:text-ivory'
                    }`
                  }
                >
                  {label}
                </NavLink>
              )
            )}
            <Link
              to="/contact"
              className="ml-4 btn-primary text-xs py-2.5 px-6"
            >
              Connect
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-px bg-ivory"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-px bg-ivory"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-px bg-ivory"
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-richBlack/97 nav-blur flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map(({ label, to, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
              >
                {href ? (
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-5xl font-300 tracking-wide transition-colors text-ivory hover:text-mutedGold"
                  >
                    {label}
                  </a>
                ) : (
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-serif text-5xl font-300 tracking-wide transition-colors ${
                        isActive ? 'text-mutedGold' : 'text-ivory hover:text-mutedGold'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-4"
              >
                Connect
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
