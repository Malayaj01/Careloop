import Link from 'next/link';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={`container ${styles.aboutGrid}`}>
        <div className={styles.imageContent}>
          <div className={styles.imagePlaceholder}>
            About Us Photo
          </div>
        </div>
        <div className={styles.textContent}>
          <h2>About Us</h2>
          <p>
            Care Loop is dedicated to transforming the post-hospitalization journey into a seamless, 
            highly supportive experience. We bridge the gap between patients and healthcare providers 
            by integrating specialized post-discharge care, digital health records, medicine delivery, 
            and lab testing all in one place.
          </p>
          <p>
            Founded by <span className={styles.founders}>Kirti Singh</span> and{' '}
            <span className={styles.founders}>Dr. Mohit Kaushik</span>, Care Loop leverages 
            cutting-edge technology and a patient-first approach to reduce readmission rates and 
            provide peace of mind to both families and caretakers.
          </p>
          <Link href="/about">
            <button className="btn-primary">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
