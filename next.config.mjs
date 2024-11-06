/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    compiler: {
        styledComponents: true,
        styledJsx: true,
    },
    images: {
        unoptimized: true,
        domains: ["storage.googleapis.com"],
    },

  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [{ type: "host", value: "api.skyups.com" }],
        destination: "https://api.skyups.com/api/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
