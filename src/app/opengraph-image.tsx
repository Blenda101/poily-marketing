import { renderOgImage } from './og-shared'

// edge runtime: next/og resolves its wasm/font assets cross-platform here
// (the node build hits an Invalid-URL bug on Windows). Logo is inlined, so no fs.
export const runtime = 'edge'
export const alt = 'Poily — The HubSpot for SaaS'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return renderOgImage()
}
