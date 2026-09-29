import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes : true,
  images : {
    remotePatterns : [{
      protocol : 'https',
      hostname : 'www.ccdad.com'
    }]
  }
};

export default nextConfig;
