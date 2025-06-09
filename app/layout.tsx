import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nguyễn Văn Tuấn Anh - Full Stack Developer",
  description: "Portfolio cá nhân của Nguyễn Văn Tuấn Anh - Full Stack Developer & UI/UX Designer",
  generator: "v0.dev",
  metadataBase: new URL("https://nvtank.id.vn"),
  openGraph: {
    title: "Nguyễn Văn Tuấn Anh - Full Stack Developer",
    description: "Portfolio cá nhân của Nguyễn Văn Tuấn Anh - Full Stack Developer & UI/UX Designer",
    url: "https://nvtank.id.vn",
    siteName: "NVTank Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Văn Tuấn Anh - Full Stack Developer",
    description: "Portfolio cá nhân của Nguyễn Văn Tuấn Anh - Full Stack Developer & UI/UX Designer",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
