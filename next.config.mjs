/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
        domains: ["storage.googleapis.com"],
    },

    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://api.skyups.com/api/:path*", // Proxy to external API
            },
        ];
    },
};

export default nextConfig;
