import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import AboutHero from '@/components/AboutHero/AboutHero';
import OurMission from '@/components/OurMission/OurMission';
import OurLead from '@/components/OurLead/OurLead';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurMission />
      <OurLead />
      <Footer />
    </main>
  );
}
