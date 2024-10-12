/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tony-web3-jobs.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
