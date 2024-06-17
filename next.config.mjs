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
    ],
  },
  output: "export",
};

export default nextConfig;
