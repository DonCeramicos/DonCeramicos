import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)", // para todas las rutas
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' https://maps.googleapis.com https://maps.gstatic.com https://apis.google.com 'unsafe-inline';",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://maps.gstatic.com;",
              "img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com https://lh3.googleusercontent.com https://firebasestorage.googleapis.com https://res.cloudinary.com;",
              "font-src 'self' https://fonts.gstatic.com;",
              "connect-src 'self' https://maps.googleapis.com https://maps.gstatic.com https://apis.google.com https://firebasestorage.googleapis.com https://res.cloudinary.com;",
              "frame-src https://www.google.com;",
            ].join(" "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
