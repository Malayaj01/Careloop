import { Target, Lightbulb, Users } from 'lucide-react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.orbTop}></div>
      <div className={styles.orbBottom}></div>

      <div className={`container ${styles.heroContainer}`}>

        {/* Header */}
        <div className={styles.headerWrapper}>
          <span className={styles.heroTag}>Our Story</span>
          <h1>
            Changing the <span className={styles.accent}>Course of Care</span>
          </h1>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>

          {/* Card 1 – Main Introduction (left column, spans both rows) */}
          <div className={`${styles.bentoCard} ${styles.blockMain}`}>
            <div className={styles.iconWrap}>
              <Users size={28} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.storyTitle}>Bridging the Gap</h3>
              <p className={styles.highlightText}>
                At Careloop Healthcare, we believe that the journey to recovery
                shouldn&apos;t end when a patient leaves the hospital. We are
                dedicated to transforming the post-hospitalization journey into a
                seamless, highly supportive experience through clinical excellence
                and compassionate support.
              </p>
            </div>
            <div className={styles.statStrip}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Patients Supported</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>30+</span>
                <span className={styles.statLabel}>Hospital Partners</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Care Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Card 2 – Origin Story (top-right, accent blue) */}
          <div className={`${styles.bentoCard} ${styles.blockAccent}`}>
            <div className={styles.iconWrap}>
              <Lightbulb size={26} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.storyTitle}>How The Idea Came</h3>
              <p>
                The idea came from observing that patients often struggle after
                hospital discharge — managing medicines, follow-ups, and proper
                care at home. I saw a clear gap between hospital treatment and
                recovery, which led directly to building Careloop.
              </p>
            </div>
          </div>

          {/* Card 3 – Vision (bottom-right) */}
          <div className={`${styles.bentoCard} ${styles.blockVision}`}>
            <div className={styles.iconWrap}>
              <Target size={26} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.storyTitle}>Our Vision</h3>
              <p>
                To make healthcare continuous, accessible, and patient-centric
                beyond hospital walls — transforming post-discharge care so every
                patient receives timely support, medication, and monitoring at home.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
