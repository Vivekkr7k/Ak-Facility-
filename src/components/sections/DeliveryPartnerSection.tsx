import { motion } from 'framer-motion'

const DeliveryPartnerSection = () => {
  const partners = [
    {
      id: 1,
      name: 'Klydo',
      logo: '/Delivery/logo.jpeg',
    },
  ]

  const deliveryImages = [
    '/Delivery/WhatsApp Image 2025-12-14 at 12.41.31 PM.jpeg',
    '/Delivery/WhatsApp Image 2025-12-14 at 12.41.32 PM.jpeg',
    '/Delivery/WhatsApp Image 2025-12-14 at 12.41.32 PM (1).jpeg',
    '/Delivery/WhatsApp Image 2025-12-14 at 12.41.32 PM (2).jpeg',
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
        'Trusted by Klydo for consistent, reliable last-mile performance.',
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
        {/* Image grid on top */}
        <motion.div
          className="relative overflow-hidden bg-white rounded-[2rem] p-3 sm:p-4 shadow-xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {deliveryImages.map((img, idx) => (
              <div
                key={idx}
                className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md aspect-square"
              >
                <img
                  src={img}
                  alt={`Klydo delivery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Text content below images */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center p-2 border border-gray-100"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            <div className="text-sm text-primary-orange font-semibold">Klydo Delivery</div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-dark-text">
            Trusted by Klydo Delivery
          </h3>
          <p className="text-lg text-light-text leading-relaxed">
            We supply fully vetted riders and delivery associates tailored for high-volume,
            last-mile operations. Our managed workforce model keeps fleets compliant,
            on time, and brand-ready for daily execution.
          </p>
          <p className="text-lg text-light-text leading-relaxed">
            Klydo partners with us to stay customer-ready every day, with trained,
            punctual professionals who uphold service quality while scaling quickly
            to demand.
          </p>
          <div className="h-2 md:h-3"></div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
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

