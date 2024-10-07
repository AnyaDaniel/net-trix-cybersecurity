import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NET-TRIX - CYBERSECURITY',
  description: 'Net Trix Solutions: Advanced Cybersecurity Services | SOC Centers, Firewall Setup, Pentesting & Training',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'$(inter.className) bg-[#030014]  overflow-x-hidden'}>
        
        <Providers>{children}</Providers>
        
        </body>
    </html>
  )
}
