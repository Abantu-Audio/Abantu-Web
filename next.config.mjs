/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: [
      // Add your image domains here if you're using Next.js Image component
      'your-s3-bucket.s3.amazonaws.com'
    ]
  }
}

export default nextConfig
