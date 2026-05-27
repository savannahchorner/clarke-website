import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-richBlack border-t border-mutedGold/20">
      {/* Top gold line accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-mutedGold to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex flex-row items-center gap-3 md:gap-4 mb-6">
              <img
                src="/assets/clarke-logo.png"
                alt="Clarke Capital Partners"
                className="h-24 md:h-28 w-auto object-contain flex-shrink-0"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <div className="w-px h-8 bg-mutedGold/20 flex-shrink-0" />
              <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-mutedGold/50 leading-[1.55]">
                Operators Investing<br />in Operators.
              </span>
            </Link>
            <p className="font-sans text-sm text-silverGray/50 leading-relaxed">
              Growth Capital Backed by Real Operating Experience.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Connect</p>
            <p className="font-sans text-sm text-silverGray leading-relaxed mb-2">
              For Founders, Operators, and Partners.
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
