import type { Metadata } from "next"
import "./globals.css"
import { ColorProvider } from '@/components/color-provider'
import Layout from '@/components/layout'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ColorProvider>
      <Layout>
        {children}
      </Layout>
    </ColorProvider>
  )
}
