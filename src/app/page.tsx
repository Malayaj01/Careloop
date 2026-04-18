import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Services from '@/components/Services/Services';
import SmartFeatures from '@/components/SmartFeatures/SmartFeatures';
import AboutUs from '@/components/AboutUs/AboutUs';
import ForDoctors from '@/components/ForDoctors/ForDoctors';
import TrustBuilders from '@/components/TrustBuilders/TrustBuilders';
import ServiceAvailability from '@/components/ServiceAvailability/ServiceAvailability';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <SmartFeatures />
      <AboutUs />
      <ForDoctors />
      <TrustBuilders />
      <ServiceAvailability />
      <Footer />
    </main>
  );
}
