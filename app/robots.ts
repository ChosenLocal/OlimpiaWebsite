import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://olimpiasbiohazard.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/admin',
          '/api',
          '/_next/',
          '/private/',
        ],
      },
      // Allow search engines to crawl all service and city pages
      {
        userAgent: '*',
        allow: ['/services/', '/service-areas/', '/es/', '/faqs', '/about', '/contact'],
      },
      // Specific rules for major search engines
      {
        userAgent: ['Googlebot', 'Googlebot-Image'],
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
