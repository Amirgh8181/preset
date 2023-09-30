import '../styles/globals.css'
import type { Metadata } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'


export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <>
        <title>amir</title>
        <link rel="manifest" href="public/manifest.json" />
        <link rel="apple-touch-icon" href="public/icon.svg"></link>
        <meta name="theme-color" content="#000" />
      </>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
