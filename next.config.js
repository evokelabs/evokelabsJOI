/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // output: 'export',
  // reactStrictMode: true,
  // swcMinify: true,
  // images: {
  //   unoptimized: true
  // }
  headers: () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=1209600, immutable'
        },
        {
          key: 'x-frame-options',
          value: 'DENY'
        },
        {
          key: 'x-xss-protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
}

module.exports = nextConfig
