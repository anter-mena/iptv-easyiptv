import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EasyIPTV',
    short_name: 'EasyIPTV',
    description: 'The easiest way to watch IPTV in Canada',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7fa409',
    icons: [
      { src: '/icon.png', sizes: 'any', type: 'image/png', purpose: 'any' },
      { src: '/icon.png', sizes: 'any', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
