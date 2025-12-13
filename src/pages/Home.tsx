import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import DeliveryPartnerSection from '../components/sections/DeliveryPartnerSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import GallerySection from '../components/sections/GallerySection'
import ClientsSection from '../components/sections/ClientsSection'
import BookSection from '../components/sections/BookSection'

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden pb-20 md:pb-0">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <DeliveryPartnerSection />
      <WhyChooseUs />
      <GallerySection />
      <ClientsSection />
      <TestimonialsSection />
      <BookSection />
    </div>
  )
}

export default Home


