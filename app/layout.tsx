import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(240deg 10% 3.92%)' }
  ]
};
const yekanBakh = localFont({
  src: './fonts/YekanBakh-VF.woff2',
  variable: '--font-yekan-bakh',
})
export const metadata: Metadata = {
  title: "ماکس | تحلیل احساسات",
  description: "تحلیل احساسات با هوش مصنوعی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${yekanBakh.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
