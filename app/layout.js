import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GateKeeper',
  description: 'Web app to monitor access to secure buldings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        
        <main className="flex-grow">{children}
        <Analytics/>
        </main>
        <Footer />
      </body>
    </html>
  );
}
