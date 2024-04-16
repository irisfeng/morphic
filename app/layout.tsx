import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { AI } from './action'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'AI智能搜索 深受Morphic启发'
const description = '一个完全开源的AI搜索引擎'

export const metadata: Metadata = {
  metadataBase: new URL('https://sou.kgland.info'),
  title,
  description,
  openGraph: {
    title,
    description
  }
  // twitter: {
  //   title,
  //   description,
  //   card: 'summary_large_image',
  //   creator: '@miiura'
  // }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AI>{children}</AI>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
