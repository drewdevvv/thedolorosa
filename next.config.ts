import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['siohgmjmeoawouvbuxuo.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'siohgmjmeoawouvbuxuo.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;