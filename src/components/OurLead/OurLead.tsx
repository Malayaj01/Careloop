import styles from './OurLead.module.css';

export default function OurLead() {
  const leaders = [
    {
      name: "Ms. Kirti Singh",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgPlaceholder: "Photo Placeholder"
    },
    {
      name: "Dr. Mohit Kaushik",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgPlaceholder: "Photo Placeholder"
    }
  ];

  return (
    <section className={styles.leadSection}>
      <div className="container">
        <h2 className="section-title">Our Lead</h2>
        <div className={styles.leadGrid}>
          {leaders.map((lead, idx) => (
            <div key={idx} className={styles.leadCard}>
              <div className={styles.imagePlaceholder}>
                {lead.imgPlaceholder}
              </div>
              <div className={styles.leadContent}>
                <h3>{lead.name}</h3>
                <p>{lead.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
