import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={`container ${styles.aboutGrid}`}>
        <div className={styles.imageContent}>
          <Image
            src="/assets/aboutuss.jpg"
            alt="Careloop Medicine Delivery – Care, Connect, Deliver"
            width={600}
            height={400}
            className={styles.aboutImage}
            priority
          />
        </div>
        <div className={styles.textContent}>
          <h2>About Us</h2>
          <p>
            Careloop Healthcare is dedicated to transforming the post-hospitalization journey into a seamless,
            highly supportive experience. We bridge the gap between patients and healthcare providers
            by integrating specialized post-discharge care, digital health records, medicine delivery,
            and lab testing all in one place.
          </p>
          <p>
            Founded by <span className={styles.founders}>Kirti Singh</span> (kirtiraisingh5@gmail.com) and{' '}
            <span className={styles.founders}>Dr. Mohit Kaushik</span> (mkkaushikmohit@gmail.com), Careloop Healthcare leverages
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
