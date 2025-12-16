import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Services = () => {
  const allServices = [
    {
      id: 'housekeeping',
      title: 'Housekeeping & Deep Cleaning',
      description:
        'Daily upkeep plus intensive deep cleaning to keep homes, offices, and commercial spaces spotless, sanitized, and guest-ready.',
      image:
        'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop',
      features: [
        'Day-to-Day Upkeep',
        'Intensive Deep Cleaning',
        'Washroom & Kitchen Detailing',
        'Upholstery & Carpet Care',
        'Floor Scrubbing & Polishing',
        'Pre-Opening & Post-Construction Clean',
      ],
    },
    {
      id: 'office-cleaning',
      title: 'Office & Commercial Cleaning',
      description:
        'Professional cleaning for offices, retail, and commercial sites to boost productivity, hygiene, and brand presentation.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      features: [
        'Office Deep Cleans',
        'Retail & Mall Cleaning',
        'Window & Glass Care',
        'Carpet & Upholstery Cleaning',
        'Dust & Allergen Control',
      ],
    },
    {
      id: 'specialized',
      title: 'Specialized Cleaning',
      description:
        'Targeted cleaning for high-touch or sensitive areas—facades, high windows, upholstery, and pressure wash zones.',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
      features: [
        'Facade & High-Level Cleaning',
        'Pressure Washing',
        'Steam & Sanitization',
        'Upholstery & Carpet Restoration',
      ],
    },
    {
      id: 'maintenance',
      title: 'Facility Maintenance',
      description:
        'Preventive maintenance, pest management, landscaping, and ongoing facility support to keep operations smooth.',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      features: [
        'Preventive Maintenance',
        'Pest Management',
        'Landscaping & Grounds',
        'Facility Upkeep & Repairs',
      ],
    },
    {
      id: 'manpower',
      title: 'Manpower Supply',
      description:
        'Reliable manpower supply for loading, unloading, warehouse, security, retail, stewards, and on-ground operations.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      features: [
        'Loading & Unloading',
        'Warehouse & Logistics Support',
        'Security & Access Control',
        'Retail & Stewards (KST)',
        'Picking & Packing',
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery & Logistics Staffing',
      description:
        'Trained riders and delivery associates for last-mile operations (Klydo and allied partners).',
      image:
        'https://images.unsplash.com/photo-1541417904950-b855846fe074?w=600&h=400&fit=crop',
      features: [
        'Riders & Delivery Associates',
        'Verified & Trained Workforce',
        'Route & Time Discipline',
        'Scalable Bench for Peaks',
      ],
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
    <div className="w-full pt-20 pb-20 md:pb-0">
      <motion.section
        className="bg-gradient-to-br from-[#f7ec1e]/20 via-white to-[#ed6526]/10 py-12 sm:py-16 md:py-20 lg:py-32 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit mx-auto mb-4 sm:mb-6 font-semibold text-xs sm:text-sm">
            <span>Our Services</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-dark-text mb-3 sm:mb-4">
            Comprehensive Facility
            <br />
            <span className="text-primary-orange">Solutions</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-light-text">
            Professional cleaning, housekeeping, and manpower supply services tailored to your needs
          </p>
        </div>
      </motion.section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allServices.map((service) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark-text">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-light-text leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex-grow">
                    <h4 className="text-sm sm:text-base font-semibold text-dark-text mb-2 sm:mb-3">
                      Services Include:
                    </h4>
                    <ul className="flex flex-col gap-1.5 sm:gap-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm text-dark-text flex items-center gap-1.5 sm:gap-2"
                        >
                          <span className="text-primary-orange font-bold text-base sm:text-lg flex-shrink-0">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs sm:text-sm text-primary-orange font-medium">
                          +{service.features.length - 4} more services
                        </li>
                      )}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-primary-orange to-primary-yellow text-white px-4 py-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary-orange/30 hover:-translate-y-1 mt-3 sm:mt-4 w-full text-center"
                  >
                    Book This Service
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
