import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
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
              More Than Services
              <br />
              <span className="text-primary-orange">We Care For Your Space</span>
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-light-text leading-relaxed">
                A.K. Facility Services was established in 2018 to address human
                resource problems in labor-intensive industries. We play a
                promising role in recruiting grassroot-level manpower efficiently.
                Our human resource management skills provide manpower in abundance
                for various industries like hotels, logistics, security, retail
                outlets, shopping malls, and more.
              </p>
              <p className="text-lg text-light-text leading-relaxed">
                We maintain an extensive database of manpower and invest heavily
                in this database to ensure that you, as a client, get efficient
                candidates in the market as per requirement. Our team builds
                long-term relationships with manpower and clients alike by
                providing friendly, honest, and professional services.
              </p>
            </div>

            <Link
              to="/about"
              className="bg-dark-text text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 w-fit"
            >
              <span>Explore Us</span>
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

          {/* Right Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop"
                alt="Professional facility services"
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 bg-dark-text/90 text-white px-6 py-4 rounded-xl">
                <div className="font-semibold text-lg">500+</div>
                <div className="text-sm">Delivering Spotless Results With Every Visit</div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-[#f7ec1e]/20 to-[#ed6526]/10 p-6 rounded-2xl">
              <div className="text-4xl font-bold text-primary-orange mb-2">6+</div>
              <div className="text-lg font-semibold text-dark-text mb-1">Years</div>
              <div className="text-sm text-light-text">Customer Satisfaction With Every Service</div>
            </div>

            {/* Testimonial Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-6xl text-primary-orange/30 mb-4 leading-none font-serif">"</div>
              <p className="text-lg text-dark-text leading-relaxed mb-6 italic">
                A.K. Facility Services turned our office space into a fresh,
                spotless environment. Their team was friendly, on time, and
                truly professional. We finally have a workspace we're proud of!
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold">
                  RA
                </div>
                <div>
                  <div className="font-bold text-dark-text">Rafiq Ahmed</div>
                  <div className="text-sm text-light-text">Digital Creator</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
