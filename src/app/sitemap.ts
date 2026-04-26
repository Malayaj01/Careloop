import { MetadataRoute } from 'next';
 
export const dynamic = 'force-static';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://careloop.in';

  // Core navigation pages
  const routes = [
    '',
    '/about',
    '/providers',
    '/my-care',
    '/contact',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
