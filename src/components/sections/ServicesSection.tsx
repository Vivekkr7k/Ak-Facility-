import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Housekeeping & Deep Cleaning',
      description:
        'Day-to-day upkeep plus intensive deep cleaning to keep your spaces fresh, sanitized, and guest-ready.',
      image:
        'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Office & Commercial Cleaning',
      description:
        'Professional cleaning for offices, retail, and commercial sites to boost productivity and presentation.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Facility Maintenance',
      description:
        'Preventive maintenance, pest control, landscaping, and ongoing support to keep facilities running smoothly.',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Manpower & Workforce',
      description:
        'Trained manpower supply for loading, unloading, warehouse, security, retail, and on-ground operations.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white via-[#f7ec1e]/10 to-[#ed6526]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit mx-auto mb-4 sm:mb-6 font-semibold text-xs sm:text-sm">
            <span>Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-text mb-4 sm:mb-6">
            Freshness At Your
            <br />
            <span className="text-primary-orange">Fingertips</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light-text leading-relaxed">
            We provide a comprehensive range of cleaning and facility
            management services, from day-to-day housekeeping to deep cleaning
            and specialized manpower solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-dark-text mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-light-text leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-primary-orange font-semibold hover:underline inline-flex items-center gap-2"
                >
                  <span>Learn More</span>
                  <svg
                    width="16"
                    height="16"
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
