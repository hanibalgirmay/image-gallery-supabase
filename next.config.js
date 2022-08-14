/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bit.ly","images.pexels.com"],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_SUPABASE_ROLE_KEY: process.env.NEXT_SUPABASE_ROLE_KEY,
  },
};
