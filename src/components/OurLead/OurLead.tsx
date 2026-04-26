import Image from 'next/image';
import { User } from 'lucide-react';

const LinkedinIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
import styles from './OurLead.module.css';

export default function OurLead() {
  const leaders = [
    {
      name: "Kirti Singh",
      role: "FOUNDER & CEO",
      desc: "Building post-discharge care and medicine delivery solutions.",
      image: "/assets/kirtif.png",
      linkedin: "https://www.linkedin.com/in/kirti-singh-335a553a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Dr. Mohit Kaushik",
      role: "DIRECTOR & CO-FOUNDER",
      desc: "MBBS IMS BHU, MS AIIMS NEW DELHI.",
      image: "/assets/mohitf.png",
      linkedin: "#"
    },
    {
      name: "Arvind Rawat",
      role: "CPO",
      desc: "Guiding product strategy to build an intuitive, seamless experience for both patients and healthcare providers.",
      image: "/assets/arvindf.png",
      linkedin: "https://www.linkedin.com/in/arvind-rawat-86222928b"
    },
    {
      name: "Mac",
      role: "CTO",
      desc: "Spearheading technological infrastructure, ensuring bank-grade security, scalability, and robust EHR integrations.",
      image: "/assets/macf.png",
      linkedin: "#"
    }
  ];

  return (
    <section className={styles.leadSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.tag}>
            <User size={14} className={styles.tagIcon} />
            OUR LEADERSHIP
          </div>
          <h2 className={styles.heading}>Meet Our Leadership</h2>
          <div className={styles.separator}>
            <span className={styles.line}></span>
            <span className={styles.dot}></span>
            <span className={styles.line}></span>
          </div>
        </div>
        
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
                />
              </div>
              <div className={styles.leadContent}>
                <h3>{lead.name}</h3>
                <div className={styles.role}>
                  <User size={12} className={styles.roleIcon} />
                  {lead.role}
                </div>
                <p>{lead.desc}</p>
                <div className={styles.socials}>
                  <a 
                    href={lead.linkedin} 
                    className={styles.linkedinBtn} 
                    aria-label={`${lead.name} LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

