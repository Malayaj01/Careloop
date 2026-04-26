import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <h1>
            Your complete <span className={styles.highlight}>care journey</span> after hospital
          </h1>
          <p className={styles.subHeadline}>
            Post-discharge care, digital health records, medicine delivery, 
            lab tests &amp; radiology– seamlessly connected. <span className={styles.highlight}>All in one place</span>
          </p>
          <div className={styles.actions}>
            <Link href="#services">
              <button className={styles.btnGetStarted}>Get Started</button>
            </Link>
          </div>
        </div>
        
        <div className={styles.imageContent}>
          <div className={styles.heroImageWrap}>
            <Image 
              src="/assets/hero.png"
              alt="Careloop Healthcare - Medicine Delivery and Post-Discharge Care"
              width={600}
              height={400}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.statsWrapper}>
        <div className={`glass-panel ${styles.statsBar}`}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>78%</div>
            <div className={styles.statLabel}>Better Recovery Outcomes</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>10,000+</div>
            <div className={styles.statLabel}>Patients Supported</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>Care Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
