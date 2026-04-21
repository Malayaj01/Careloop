import Image from 'next/image';
import styles from './OurLead.module.css';

export default function OurLead() {
  const leaders = [
    {
      name: "Kirti Singh",
      role: "Founder and CEO",
      desc: "Building post-discharge care and medicine delivery solutions.",
      image: "/assets/kirti.png"
    },
    {
      name: "Dr. Mohit Kaushik",
      role: "Co-Founder",
      desc: "MBBS IMS BHU, MS AIIMS NEW DELHI. Operation manager, popular group of hospitals.",
      image: "/assets/mohit.png"
    },
    {
      name: "Arvind Rawat",
      role: "CPO",
      desc: "Guiding product strategy to build an intuitive, seamless experience for both patients and healthcare providers.",
      image: "/assets/team-arvind.jpg"
    },
    {
      name: "Mac",
      role: "CTO",
      desc: "Spearheading technological infrastructure, ensuring bank-grade security, scalability, and robust EHR integrations.",
      image: "/assets/team-mac.jpg"
    }
  ];

  return (
    <section className={styles.leadSection}>
      <div className="container">
        <h2 className="section-title">Meet Our Leadership</h2>
        <div className={styles.leadGrid}>
          {leaders.map((lead, idx) => (
            <div key={idx} className={styles.leadCard}>
              <div className={styles.imageWrap}>
                <Image
                  src={lead.image}
                  alt={lead.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.profileImg}
                // Fallback empty state is handled via CSS if image is not found visually
                />
              </div>
              <div className={styles.leadContent}>
                <h3>{lead.name}</h3>
                <span className={styles.role}>{lead.role}</span>
                <p>{lead.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

