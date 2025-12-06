import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BookSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-[#f7ec1e]/20 via-white to-[#ed6526]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text leading-tight">
              Your Space Deserves A Sparkle
            </h2>
            <p className="text-xl text-light-text leading-relaxed">
              Schedule a cleaning today with our trusted professionals and
              enjoy a spotless, fresh space without any hassle. We're committed
              to delivering excellence with every service.
            </p>
            <Link
              to="/contact"
              className="bg-dark-text text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 w-fit"
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Professional cleaning team"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BookSection
