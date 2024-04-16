import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Head from "next/head";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Neuron Talks',
  description: 'Click for enter to conference',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta property="og:title" content={metadata.title} data-rh="true"></meta>
      <meta property="og:description" content={metadata.description} data-rh="true"></meta>
      <meta property="og:image" content="/images/banner1.jpg" data-rh="true"></meta>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
