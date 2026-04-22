'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Mail, Phone, MapPin, Clock, Send, ShieldQuestion, ChevronDown, CheckCircle2 } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email Support", value: "careloop.health26@gmail.com" },
    { icon: <Phone size={24} />, label: "Phone", value: "+91-9236875061" },
    { icon: <MapPin size={24} />, label: "Headquarters", value: "Kakarmatta, Varanasi, Uttar Pradesh" },
    { icon: <Clock size={24} />, label: "Working Hours", value: "24/7 Care Coordination" },
  ];

  const faqs = [
    {
      q: "How do I get started with CareLoop?",
      a: "Simply download our app or ask your hospital discharge coordinator to enroll you in the CareLoop program. We handle the rest of the medical data syncing."
    },
    {
      q: "Is my medical data secure?",
      a: "Yes, we use military-grade industry-standard encryption and are compliant with global healthcare data privacy regulations including HIPAA benchmarks."
    },
    {
      q: "Can my family members monitor my recovery?",
      a: "Absolutely! You can grant secure access to your designated caregivers through the app so they receive real-time alerts and progress updates."
    },
    {
      q: "Does CareLoop provide direct medical advice?",
      a: "We provide algorithmic recovery plans and remote monitoring tools. Any critical clinical advice is always coordinated through your primary treating clinicians."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => setFormStatus('success'), 1500);
  };

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
                  <p>In case of a medical emergency, please call your local emergency number (102/112) or nearest hospital directly.</p>
                </div>
              </div>
            </div>

            <div className={styles.formColumn}>
              <div className={styles.formBox}>
                <h2 className={styles.colTitle}>Send a Message</h2>
                
                {formStatus === 'success' ? (
                  <div className={styles.successOverlay}>
                    <CheckCircle2 size={64} color="var(--success-green)" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. A care coordinator will contact you shortly.</p>
                    <button onClick={() => setFormStatus('idle')} className="btn-outline" style={{marginTop: '1.5rem'}}>Send another message</button>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <input type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Subject</label>
                      <select required>
                        <option value="">Select a reason</option>
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Partnership Request</option>
                        <option>Patient Feedback</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Message</label>
                      <textarea rows={6} placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn} disabled={formStatus === 'submitting'}>
                      <Send size={18} />
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <div className={styles.accordionGrid}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${activeFaq === idx ? styles.active : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className={styles.faqHeader}>
                  <h3>{faq.q}</h3>
                  <ChevronDown className={styles.chevron} />
                </div>
                <div className={styles.faqBody}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
