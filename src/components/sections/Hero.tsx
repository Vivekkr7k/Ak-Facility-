import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f7ec1e]/20 via-white to-[#ed6526]/10 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-0">
      {/* Background Image for Mobile */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
            alt="Professional cleaning service background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Content - Order 1 on mobile, order 1 on desktop */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white lg:text-dark-text leading-tight drop-shadow-lg lg:drop-shadow-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Facility Services
              <br />
              <span className="text-primary-orange lg:text-primary-orange">You Can Trust</span>
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 lg:text-light-text leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-md lg:drop-shadow-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional cleaning and manpower solutions you can trust whether it's your home, office, or commercial space.
            </motion.p>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                'Housekeeping & Deep Cleaning',
                'Office & Commercial Cleaning',
                'Specialized Cleaning',
                'Facility Maintenance',
                'Manpower Supply',
                'Staffing & Workforce',
                'Security & Support Staff',
                'Delivery Partner (Klydo)',
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 lg:bg-white/80 backdrop-blur-sm border border-white/30 lg:border-gray-200 rounded-lg px-1.5 py-2 sm:px-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium text-dark-text text-center hover:bg-primary-orange/20 lg:hover:bg-primary-orange/10 hover:border-primary-orange transition-all cursor-pointer leading-tight shadow-lg lg:shadow-none"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="bg-white lg:bg-dark-text text-dark-text lg:text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-white/90 lg:hover:bg-gray-800 transition-colors inline-flex items-center gap-2 shadow-xl hover:shadow-2xl"
              >
                <span>Book a Service</span>
                <svg
                  width="18"
                  height="18"
                  className="sm:w-5 sm:h-5"
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
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Small Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center shadow-md">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.WtPiHEHP3oI3A4eIE9DpnAHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Professional cleaner"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Rating Card */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-primary-yellow text-lg sm:text-xl">★</span>
                  <span className="text-xl sm:text-2xl font-bold text-white lg:text-dark-text drop-shadow-md lg:drop-shadow-none">4.9/5.0</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 lg:text-light-text drop-shadow-md lg:drop-shadow-none">Trusted by happy clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Main Image - Hidden on mobile, shown on desktop */}
          <motion.div
            className="relative hidden lg:block lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                alt="Professional cleaning service"
                className="w-full h-[600px] xl:h-[700px] object-cover"
              />
              {/* Overlay Card - Bottom Center */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-dark-text/90 text-white px-6 py-4 rounded-xl text-center">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-sm font-medium">Cleaning Experts</div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Overlay Card - Shown only on mobile */}
          <motion.div
            className="lg:hidden relative z-20 order-3 flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/95 backdrop-blur-md text-dark-text px-6 py-4 rounded-xl text-center shadow-2xl border border-white/20">
              <div className="text-2xl font-bold mb-1">100+</div>
              <div className="text-sm font-medium">Cleaning Experts</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
