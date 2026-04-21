import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <Image 
        src="/logo.png" 
        alt="CareLoop Logo" 
        width={150} 
        height={60} 
        style={{ objectFit: 'contain', marginBottom: '2rem' }}
      />
      <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#121826', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#4b5563', marginBottom: '2rem' }}>
        Lost your way in the Care Loop?
      </h2>
      <p style={{ color: '#6b7280', maxWidth: '500px', marginBottom: '3rem', lineHeight: 1.6 }}>
        The page you are looking for might have been moved, removed, or never existed in this recovery plan.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
