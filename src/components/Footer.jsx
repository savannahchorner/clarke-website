import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'About',   to: '/about' },
  { label: 'Team',    to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-richBlack border-t border-mutedGold/20">
      {/* Top gold line accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-mutedGold to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/">
              <img
                src="/assets/clarke-logo.png"
                alt="Clarke Capital Partners"
                className="h-10 w-auto object-contain mb-5"
              />
            </Link>
            <p className="font-serif text-lg italic text-silverGray/80 leading-relaxed mb-4">
              Operators Investing<br />in Operators.
            </p>
            <p className="font-sans text-sm text-silverGray/50 leading-relaxed">
              Growth capital backed by real operating experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-6">Navigate</p>
            <ul className="space-y-3">
              {links.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `font-sans text-sm transition-colors duration-200 ${
                        isActive ? 'text-mutedGold' : 'text-silverGray hover:text-ivory'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Connect</p>
            <p className="font-sans text-sm text-silverGray leading-relaxed mb-2">
              For founders, operators, and partners.
            </p>
            <a
              href="mailto:info@clarkecp.com"
              className="font-sans text-sm text-mutedGold hover:text-ivory transition-colors duration-200"
            >
              info@clarkecp.com
            </a>
            <div className="mt-6">
              <Link to="/contact" className="btn-secondary text-xs py-2.5 px-5">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(181,154,99,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-silverGray/40 tracking-wide">
            © {new Date().getFullYear()} Clarke Capital Partners. All rights reserved.
          </p>
          <p className="font-sans text-xs text-silverGray/30 tracking-wide">
            clarkecp.com
          </p>
        </div>
      </div>
    </footer>
  )
}
