import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

/* 
The Poppins function comes from the @next/font/google package, 
and when called, it returns an object that can be used in components to apply the font styling.
*/

export const metadata: Metadata = {
  title: 'Sravani Gurram',
  description: 'Portfolio website of Sravani Gurram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
