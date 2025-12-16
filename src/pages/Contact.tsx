import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
  }

  return (
    <div className="w-full pt-20 pb-20 md:pb-0 overflow-x-hidden">
      <motion.section
        className="bg-gradient-to-br from-[#f7ec1e]/20 via-white to-[#ed6526]/10 py-20 lg:py-32 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full w-fit mx-auto mb-6 font-semibold text-sm">
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-text mb-4">
            Get In
            <br />
            <span className="text-primary-orange">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-text">
            Ready to transform your space? Contact us today for a free quote
          </p>
        </div>
      </motion.section>

      <section className="py-20 lg:py-32 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-4xl font-extrabold text-dark-text mb-4">
                  Contact
                  <br />
                  <span className="text-primary-orange">Information</span>
                </h2>
                <p className="text-lg text-light-text leading-relaxed">
                  We're here to help! Reach out to us through any of the following
                  channels.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">📞</div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-dark-text">Phone</h3>
                    <a
                      href="tel:+917349716787"
                      className="text-primary-orange hover:text-dark-text transition-colors"
                    >
                      +91-7349716787
                    </a>
                    <a
                      href="tel:+919845447400"
                      className="text-primary-orange hover:text-dark-text transition-colors"
                    >
                      +91-9845447400
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">✉️</div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-dark-text">Email</h3>
                    <a
                      href="mailto:facilityservicesak@gmail.com"
                      className="text-primary-orange hover:text-dark-text transition-colors break-all"
                    >
                      facilityservicesak@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">📍</div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-dark-text">Address</h3>
                    <p className="text-light-text leading-relaxed">
                      #7, Hanumaiah Reddy Road
                      <br />
                      Ulsoor, Bangalore 560008
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#f7ec1e]/20 to-[#ed6526]/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-dark-text mb-4">
                  Business Hours
                </h3>
                <p className="text-light-text mb-2">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-light-text">Sunday: Closed</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-light-gray p-8 lg:p-12 rounded-3xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-bold text-dark-text mb-4">
                  Book a Service
                </h2>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-semibold text-dark-text text-sm"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary-orange transition-colors bg-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-semibold text-dark-text text-sm"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary-orange transition-colors bg-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="font-semibold text-dark-text text-sm"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary-orange transition-colors bg-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="font-semibold text-dark-text text-sm"
                  >
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary-orange transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="housekeeping">Housekeeping & Deep Cleaning</option>
                    <option value="office-cleaning">Office & Commercial Cleaning</option>
                    <option value="specialized">Specialized Cleaning</option>
                    <option value="maintenance">Facility Maintenance</option>
                    <option value="manpower">Labour & Manpower Supply</option>
                    <option value="delivery">Delivery & Logistics Staffing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-semibold text-dark-text text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-primary-orange transition-colors bg-white resize-y min-h-[120px]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-dark-text text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-primary-orange hover:shadow-lg hover:shadow-primary-orange/30 hover:-translate-y-1 mt-4"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
