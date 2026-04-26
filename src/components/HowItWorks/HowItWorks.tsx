import { Upload, ClipboardList, Pill, FlaskConical } from 'lucide-react';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload size={32} />,
      title: "Upload Discharge Summary",
      desc: "Share your hospital discharge documents securely"
    },
    {
      icon: <ClipboardList size={32} />,
      title: "Get Personalized Recovery Plan",
      desc: "Receive a tailored plan designed for your recovery"
    },
    {
      icon: <Pill size={32} />,
      title: "Get Medication Reminders & Connect with Doctors",
      desc: "Never miss a dose and stay in touch with your care team"
    },
    {
      icon: <FlaskConical size={32} />,
      title: "Get Lab & Radiodiagnostic Tests at Home",
      desc: "Book lab tests, radiology & ambulance from the comfort of home"
    }
  ];

  const patientSteps = [
    "Personalised Recovery Care Plan",
    "Vital Monitoring",
    "Automated Follow Up",
    "Health Integration Services",
    "Personalised Health Vault",
    "One Tap Support System"
  ];

  const hospitalSteps = [
    "Onboard Hospital",
    "Add patients",
    "Track & Monitor",
    "Alerts & Follow Up"
  ];

  return (
    <section className={styles.howItWorksSection} id="how-it-works">
      <div className="container">
        <h2 className="section-title">How CareLoop Works</h2>
        
        {/* Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepNumber}>{idx + 1}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.patientCard}`}>
            <div className={styles.cardHeader}>
              <h3>For Patients</h3>
              <button className={`${styles.headerBtn} btn-outline`}>Register</button>
            </div>
            <div className={styles.list}>
              {patientSteps.map((step, idx) => (
                <div key={idx} className={styles.listItem}>
                  <div className={styles.numberBadge}>{idx + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.card} ${styles.hospitalCard}`}>
            <div className={styles.cardHeader}>
              <h3>For Hospitals</h3>
              <button className={`${styles.headerBtn} btn-outline`}>Register</button>
            </div>
            <div className={styles.list}>
              {hospitalSteps.map((step, idx) => (
                <div key={idx} className={styles.listItem}>
                  <div className={styles.numberBadge}>{idx + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
