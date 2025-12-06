import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Services = () => {
  const allServices = [
    {
      id: 'housekeeping',
      title: 'Housekeeping Services',
      description:
        'Comprehensive housekeeping and cleaning services to keep your space fresh, organized, and spotless.',
      image:
        'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop',
      features: [
        'Day To Day Cleaning',
        'High Level and Deep Cleaning',
        'Washroom Cleaning',
        'Kitchen Deep Cleaning',
        'Upholstery And Carpet Cleaning',
        'Floor Cleaning, Scrubbing, and Polishing',
        'Facade Cleaning',
        'PEST Management',
        'Gardening and Flower Arrangement',
        'Pre Opening Property Cleaning',
      ],
    },
    {
      id: 'office-cleaning',
      title: 'Office & Commercial Cleaning',
      description:
        'Professional cleaning services for offices, retail outlets, and commercial spaces to boost productivity and maintain a professional environment.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      features: [
        'Office Deep Clean',
        'Retail Outlet Cleaning',
        'Shopping Mall Maintenance',
        'Commercial Space Cleaning',
        'Window Cleaning',
        'Carpet and Upholstery Cleaning',
      ],
    },
    {
      id: 'manpower',
      title: 'Manpower Supply',
      description:
        'As a reputable company in the employment industry, we provide employment and staffing solutions to various organizations. Our innovative spirit, community focus, and time-honored integrity set us apart as a full-service staffing agency.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      features: [
        'Loading and Unloading',
        'Picking and Packing',
        'Security Guards',
        'Kitchen Stewards (KST)',
        'Retail Outlets Staff',
        'Warehouse Staff',
        'Logistics Support',
      ],
    },
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning Services',
      description:
        'Thorough deep cleaning services for residential and commercial properties. We ensure every corner is spotless and sanitized.',
      image:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
      features: [
        'Complete Home Deep Clean',
        'Kitchen Deep Cleaning',
        'Bathroom Deep Cleaning',
        'Pre-Opening Property Cleaning',
        'Post-Construction Cleaning',
        'Move-in/Move-out Cleaning',
      ],
    },
    {
      id: 'specialized',
      title: 'Specialized Cleaning Services',
      description:
        'Expert services for specific cleaning needs including upholstery, carpets, facades, and specialized areas.',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
      features: [
        'Upholstery & Carpet Cleaning',
        'Facade Cleaning',
        'High Level Window Cleaning',
        'Floor Scrubbing & Polishing',
        'Pressure Washing',
        'Steam Cleaning',
      ],
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support Services',
      description:
        'Comprehensive maintenance solutions including pest management, gardening, and ongoing facility upkeep.',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      features: [
        'PEST Management',
        'Gardening and Flower Arrangement',
        'Facility Maintenance',
        'Preventive Maintenance',
        'Landscaping Services',
        'Grounds Keeping',
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
    <div className="w-full pt-20">
      <motion.section
        className="bg-gradient-to-br from-[#f7ec1e]/20 via-white to-[#ed6526]/10 py-20 lg:py-32 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full w-fit mx-auto mb-6 font-semibold text-sm">
            <span>Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-text mb-4">
            Comprehensive Facility Solutions
          </h1>
          <p className="text-xl md:text-2xl text-light-text">
            Professional cleaning, housekeeping, and manpower supply services tailored to your needs
          </p>
        </div>
      </motion.section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allServices.map((service) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-0 group"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col gap-6">
                  <h3 className="text-3xl font-bold text-dark-text">
                    {service.title}
                  </h3>
                  <p className="text-lg text-light-text leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-text mb-4">
                      Services Include:
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-dark-text flex items-center gap-3"
                        >
                          <span className="text-primary-orange font-bold text-xl flex-shrink-0">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-primary-orange to-primary-yellow text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-orange/30 hover:-translate-y-1 mt-4 w-fit"
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
