import StylingProvider from './StylingProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <StylingProvider>
          <Navbar />
          {children}
          <Footer />
        </StylingProvider>
      </body>
    </html>
  )
}
