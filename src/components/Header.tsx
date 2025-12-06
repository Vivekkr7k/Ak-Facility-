import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Check if we're in the hero section (first 700px of the page)
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 100)
  })

  // Also check on mount and route change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'Why Us' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md"
        animate={{
          backgroundColor: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.7)',
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      />
      
      {/* Shadow on scroll */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px"
        animate={{
          opacity: isScrolled ? 1 : 0,
          boxShadow: isScrolled 
            ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' 
            : 'none',
        }}
        transition={{
          duration: 0.3,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/ak_logo-r.png"
              alt="A.K. Facility Services"
              className="h-20 w-auto"
            />
          </Link>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-dark-text transition-colors ${
                  location.pathname === item.path
                    ? 'underline'
                    : 'hover:opacity-70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <motion.div
              animate={{
                backgroundColor: isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                borderColor: isScrolled ? '#d1d5db' : 'rgba(209, 213, 219, 0.5)',
              }}
              transition={{ duration: 0.3 }}
              className="border px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity"
            >
              <Link to="/contact" className="text-dark-text">
                Book a Service
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 ${
                    location.pathname === item.path
                      ? 'text-dark-text underline'
                      : 'text-dark-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 bg-white border border-gray-300 text-dark-text px-6 py-3 rounded-lg font-semibold text-center"
              >
                Book a Service
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
