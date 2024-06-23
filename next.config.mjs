/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ufbmksliiqqmgbqqwsve.supabase.co",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
