import '@/app/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NEZU - Az Életmód Webshop',
  description: 'Prémium Whiskey, BBQ, Kids, Plastic és Pet termékek egyenesen Yiwu-ból.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
