/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // The UNLISTED front door: pricing lives in the console app (app.poily.com/pricing),
  // rendered from the live plan registry so it can never drift from what checkout sells.
  // A redirect, not a page, until plan-tokens let this site render pricing natively.
  // temporary (307) on purpose - the destination will change when that lands.
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: 'https://app.poily.com/pricing',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
