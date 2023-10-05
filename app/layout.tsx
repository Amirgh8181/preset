import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import NextTopLoader from 'nextjs-toploader';


export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <>
        <link rel="manifest" href="public/manifest.json" />
        <link rel="apple-touch-icon" href="public/icon.svg"></link>
        <meta name="theme-color" content="#000" />
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </>
      <body>
        <Header />
        <NextTopLoader
          color="#000"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
