import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
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
              <span>About Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-text leading-tight">
              More Than Services
              <br />
              <span className="text-primary-orange">We Care For Your Space</span>
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-light-text leading-relaxed">
                A.K. Facility Services was established in 2018 to address human
                resource problems in labor-intensive industries. We play a
                promising role in recruiting grassroot-level manpower efficiently.
                Our human resource management skills provide manpower in abundance
                for various industries like hotels, logistics, security, retail
                outlets, shopping malls, and more.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-light-text leading-relaxed">
                We maintain an extensive database of manpower and invest heavily
                in this database to ensure that you, as a client, get efficient
                candidates in the market as per requirement. Our team builds
                long-term relationships with manpower and clients alike by
                providing friendly, honest, and professional services.
              </p>
            </div>

            <Link
              to="/about"
              className="bg-dark-text text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 w-fit"
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
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop"
                alt="Professional facility services"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 bg-dark-text/90 text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-4 rounded-lg sm:rounded-xl">
                <div className="font-semibold text-sm sm:text-base md:text-lg">500+</div>
                <div className="text-xs sm:text-sm">Delivering Spotless Results With Every Visit</div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-[#f7ec1e]/20 to-[#ed6526]/10 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-orange mb-1 sm:mb-2">6+</div>
              <div className="text-base sm:text-lg font-semibold text-dark-text mb-0.5 sm:mb-1">Years</div>
              <div className="text-xs sm:text-sm text-light-text">Customer Satisfaction With Every Service</div>
            </div>

            {/* Testimonial Card */}
            <motion.div
              className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl text-primary-orange/30 mb-3 sm:mb-4 leading-none font-serif">"</div>
              <p className="text-sm sm:text-base md:text-lg text-dark-text leading-relaxed mb-4 sm:mb-6 italic">
                A.K. Facility Services turned our office space into a fresh,
                spotless environment. Their team was friendly, on time, and
                truly professional. We finally have a workspace we're proud of!
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  RA
                </div>
                <div>
                  <div className="font-bold text-dark-text text-sm sm:text-base">Rafiq Ahmed</div>
                  <div className="text-xs sm:text-sm text-light-text">Digital Creator</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-32">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit mx-auto mb-4 sm:mb-6 font-semibold text-xs sm:text-sm">
              <span>Mission & Vision</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-3 sm:mb-4">
              Our Purpose
              <br />
              <span className="text-primary-orange">Our Promise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission Card */}
            <motion.div
              className="bg-gradient-to-br from-primary-orange/10 via-white to-primary-yellow/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-primary-orange/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-orange/20 text-primary-orange px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 font-semibold text-xs sm:text-sm">
                <span>Our Mission</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-text mb-3 sm:mb-4">
                Connecting Companies
                <br />
                <span className="text-primary-orange">With Talent</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-light-text leading-relaxed mb-3 sm:mb-4">
                We are committed to connecting great companies with manpower and opening up opportunities for both by providing the highest quality of outsourced employment and human resource services.
              </p>
              <div className="bg-white/80 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-primary-orange">
                <p className="text-xs sm:text-sm md:text-base text-dark-text font-medium leading-relaxed">
                  Success for our clients is reached by empowering them to focus on what they do best.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-gradient-to-br from-primary-yellow/10 via-white to-primary-orange/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-primary-yellow/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-yellow/20 text-dark-text px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 font-semibold text-xs sm:text-sm">
                <span>Our Vision</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-text mb-3 sm:mb-4">
                Preferred Source
                <br />
                <span className="text-primary-orange">For Excellence</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-light-text leading-relaxed mb-3 sm:mb-4">
                We continuously strive to become the preferred source for employment and human resource services.
              </p>
              <div className="bg-white/80 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-primary-yellow">
                <p className="text-xs sm:text-sm md:text-base text-dark-text font-medium leading-relaxed">
                  We are dedicated to serving our clients and the community with the highest levels of service, knowledge, professionalism, honesty, and integrity in the logistics and hotel industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
