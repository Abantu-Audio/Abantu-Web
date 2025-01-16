/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Configure this based on your image domains
      },
    ],
  },
};

export default nextConfig;
