// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'custom',
      path: '',
    },
    webpack: (config, { isServer }) => {
      // This is a workaround for the HMR issue
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };
      }
      return config;
    },
  };
  
  export default nextConfig;
  