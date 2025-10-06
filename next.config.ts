import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typedRoutes: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
};

export default nextConfig;
