'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'My Care', path: '/my-care' },
    { name: 'Providers', path: '/providers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="container">
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="Careloop Healthcare Logo" 
            width={180} 
            height={80} 
            className={styles.logoImage}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
        
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={pathname === link.path ? styles.active : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <button className="btn-outline">Register</button>
          <button className="btn-primary">Login</button>
        </div>

        {/* Hamburger toggle */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={pathname === link.path ? styles.active : ''}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className={styles.mobileActions}>
          <button className="btn-outline" onClick={() => setMobileOpen(false)}>Register</button>
          <button className="btn-primary" onClick={() => setMobileOpen(false)}>Login</button>
        </div>
      </div>
    </nav>
  );
}
