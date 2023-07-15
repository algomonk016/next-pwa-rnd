import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import Navbar from './ServiceWorkerRegister';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next-PWA',
  description: 'PWA app built with NextJs + Workbox',
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-500 text-slate-100'>
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
