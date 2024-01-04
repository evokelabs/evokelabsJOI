import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EVOKE LABS || Creative Technologist',
  description: 'Welcome to Evoke Labs: the portfolio and business hub of Adrian Pikios, a Sydney-based freelance creative technologist.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='w-full h-full'>
      <body className={`${inter.className} w-full h-full`}>{children}</body>
    </html>
  )
}
