const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // External packages for server components (Next.js 15+)
  serverExternalPackages: ['mongodb', 'mongoose'],
  webpack(config, { dev }) {
    if (dev) {
      // Reduce CPU/memory from file watching
      config.watchOptions = {
        poll: 2000, // check every 2 seconds
        aggregateTimeout: 300, // wait before rebuilding
        ignored: ['**/node_modules'],
      };
    }
    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security Headers - Production Ready
          { 
            key: "X-Frame-Options", 
            value: "SAMEORIGIN" // Changed from ALLOWALL for security
          },
          { 
            key: "X-Content-Type-Options", 
            value: "nosniff" 
          },
          { 
            key: "X-XSS-Protection", 
            value: "1; mode=block" 
          },
          { 
            key: "Referrer-Policy", 
            value: "strict-origin-when-cross-origin" 
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          },
          { 
            key: "Content-Security-Policy", 
            value: "frame-ancestors 'self';" // Restrict to same origin
          },
          // CORS Headers - Configurable via environment
          { 
            key: "Access-Control-Allow-Origin", 
            value: process.env.CORS_ORIGINS || "*" 
          },
          { 
            key: "Access-Control-Allow-Methods", 
            value: "GET, POST, PUT, DELETE, PATCH, OPTIONS" 
          },
          { 
            key: "Access-Control-Allow-Headers", 
            value: "Content-Type, Authorization" 
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
