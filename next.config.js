/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.nerands.com",
                pathname: "/**",
            },
        ],
    },
    reactStrictMode: false,
};

module.exports = nextConfig;
