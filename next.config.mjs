/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/claim-form",
        permanent: true, // Set to false if the redirect is temporary
      },
    ]
  },
}

export default nextConfig
