import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/app/',
          '/auth/',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://abantuaudio.com/sitemap.xml',
  }
} 