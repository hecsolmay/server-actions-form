import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster} from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prueba de los Formularios',
  description: 'Probando los nuevos server actions con los formularios en next 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
