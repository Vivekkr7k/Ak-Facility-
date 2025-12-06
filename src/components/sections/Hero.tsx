import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f7ec1e]/20 via-white to-[#ed6526]/10 pt-36 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Facility Services
              <br />
              <span className="text-primary-orange">You Can Trust</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-light-text leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional cleaning and manpower solutions you can trust whether it's your home, office, or commercial space.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="bg-dark-text text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              >
                <span>Book a Service</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7 4L13 10L7 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Small Image and Rating - Below the button */}
            <motion.div
              className="flex items-center gap-6 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Small Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                  alt="Professional cleaner"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating Card */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary-yellow text-xl">★</span>
                  <span className="text-2xl font-bold text-dark-text">4.9/5.0</span>
                </div>
                <p className="text-sm text-light-text">Trusted by happy clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Main Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                alt="Professional cleaning service"
                className="w-full h-[600px] lg:h-[700px] object-cover"
              />
              {/* Overlay Card - Bottom Center */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-dark-text/90 text-white px-6 py-4 rounded-xl text-center">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm font-medium">Cleaning Experts</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
