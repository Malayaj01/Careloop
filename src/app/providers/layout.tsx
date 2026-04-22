import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Providers',
  description: 'Partner with CareLoop to streamline post-discharge followups, reduce hospital readmissions, and manage digital health records efficiently.',
};

export default function ProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
