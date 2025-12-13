import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rafiq Ahmed',
      role: 'Digital Creator',
      content:
        'A.K. Facility Services turned our office space into a fresh, spotless environment. Their team was friendly, on time, and truly professional. We finally have a workspace we\'re proud of!',
      avatar: 'RA',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Business Owner',
      content:
        'Outstanding service! They transformed our entire office building. The attention to detail and professionalism is unmatched. Highly recommend their services.',
      avatar: 'SJ',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Property Manager',
      content:
        'We\'ve been using A.K. Facility Services for over a year now. Consistent quality, reliable staff, and excellent customer service. They\'ve become an essential part of our operations.',
      avatar: 'MC',
      rating: 5,
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
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6">
            What Our Clients
            <br />
            <span className="text-primary-orange">Say</span>
          </h2>
          <p className="text-xl text-light-text leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="text-5xl text-primary-orange/30 mb-4 leading-none font-serif">"</div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary-yellow text-lg">★</span>
                ))}
              </div>
              <p className="text-light-text leading-relaxed mb-6 italic">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-dark-text">{testimonial.name}</div>
                  <div className="text-sm text-light-text">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection

