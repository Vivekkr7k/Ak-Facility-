import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import BookSection from '../components/sections/BookSection'

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <BookSection />
    </div>
  )
}

export default Home


