/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.adsttc.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },

};

export default nextConfig;
