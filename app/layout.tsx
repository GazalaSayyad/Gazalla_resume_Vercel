import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { resumeData } from '@/data/resume-data'
import '@/styles/globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: `${resumeData.personal.name} | ${resumeData.personal.title}`,
  description: `Professional resume of ${resumeData.personal.name} — ${resumeData.personal.title} specializing in modern web technologies, cloud architecture, and scalable applications.`,
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
// import type { Metadata } from "next"
// import { Inter, JetBrains_Mono } from "next/font/google"
// import "@/styles/globals.css"

// export const metadata: Metadata = {
//   title: "Gazala Sayyad | Resume",
//   description: "AI Architect, Gen AI Engineer, and Data Scientist portfolio.",
// }

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// })

// const jetBrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   variable: "--font-jetbrains-mono",
//   display: "swap",
// })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   )
// }
