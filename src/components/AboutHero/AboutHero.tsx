import Image from 'next/image';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}>
        {/* Placeholder for the wide background image */}
        <div className={styles.placeholderImage}>Background Team Photo</div>
      </div>
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            <h1>ABOUT US</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
            <div className={styles.btnGroup}>
               <button className="btn-outline">Services</button>
               <button className="btn-primary">Get Started</button>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            {/* Real photo overlaying the layout */}
            <div className={styles.placeholderTeam}>Team Photo Placeholder</div>
            {/* <Image src="/assets/about-team.png" alt="Careloop Team" fill style={{objectFit: 'cover', borderRadius: '1rem'}} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
