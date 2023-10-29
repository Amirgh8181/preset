import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import NextTopLoader from 'nextjs-toploader';


export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
      </body>
    </html>
  )
}
