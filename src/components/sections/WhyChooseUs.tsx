import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Verified Professionals',
      description:
        'Trained and certified professionals who deliver exceptional results.',
      image:
        'https://directree.org/wp-content/uploads/2022/02/verfied-removebg-preview.png',
    },
    {
      id: 2,
      title: 'Eco-Friendly Products',
      description:
        'Safe for your family, pets, and the environment.',
      image:
        'https://img.freepik.com/premium-photo/bag-with-eco-friendly-products-green-background-flat-lay_1235831-74054.jpg',
    },
    {
      id: 3,
      title: 'On-Time Guarantee',
      description:
        'We respect your schedule and guarantee timely arrival.',
      image:
        'https://tse1.mm.bing.net/th/id/OIP.y90on-zrdZ5tGNsv70E-ewAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 4,
      title: 'Transparent Pricing',
      description:
        'No hidden fees, just clear pricing for the service you choose.',
      image:
        'https://tse1.mm.bing.net/th/id/OIP.PX3DYkH-OBNrmK5zvC-ZPgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3',
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Side */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-fit font-semibold text-xs sm:text-sm mb-2">
              <span>Why Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-text leading-tight">
              Trusted By Homes,
              <br />
              <span className="text-primary-orange">Loved By Families</span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            <p className="text-sm sm:text-base md:text-lg text-light-text leading-relaxed">
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
              <div
                className={`relative h-36 sm:h-40 md:h-48 overflow-hidden flex items-center justify-center ${
                  feature.id === 4
                    ? 'bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500'
                    : 'bg-gray-50'
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-dark-text mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-light-text leading-relaxed text-xs sm:text-sm">
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
