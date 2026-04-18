import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.footerGrid}>

          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/logo.png" 
                alt="CareLoop Logo" 
                width={200} 
                height={90} 
                className={styles.footerLogo}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* Navigation Column */}
          <div className={styles.footerLinks}>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#my-care">My Care</Link></li>
              <li><Link href="/#providers">Providers</Link></li>
              <li><Link href="#">Back to Top</Link></li>
            </ul>
          </div>

          {/* Policies Column */}
          <div className={styles.footerLinks}>
            <h4>Policies</h4>
            <ul>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Refunds and Cancellations</Link></li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className={styles.footerLinks}>
            <h4>Contacts</h4>
            <ul>
              <li className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                abc@careloop.in
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                +91-9xxxxxxxx9
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                Address Line 1, City, State, PINCODE
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
