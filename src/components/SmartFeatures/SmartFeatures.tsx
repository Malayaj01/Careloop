import { Activity, Bell, AlertTriangle, Users } from 'lucide-react';
import styles from './SmartFeatures.module.css';

export default function SmartFeatures() {
  const features = [
    {
      icon: <Activity size={40} />,
      title: "Recovery Score Dashboard",
      desc: "Track your recovery progress with a personalized health score updated daily."
    },
    {
      icon: <Bell size={40} />,
      title: "Medication Reminder",
      desc: "Never miss a dose with smart, timely reminders for all your medications."
    },
    {
      icon: <AlertTriangle size={40} />,
      title: "Alerts for Health Signs",
      desc: "Get instant alerts when your health vitals need attention or medical review."
    },
    {
      icon: <Users size={40} />,
      title: "Caregiver Access",
      desc: "Keep your family and caregivers informed with shared access to your care plan."
    }
  ];

  return (
    <section className={styles.smartSection}>
      <div className="container">
        <h2 className="section-title">Smart Features of CareLoop</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
