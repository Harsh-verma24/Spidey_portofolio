import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import Navbar from "./components/home/Navbar";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-montserrat',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spideyharsh.me/"),
  title: "Harsh Verma - Portfolio",
  description: 
"Full-stack developer skilled in MERN stack. Currently learning Spring Boot and DSA with Java. Explore my projects and experience.",
  openGraph: {
    title: "Harsh Verma - Portfolio",
    description: "Full-stack developer skilled in MERN stack. Currently learning Spring Boot and DSA with Java. Explore my projects and experience.",
    url: "https://www.spideyharsh.me/",
    siteName: "Harsh Verma - Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Harsh Verma - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
