import { motion } from 'framer-motion'
import MissionIcon from '../components/icons/MissionIcon'
import VisionIcon from '../components/icons/VisionIcon'

const About = () => {
  const values = [
    {
      icon: '🛡️',
      title: 'Trust',
      description:
        'Respect requires empathy, consideration, and a willingness to help. We must be dedicated to clients in all situations and live up to our core value of trust.',
    },
    {
      icon: '🤝',
      title: 'Respect',
      description:
        'We are committed to providing solutions for our clients. We exist to meet and solve the challenges our clients face.',
    },
    {
      icon: '💼',
      title: 'Commitment',
      description:
        'We are committed to connecting great companies with manpower and opening up opportunities for both by providing the highest quality of outsourced employment and human resource services.',
    },
    {
      icon: '⭐',
      title: 'Professionalism',
      description:
        'We are seasoned professionals, continuously educating ourselves and preparing for the challenges ahead.',
    },
  ]

  const reputation = [
    {
      icon: '✓',
      text: 'Professional business with principles and integrity',
      bgClass: 'bg-primary-orange',
    },
    {
      icon: '✓',
      text: 'Willing and trusted partner',
      bgClass: 'bg-primary-yellow',
    },
    {
      icon: '✓',
      text: 'Generous organization, giving of time and resources',
      bgClass: 'bg-primary-orange',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="w-full pt-20 pb-20 md:pb-0 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-[#f7ec1e]/20 via-white to-[#ed6526]/10 py-20 lg:py-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full w-fit mx-auto mb-6 font-semibold text-sm">
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6">
              About A.K. Facility
              <br />
              <span className="text-primary-orange">Services</span>
            </h1>
            <p className="text-xl text-light-text leading-relaxed">
              Connecting great companies with exceptional manpower solutions
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-[#f7ec1e]/5 to-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full w-fit mx-auto mb-6 font-semibold text-sm">
              <span>Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
              Our
              <br />
              <span className="text-primary-orange">Story</span>
            </h2>
          </motion.div>

          {/* Establishment Card */}
          <motion.div
            className="bg-gradient-to-br from-[#f7ec1e]/20 via-white to-[#ed6526]/10 p-8 md:p-10 rounded-3xl shadow-lg mb-12 border border-primary-orange/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                  <img
                    src="/ak_logo-r.png"
                    alt="A.K. Facility Services Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-dark-text mb-3">
                  Established to Address Human Resource Challenges
                </h3>
                <p className="text-lg text-light-text leading-relaxed">
                  A.K. Facility Services was established in the year 2018 to address human resource problems in labor-intensive industries. The company plays a promising role in recruiting grassroot-level manpower efficiently.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Industries We Serve */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark-text mb-6 text-center">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Hotels', 'Logistics', 'Security', 'Retail Outlets', 'Shopping Malls'].map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-primary-orange/30 text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {industry === 'Hotels' && '🏨'}
                    {industry === 'Logistics' && '🚚'}
                    {industry === 'Security' && '🛡️'}
                    {industry === 'Retail Outlets' && '🏪'}
                    {industry === 'Shopping Malls' && '🏬'}
                  </div>
                  <p className="text-sm md:text-base font-semibold text-dark-text">{industry}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Extensive Database */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f7ec1e]/20 to-[#ed6526]/10 rounded-xl flex items-center justify-center text-2xl">
                    📊
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-dark-text mb-3">
                    Extensive Database
                  </h4>
                  <p className="text-light-text leading-relaxed">
                    We maintain an extensive database of manpower and we invest heavily in this database to ensure that you, as a client, get efficient candidates in the market as per requirement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Active Recruitment */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f7ec1e]/20 to-[#ed6526]/10 rounded-xl flex items-center justify-center text-2xl">
                    🔍
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-dark-text mb-3">
                    Active Recruitment
                  </h4>
                  <p className="text-light-text leading-relaxed">
                    Our recruiters constantly look for opportunities for labor-intensive work to supply our human resources.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Training & Relationships */}
          <motion.div
            className="bg-gradient-to-br from-primary-orange/10 via-white to-primary-yellow/10 p-8 md:p-10 rounded-3xl shadow-lg border border-primary-orange/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Training */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                    🎓
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-dark-text mb-3">
                    Professional Training
                  </h4>
                  <p className="text-light-text leading-relaxed">
                    We have experienced professionals to impart desired workable skills to laborers so that they are right for clients. To identify the best candidates for energy-consuming difficult services, we help you with labor support.
                  </p>
                </div>
              </div>

              {/* Relationships */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-yellow rounded-2xl flex items-center justify-center text-dark-text text-2xl shadow-lg">
                    🤝
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-dark-text mb-3">
                    Long-Term Relationships
                  </h4>
                  <p className="text-light-text leading-relaxed">
                    Our team builds long-term relationships with manpower and clients alike by providing a friendly, honest and professional recruitment service.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-[#f7ec1e]/10 to-[#ed6526]/10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full w-fit mx-auto mb-6 font-semibold text-sm">
              <span>Mission & Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
              Our Purpose
              <br />
              <span className="text-primary-orange">Our Promise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-gray-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 via-transparent to-primary-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full mb-6 font-semibold text-sm">
                  <span>Our Mission</span>
                </div>

                {/* Icon Container */}
                <div className="mb-6 flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-xl group-hover:bg-primary-orange/30 transition-colors"></div>
                    <div className="relative bg-gradient-to-br from-primary-orange/20 to-primary-orange/10 p-5 rounded-2xl border border-primary-orange/20">
                      <MissionIcon />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
                  Connecting Companies
                  <br />
                  <span className="text-primary-orange">With Talent</span>
                </h3>

                {/* Content with bullet points */}
                <div className="space-y-4">
                  <p className="text-lg text-light-text leading-relaxed">
                    We are committed to connecting great companies with manpower and opening up opportunities for both by providing the highest quality of outsourced employment and human resource services.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary-orange/5 to-primary-yellow/5 p-5 rounded-2xl border-l-4 border-primary-orange">
                    <p className="text-base text-dark-text font-medium leading-relaxed">
                      Success for our clients is reached by empowering them to focus on what they do best.
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium">
                      Quality Services
                    </span>
                    <span className="px-4 py-2 bg-primary-yellow/10 text-dark-text rounded-full text-sm font-medium">
                      Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 via-transparent to-primary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary-yellow/10 text-dark-text px-4 py-2 rounded-full mb-6 font-semibold text-sm">
                  <span>Our Vision</span>
                </div>

                {/* Icon Container */}
                <div className="mb-6 flex items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-yellow/20 rounded-full blur-xl group-hover:bg-primary-yellow/30 transition-colors"></div>
                    <div className="relative bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/10 p-5 rounded-2xl border border-primary-yellow/20">
                      <VisionIcon />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
                  Preferred Source
                  <br />
                  <span className="text-primary-orange">For Excellence</span>
                </h3>

                {/* Content with highlights */}
                <div className="space-y-4">
                  <p className="text-lg text-light-text leading-relaxed">
                    We continuously strive to become the preferred source for employment and human resource services.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary-yellow/5 to-primary-orange/5 p-5 rounded-2xl border-l-4 border-primary-yellow">
                    <p className="text-base text-dark-text font-medium leading-relaxed">
                      We are dedicated to serving our clients and the community with the highest levels of service, knowledge, professionalism, honesty, and integrity in the logistics and hotel industry.
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary-yellow/10 text-dark-text rounded-full text-sm font-medium">
                      Professionalism
                    </span>
                    <span className="px-4 py-2 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium">
                      Integrity
                    </span>
                    <span className="px-4 py-2 bg-primary-yellow/10 text-dark-text rounded-full text-sm font-medium">
                      Excellence
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full w-fit mx-auto mb-6 font-semibold text-sm">
              <span>Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
              Our
              <br />
              <span className="text-primary-orange">Values</span>
            </h2>
            <p className="text-xl text-light-text leading-relaxed">
              We are a high-performing, high-quality organization dedicated to
              employment and human resource services – a trusted partner and
              resource for our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                variants={itemVariants}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-dark-text mb-4">
                  {value.title}
                </h3>
                <p className="text-light-text leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reputation Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-[#f7ec1e]/10 to-[#ed6526]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full w-fit mx-auto mb-6 font-semibold text-sm">
                <span>Our Reputation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
                Our
                <br />
                <span className="text-primary-orange">Reputation</span>
              </h2>
              <p className="text-lg text-light-text leading-relaxed max-w-2xl mx-auto">
                We are devoted to remaining unsurpassed in customer satisfaction. We strive to maintain our reputation as a:
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {reputation.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#f7ec1e]/30 to-[#ed6526]/20 hover:from-[#f7ec1e]/40 hover:to-[#ed6526]/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-8 h-8 rounded-lg ${item.bgClass} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <p className="text-lg text-dark-text leading-relaxed pt-1">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
