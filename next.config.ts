import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The sign-in form loads brand logos from a remote CDN.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.21st.dev",
        pathname: "/assets/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
