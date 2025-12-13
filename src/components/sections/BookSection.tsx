import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BookSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-r from-[#f7ec1e]/20 via-white to-[#ed6526]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-5 md:gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit font-semibold text-xs sm:text-sm mb-2">
              <span>Get Started</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-text leading-tight">
              Ready to Transform
              <br />
              <span className="text-primary-orange">Your Space?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light-text leading-relaxed">
              From housekeeping and deep cleaning to office maintenance and manpower supply, 
              we provide comprehensive facility solutions tailored to your needs. Book your service 
              today and experience the difference of working with verified professionals who deliver 
              excellence every time.
            </p>
            <Link
              to="/contact"
              className="bg-dark-text text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 w-fit"
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

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Book a service - Professional consultation and scheduling"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BookSection
