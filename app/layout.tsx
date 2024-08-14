import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'

import { Footer, NavBar } from '@/modules/core/components'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Skillhub',
  description: 'Discover and connect with the best talents'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative">
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
