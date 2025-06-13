import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* configoptions here */

   
  images: {
    remotePatterns:  [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ]
  },
 
};

export default nextConfig;
