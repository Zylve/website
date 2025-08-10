import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
      if (dev) {
          config.watchOptions = {
              poll: true,
          };
      }
      return config;
  },
};

export default nextConfig;
