import { Stethoscope, BarChart3, FileCheck, Users } from 'lucide-react';
import styles from './ForDoctors.module.css';

export default function ForDoctors() {
  const benefits = [
    { icon: <Users size={28} />, text: "Manage patient follow-up" },
    { icon: <BarChart3 size={28} />, text: "Reduce re-admissions" },
    { icon: <FileCheck size={28} />, text: "Digital records & easy engagement tools" },
  ];

  return (
    <section className={styles.doctorsSection} id="providers">
      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.textContent}>
            <span className={styles.badge}>For Providers</span>
            <h2>Partner with CareLoop</h2>
            <p className={styles.subtitle}>
              Empower your practice with smart post-discharge tools. Keep patients engaged, 
              reduce readmissions, and deliver better outcomes.
            </p>
            <div className={styles.benefitsList}>
              {benefits.map((benefit, idx) => (
                <div key={idx} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
            <button className={styles.ctaBtn}>
              <Stethoscope size={20} />
              Join as Doctor / Hospital
            </button>
          </div>
          <div className={styles.visualContent}>
            <div className={styles.dashboardPlaceholder}>
              <div className={styles.mockCard}>
                <div className={styles.mockStat}>
                  <span className={styles.mockValue}>↑ 78%</span>
                  <span className={styles.mockLabel}>Better Patient Health Outcomes</span>
                </div>
                <div className={styles.mockStat}>
                  <span className={styles.mockValue}>10K+</span>
                  <span className={styles.mockLabel}>Patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
