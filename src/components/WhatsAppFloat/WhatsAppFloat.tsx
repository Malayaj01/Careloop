'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFloat.module.css';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919xxxxxxxx"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
