/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/icons',
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
  compress: true,
  transpilePackages: ['ui'],
};
