import { MessageCircle, Phone } from 'lucide-react';
import styles from './WhatsAppCTA.module.css';

export default function WhatsAppCTA() {
  return (
    <section className={styles.whatsappSection}>
      <div className="container">
        <div className={styles.whatsappCard}>
          <div className={styles.iconBubble}>
            <MessageCircle size={40} />
          </div>
          <div className={styles.textContent}>
            <h3>Chat or Call with CareLoop on WhatsApp</h3>
            <p>Get instant support, book services, or ask questions — all through WhatsApp</p>
          </div>
          <div className={styles.actions}>
            <a href="https://wa.me/919xxxxxxxx" className={styles.whatsappBtn} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a href="tel:+919xxxxxxxx" className={styles.callBtn}>
              <Phone size={20} />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
