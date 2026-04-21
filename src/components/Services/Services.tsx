import Link from 'next/link';
import { HeartPulse, FileText, Truck, TestTubeDiagonal } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: "Post-Discharge Care",
      slug: "post-discharge-care",
      desc: "Follow-ups, monitoring, recovery plan, medication reminders",
      icon: <HeartPulse size={48} />
    },
    {
      title: "EHR (Electronic Health Record)",
      slug: "ehr",
      desc: "Store prescriptions, reports and history",
      icon: <FileText size={48} />
    },
    {
      title: "Medicine Delivery",
      slug: "medicine-delivery",
      desc: "Fast home delivery + reminders + refills",
      icon: <Truck size={48} />
    },
    {
      title: "Lab Tests at Home",
      slug: "lab-tests",
      desc: "Radiology and imaging, ambulance booking",
      icon: <TestTubeDiagonal size={48} />
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={`/services/${service.slug}`} 
              className={styles.serviceCard}
            >
              <div className={styles.iconContainer}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
