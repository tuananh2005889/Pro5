import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nguyễn Văn Tuấn Anh - Full Stack Developer",
  description:
    "Portfolio của Nguyễn Văn Tuấn Anh - Sinh viên IT năm 2 tại VKU, chuyên về Java, React và phát triển web",
  generator: "v0.dev",
  metadataBase: new URL("https://nvtank.id.vn"),
  openGraph: {
    title: "Nguyễn Văn Tuấn Anh - Full Stack Developer",
    description:
      "Portfolio của Nguyễn Văn Tuấn Anh - Sinh viên IT năm 2 tại VKU, chuyên về Java, React và phát triển web",
    url: "https://nvtank.id.vn",
    siteName: "NVTank Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Văn Tuấn Anh - Full Stack Developer",
    description:
      "Portfolio của Nguyễn Văn Tuấn Anh - Sinh viên IT năm 2 tại VKU, chuyên về Java, React và phát triển web",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.27/bundled/lenis.min.js"></script>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
