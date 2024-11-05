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
};

export default nextConfig;
