import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className="container">
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="CareLoop Logo" 
            width={180} 
            height={80} 
            className={styles.logoImage}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/my-care">My Care</Link>
          <Link href="/providers">Providers</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className={styles.actions}>
          <button className="btn-outline">Register</button>
          <button className="btn-primary">Login</button>
        </div>
      </div>
    </nav>
  );
}
