/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  images: {
    formats: ['image/avif','image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  },
  i18n: {
    locales: ['en','es'],
    defaultLocale: 'en'
  }
}
module.exports = nextConfig
