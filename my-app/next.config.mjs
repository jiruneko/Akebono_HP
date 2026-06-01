/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '127.0.0.1',
    '192.168.1.58',
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
};

export default nextConfig;