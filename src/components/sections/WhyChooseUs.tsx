import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Verified Professionals',
      description:
        'Trained and certified professionals who deliver exceptional results.',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Eco-Friendly Products',
      description:
        'Safe for your family, pets, and the environment.',
      image:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'On-Time Guarantee',
      description:
        'We respect your schedule and guarantee timely arrival.',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Transparent Pricing',
      description:
        'No hidden fees, just clear pricing for the service you choose.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-[#f7ec1e]/10 to-[#ed6526]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <div className="text-sm text-light-text font-medium">- Why Us</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text leading-tight">
              Trusted By Homes, Loved By Families
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            <p className="text-lg text-light-text leading-relaxed">
              We use verified professionals and eco-friendly products to provide
              a seamless and trustworthy cleaning experience. Our commitment to
              excellence ensures your space is not just clean, but truly fresh
              and well-maintained.
            </p>
          </div>
        </motion.div>

        {/* Features Grid - 4 cards in a row */}
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
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-light-text leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
