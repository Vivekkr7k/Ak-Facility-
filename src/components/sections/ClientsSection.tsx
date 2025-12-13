import { motion } from 'framer-motion'
import { useState } from 'react'

const ClientsSection = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})
  const clients = [
    {
      name: 'Curefood',
      logo: '/Clientslogo/curefoods.png',
    },
    {
      name: 'Uddan',
      logo: '/Clientslogo/uddan.jpg',
    },
    {
      name: 'Blink IT',
      logo: '/Clientslogo/blinkit.jpg',
    },
    {
      name: 'Big basket',
      logo: '/Clientslogo/big-basket.jpg',
    },
    {
      name: 'Laundrymate',
      logo: '/Clientslogo/laundrymate.webp',
    },
    {
      name: 'Uddan Fresh',
      logo: '/Clientslogo/uddanfresh.webp',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#f7ec1e]/10 via-white to-white">
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
            <span>Our Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6">
            Clients We
            <br />
            <span className="text-primary-orange">Serve</span>
          </h2>
          <p className="text-xl text-light-text leading-relaxed">
            Trusted by leading companies for our professional facility services
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30 flex flex-col items-center justify-center min-h-[140px] gap-3"
              variants={itemVariants}
            >
              <div className="w-full h-20 flex items-center justify-center">
                {!imageErrors[index] ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                  />
                ) : (
                  <div className="text-lg md:text-xl font-semibold text-dark-text text-center">
                    {client.name}
                  </div>
                )}
              </div>
              {!imageErrors[index] && (
                <h3 className="text-sm md:text-base font-medium text-light-text text-center mt-2">
                  {client.name}
                </h3>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection

