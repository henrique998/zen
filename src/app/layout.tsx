import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Zen',
  description: 'Zen todo list app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
