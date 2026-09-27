/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverMinification: false,
    serverComponentsExternalPackages: ['rebrowser-playwright-core', 'rebrowser-playwright'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('rebrowser-playwright-core', 'rebrowser-playwright');
    }
    config.module.rules.push({
      test: /\.(ttf|html)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;

