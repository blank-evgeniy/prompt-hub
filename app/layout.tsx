import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import '@/app/styles/globals.css'
import { BaseLayout } from '@/layouts/base-layout'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: 'Prompt Hub',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  )
}
