import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-[#f7ec1e]/10 to-[#ed6526]/10 mt-20 pb-20 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-dark-text mb-2">
              A.K. Facility Services
            </div>
            <p className="text-light-text text-sm leading-relaxed">
              Making Your World Shine, One Home At A Time
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-dark-text mb-2">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-light-text hover:text-primary-orange transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-light-text hover:text-primary-orange transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-light-text hover:text-primary-orange transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-light-text hover:text-primary-orange transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-dark-text mb-2">Popular Services</h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/services#deep-cleaning"
                className="text-light-text hover:text-primary-orange transition-colors text-sm"
              >
                Deep Cleaning
              </Link>
              <Link
                to="/services#office-cleaning"
                className="text-light-text hover:text-primary-orange transition-colors text-sm"
              >
                Office Cleaning
              </Link>
              <Link
                to="/services#housekeeping"
                className="text-light-text hover:text-primary-orange transition-colors text-sm"
              >
                Housekeeping
              </Link>
              <Link
                to="/services#facility-management"
                className="text-light-text hover:text-primary-orange transition-colors text-sm"
              >
                Facility Management
              </Link>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-dark-text mb-2">
              Get Cleaning Tips & Updates
            </h3>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-dark-text placeholder-light-text focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="bg-dark-text text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-center text-light-text text-sm">
            © 2025 A.K. Facility Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
