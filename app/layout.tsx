import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextBnB',
  description: 'NextBnB clone built with Next.js and Tailwind CSS',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel="Submit" title="Hello World" isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
