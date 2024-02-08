import type { Metadata } from 'next'
import { Noto_Sans} from 'next/font/google'
import './globals.css'
import AppProvider from '@/providers/appProvider'
import Footer from '@/components/footer/footer'

const josefin= Noto_Sans({ subsets: ['latin'] ,weight:['400', '500','600','700']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-slate-100 dark:text-gray-100 overflow-x-hidden mx-auto dark:bg-gray-900 `}>
        <AppProvider>
        <div className="">
        <div className="">
        {children}
        </div>
        <Footer/>
        </div>
        </AppProvider>
        </body>
    </html>
  )
}
