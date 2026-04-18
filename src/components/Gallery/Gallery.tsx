import styles from './Gallery.module.css';

export default function Gallery() {
  const items = Array.from({ length: 7 });

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className={styles.galleryGrid}>
          {items.map((_, idx) => (
            <div key={idx} className={`${styles.galleryItem} ${styles[`item${idx + 1}`]}`}>
              <div className={styles.placeholderBox}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
