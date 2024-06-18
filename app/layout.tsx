import type { Metadata } from 'next'

import { Sora } from 'next/font/google'

import NavBar from '@/modules/core/components/navbar'
import '../styles/globals.css'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skillhub',
  description: 'Skillhub'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
