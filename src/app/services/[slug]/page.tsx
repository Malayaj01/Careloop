import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';
import styles from './ServiceDetail.module.css';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.heroSubtitle}>{service.title}</span>
          <h1 className="hero-title">{service.subtitle}</h1>
          <p className={styles.heroDesc}>{service.heroDesc}</p>
        </div>
      </section>

      {/* Main Features */}
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className="section-title">Comprehensive {service.title} Features</h2>
          <div className={styles.grid}>
            {service.features.map((feature, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrap}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.benefitsGrid}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                Why Choose Our <br />
                <span className="text-primary">{service.title}</span>
              </h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                At CareLoop, we don&apos;t just provide services; we provide a safety net. 
                Our approach combines clinical excellence with digital convenience.
              </p>
              <div className={styles.benefitsList}>
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className={styles.benefitItem}>
                    <CheckCircle2 className={styles.checkIcon} size={24} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ 
              background: 'white', 
              borderRadius: '30px', 
              padding: '3rem', 
              boxShadow: 'var(--shadow-medium)',
              border: '1px solid var(--primary-blue)'
            }}>
               <div style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
                 {service.icon}
               </div>
               <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Get Started?</h3>
               <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>
                 Experience the seamless care you deserve. Join thousands of patients who trust CareLoop for their recovery.
               </p>
               <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
                  Inquire Now
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Empower Your Recovery Today</h2>
            <p>Join CareLoop and experience a smarter, connected health journey.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary-blue)', boxShadow: 'none' }}>
                Contact a Coordinator
              </Link>
              <Link href="/about" className="btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}
