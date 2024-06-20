import type { Metadata } from 'next'

import '@/styles/globals.css'
import NavBar from '@/modules/core/components/navbar'
import Footer from '@/modules/core/components/footer'

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
