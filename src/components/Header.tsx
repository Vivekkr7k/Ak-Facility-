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

  const isHomePage = location.pathname === '/'

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background - Transparent for homepage, white for other pages */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md"
        animate={{
          backgroundColor: isHomePage
            ? (isScrolled 
                ? 'rgba(0, 0, 0, 0.3)' 
                : 'rgba(0, 0, 0, 0.1)')
            : (isScrolled 
                ? 'rgba(255, 255, 255, 0.95)' 
                : 'rgba(255, 255, 255, 0.7)'),
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
            ? (isHomePage 
                ? '0 1px 3px 0 rgba(0, 0, 0, 0.2)' 
                : '0 1px 3px 0 rgba(0, 0, 0, 0.1)')
            : 'none',
        }}
        transition={{
          duration: 0.3,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo - Left */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0 z-10"
          >
            <img
              src="/ak_logo-r.png"
              alt="A.K. Facility Services"
              className="h-16 sm:h-20 w-auto"
            />
          </Link>

          {/* Navigation - Centered (Desktop only) */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isHomePage 
                    ? 'text-white drop-shadow-md' 
                    : 'text-dark-text'
                } ${
                  location.pathname === item.path
                    ? 'underline'
                    : isHomePage 
                      ? 'hover:opacity-80' 
                      : 'hover:opacity-70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - CTA Button (Desktop) and Mobile Menu Button */}
          <div className="flex items-center gap-2 flex-shrink-0 z-10">
            {/* CTA Button - Right (Desktop only) */}
            <div className="hidden md:block">
              <motion.div
                animate={{
                  backgroundColor: isHomePage
                    ? (isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.15)')
                    : (isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'),
                  borderColor: isHomePage
                    ? (isScrolled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)')
                    : (isScrolled ? '#d1d5db' : 'rgba(209, 213, 219, 0.5)'),
                }}
                transition={{ duration: 0.3 }}
                className={`border px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity ${
                  isHomePage ? 'backdrop-blur-sm' : ''
                }`}
              >
                <Link 
                  to="/contact" 
                  className={isHomePage ? 'text-white drop-shadow-md' : 'text-dark-text'}
                >
                  Book a Service
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 -mr-2 ${isHomePage ? 'text-white drop-shadow-md' : 'text-dark-text'}`}
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className={`md:hidden py-4 border-t ${
              isHomePage 
                ? 'border-white/20 backdrop-blur-md bg-black/30' 
                : 'border-gray-200 bg-white shadow-lg'
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-3 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 ${
                    isHomePage 
                      ? 'text-white drop-shadow-md' 
                      : 'text-dark-text'
                  } ${
                    location.pathname === item.path
                      ? 'underline'
                      : isHomePage 
                        ? 'hover:opacity-80' 
                        : 'hover:text-primary-orange'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`mt-2 px-6 py-3 rounded-lg font-semibold text-center transition-colors ${
                  isHomePage
                    ? 'bg-white/20 border border-white/30 text-white backdrop-blur-sm hover:bg-white/30'
                    : 'bg-dark-text border border-dark-text text-white hover:bg-gray-800 shadow-md'
                }`}
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
