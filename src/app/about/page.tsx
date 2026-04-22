import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import AboutHero from '@/components/AboutHero/AboutHero';
import OurMission from '@/components/OurMission/OurMission';
import OurLead from '@/components/OurLead/OurLead';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Careloop Healthcare, our mission to revolutionize post-discharge care, and the leadership team driving the future of medical connectivity.',
};
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
