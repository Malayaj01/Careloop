import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Stethoscope, BarChart3, FileCheck, Users, ArrowRight, ClipboardCheck, Building2, UserPlus, ShieldCheck } from 'lucide-react';
import styles from './providers.module.css';

export default function ProvidersPage() {
  const benefits = [
    {
      icon: <Users size={40} />,
      title: "Manage Patient Follow-Up",
      desc: "Streamline post-discharge follow-ups with automated reminders and real-time health tracking for every patient."
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Reduce Re-admissions",
      desc: "Lower readmission rates with proactive monitoring, early alerts, and structured recovery plans."
    },
    {
      icon: <FileCheck size={40} />,
      title: "Digital Records & Engagement",
      desc: "Access patient records digitally, share reports, and engage with patients through a seamless platform."
    },
    {
      icon: <Stethoscope size={40} />,
      title: "Clinical Dashboard",
      desc: "Get a bird's-eye view of all your patients' recovery progress, vitals, and medication adherence."
    }
  ];

  const steps = [
    {
      icon: <Building2 />,
      title: "Register Your Facility",
      desc: "Sign up your hospital or clinic on the CareLoop platform to get started."
    },
    {
      icon: <UserPlus />,
      title: "Add Care Teams",
      desc: "Onboard your doctors, nurses, and discharge coordinators to the portal."
    },
    {
      icon: <ClipboardCheck />,
      title: "Standardize Care Paths",
      desc: "Set up recovery templates and notification schedules for various conditions."
    },
    {
      icon: <ShieldCheck />,
      title: "Go Live",
      desc: "Start enrolling patients and monitor their recovery results in real-time."
    }
  ];

  return (
    <main>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className="container">
          <span className={styles.badge}>Healthcare Partners</span>
          <h1>Better Outcomes, <br /><span className="text-primary">Smarter Recovery</span></h1>
          <p className={styles.heroSubtitle}>
            Partner with CareLoop to provide a seamless transition from hospital to home. 
            Keep your patients connected, compliant, and healthy.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.heroBtn}>
              Join Our Network
              <ArrowRight size={18} />
            </button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className="container">
          <h2 className="section-title">The Provider Advantage</h2>
          <div className={styles.grid}>
            {benefits.map((benefit, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrap}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <h2 className="section-title">How To Partner</h2>
          <div className={styles.stepsGrid}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.stepItem}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepSeparator}></div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Hospital Partners</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>10K+</span>
              <span className={styles.statLabel}>Patients Managed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>30%</span>
              <span className={styles.statLabel}>Reduction in Readmissions</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.inquirySection}>
        <div className="container">
          <div className={styles.inquiryCard}>
            <div className={styles.inquiryContent}>
              <h2>Request a Demo</h2>
              <p>Speak with our partnership team to see how CareLoop can help your institution.</p>
              <form className={styles.formMini}>
                <input type="text" placeholder="Hospital/Clinic Name" className={styles.inputMini} />
                <input type="email" placeholder="Work Email Address" className={styles.inputMini} />
                <button type="submit" className="btn-primary">Get in Touch</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
