import { Download, CalendarCheck, MessageCircle } from 'lucide-react';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <h2>Start Your Recovery Journey Today</h2>
          <p>Download the app, book a service, or talk to a care coordinator</p>
          <div className={styles.btnGroup}>
            <button className={styles.btnPrimary}>
              <Download size={20} />
              Download App
            </button>
            <button className={styles.btnSecondary}>
              <CalendarCheck size={20} />
              Book Service
            </button>
            <button className={styles.btnSecondary}>
              <MessageCircle size={20} />
              Talk to Care Coordinator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
