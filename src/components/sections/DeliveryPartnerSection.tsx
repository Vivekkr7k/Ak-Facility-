import { motion } from 'framer-motion'

const DeliveryPartnerSection = () => {
  const partners = [
    {
      id: 1,
      name: 'Blinkit',
      logo: '/Clientslogo/blinkit.jpg',
    },
    {
      id: 2,
      name: 'Bigbasket',
      logo: '/Clientslogo/big-basket.jpg',
    },
  ]

  const features = [
    {
      id: 1,
      title: 'Verified Delivery Personnel',
      description:
        'Trained and background-verified delivery professionals ready to serve your business needs.',
      icon: '🚚',
    },
    {
      id: 2,
      title: 'Scalable Workforce',
      description:
        'Flexible manpower solutions that scale with your delivery volume and business growth.',
      icon: '📦',
    },
    {
      id: 3,
      title: '24/7 Support',
      description:
        'Round-the-clock support to ensure seamless operations and quick replacements when needed.',
      icon: '⏰',
    },
    {
      id: 4,
      title: 'Proven Track Record',
      description:
        'Trusted by leading delivery platforms like Blinkit and Bigbasket for reliable service.',
      icon: '✅',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full w-fit mx-auto mb-6 font-semibold text-sm">
            <span>Delivery Partner</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6">
            Delivery Partner
            <br />
            <span className="text-primary-orange">Manpower Solutions</span>
          </h2>
          <p className="text-xl text-light-text leading-relaxed">
            We provide reliable delivery personnel to the delivery industry,
            helping businesses scale their operations with verified and trained
            delivery professionals.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-dark-text">
              Trusted by Leading Delivery Platforms
            </h3>
            <p className="text-lg text-light-text leading-relaxed">
              We specialize in providing delivery boys and delivery personnel to
              the delivery industry. Our comprehensive manpower solutions help
              delivery businesses maintain their operations efficiently with
              trained and verified professionals.
            </p>
            <p className="text-lg text-light-text leading-relaxed">
              Currently, we are proud to be providing our services to industry
              leaders like Blinkit and Bigbasket, ensuring they have access to
              reliable delivery personnel whenever they need them.
            </p>

            {/* Partner Logos */}
            <div className="flex flex-wrap gap-6 items-center mt-4">
              <span className="text-lg font-semibold text-dark-text">
                Serving:
              </span>
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  className="bg-white px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden bg-white" style={{ borderRadius: '2.5rem' }}>
              <img
                src="/Deliverysection.png"
                alt="Delivery Partner Service"
                className="w-full h-auto object-contain"
                style={{ borderRadius: '2.5rem' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-gradient-to-br from-[#f7ec1e]/10 to-[#ed6526]/10 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-dark-text mb-3">
                {feature.title}
              </h4>
              <p className="text-light-text leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DeliveryPartnerSection

