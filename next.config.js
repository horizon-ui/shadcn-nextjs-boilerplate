const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/a/**',
    },
  ],
  reactStrictMode: false,
  swcMinify: true,
  assetPrefix: '/shadcn-nextjs-boilerplate',
  images: {
    domains: [
      'images.unsplash.com',
      'i.ibb.co',
      'scontent.fotp8-1.fna.fbcdn.net',
    ],
    // Make ENV
    unoptimized: true,
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
