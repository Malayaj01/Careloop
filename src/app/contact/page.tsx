import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Mail, Phone, MapPin, Clock, Send, ShieldQuestion, HelpCircle } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email Support", value: "support@careloop.in" },
    { icon: <Phone size={24} />, label: "Phone", value: "+91-98765 43210" },
    { icon: <MapPin size={24} />, label: "Headquarters", value: "Level 4, Health Tech Hub, Bangalore, IN" },
    { icon: <Clock size={24} />, label: "Working Hours", value: "24/7 Care Coordination" },
  ];

  const faqs = [
    {
      q: "How do I get started with CareLoop?",
      a: "Simply download our app or ask your hospital discharge coordinator to enroll you in the CareLoop program."
    },
    {
      q: "Is my medical data secure?",
      a: "Yes, we use industry-standard encryption and are compliant with global healthcare data privacy regulations."
    },
    {
      q: "Can my family members monitor my recovery?",
      a: "Absolutely! You can grant access to your caregivers through the app so they receive alerts and updates."
    },
    {
      q: "Does CareLoop provide medical advice?",
      a: "We provide recovery plans and monitoring tools. Clinical advice is always coordinated with your primary treating hospital."
    }
  ];

  return (
    <main>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className="hero-title">Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Have questions about your recovery? Our support team and care coordinators 
            are available around the clock to assist you.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            <div className={styles.infoColumn}>
              <h2 className={styles.colTitle}>Get in Touch</h2>
              <div className={styles.infoCards}>
                {contactInfo.map((info, idx) => (
                  <div key={idx} className={styles.infoCard}>
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div>
                      <h4>{info.label}</h4>
                      <p>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.supportBadge}>
                <ShieldQuestion size={32} />
                <div>
                  <h4>Need Emergency Help?</h4>
                  <p>In case of a medical emergency, please call your local emergency number or nearest hospital directly.</p>
                </div>
              </div>
            </div>

            <div className={styles.formColumn}>
              <h2 className={styles.colTitle}>Send a Message</h2>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Subject</label>
                  <select>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Request</option>
                    <option>Patient Feedback</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea rows={6} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqCard}>
                <div className={styles.faqHead}>
                  <HelpCircle size={20} className="text-primary" />
                  <h3>{faq.q}</h3>
                </div>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
