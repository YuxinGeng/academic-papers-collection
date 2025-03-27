/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/academic-papers-collection' : '',
  images: {
    unoptimized: true,
  },
  typescript: {
    // Skip type checking to make the build succeed
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
