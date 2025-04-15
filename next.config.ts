// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 86400 // 24小時,
    
  }
};

export default nextConfig;
