import "./globals.css"

import type { Metadata } from "next"

export interface RootProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Amadeus - Vaka Çalışması",
  description:
    "Amadeus Travel to the Future başvurusu için yapılan vaka çalışması",
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
