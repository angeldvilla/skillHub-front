import type { Metadata } from 'next'

import '@/styles/globals.css'
import { NavBar, Footer } from '@/modules/core/components'

export const metadata: Metadata = {
  title: 'Skillhub',
  description: 'Discover and connect with the best talents'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
