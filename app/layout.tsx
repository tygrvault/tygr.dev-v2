import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';
import Nav from '@/components/nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'tygr.dev',
  description: 'A professional idiot.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html >
  )
}
