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
    <div className="w-full pt-20">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-[#f7ec1e]/20 via-white to-[#ed6526]/10 py-20 lg:py-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm text-light-text font-medium mb-4">- About Us</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6">
              About A.K. Facility Services
            </h1>
            <p className="text-xl text-light-text leading-relaxed">
              Connecting great companies with exceptional manpower solutions
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="text-sm text-light-text font-medium mb-4">- Our Story</div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-8">
                Our Story
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg text-light-text leading-relaxed">
                A.K. Facility Services was established in the year 2018 to
                address human resource problems in labor-intensive industries.
                The company plays a promising role in recruiting grassroot-level
                manpower efficiently. Its human resource management skills
                provide manpower in abundance for various industries like hotels,
                logistics, security, retail outlets, shopping malls, etc.
              </p>
              <p className="text-lg text-light-text leading-relaxed">
                We maintain an extensive database of manpower and we invest
                heavily in this database to ensure that you, as a client, get
                efficient candidates in the market as per requirement. Our
                recruiters constantly look for opportunities for labor-intensive
                work to supply our human resources.
              </p>
              <p className="text-lg text-light-text leading-relaxed">
                We have experienced professionals to impart desired workable
                skills to laborers so that they are right for clients. To
                identify the best candidates for energy-consuming difficult
                services, we help you with labor support. Our team builds
                long-term relationships with manpower and clients alike by
                providing a friendly, honest and professional recruitment service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-[#f7ec1e]/10 to-[#ed6526]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-primary-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-xl group-hover:bg-primary-orange/30 transition-colors"></div>
                    <div className="relative bg-gradient-to-br from-[#f7ec1e]/20 to-[#ed6526]/10 p-6 rounded-2xl">
                      <MissionIcon />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-dark-text mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-light-text leading-relaxed">
                  We are committed to connecting great companies with manpower and
                  opening up opportunities for both by providing the highest quality
                  of outsourced employment and human resource services. Success for
                  our clients is reached by empowering them to focus on what they do
                  best.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/5 to-primary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-yellow/20 rounded-full blur-xl group-hover:bg-primary-yellow/30 transition-colors"></div>
                    <div className="relative bg-gradient-to-br from-[#f7ec1e]/20 to-[#ed6526]/10 p-6 rounded-2xl">
                      <VisionIcon />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-dark-text mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-light-text leading-relaxed">
                  We continuously strive to become the preferred source for
                  employment and human resource services. We are dedicated to
                  serving our clients and the community with the highest levels of
                  service, knowledge, professionalism, honesty, and integrity in the
                  logistics and hotel industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm text-light-text font-medium mb-4">- Our Values</div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
              Our Values
            </h2>
            <p className="text-xl text-light-text leading-relaxed">
              We are a high-performing, high-quality organization dedicated to
              employment and human resource services – a trusted partner and
              resource for our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <div className="text-sm text-light-text font-medium mb-4">- Our Reputation</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
                Our Reputation
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
