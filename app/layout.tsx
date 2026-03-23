import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "./components/home/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

const heatherGreen = localFont({
  src: "./fonts/Heathergreen.otf",
  variable: "--font-heather-green",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spideyharsh.me"),
  title: {
    default: "Harsh Verma | Full-Stack Developer Portfolio",
    template: "%s | Harsh Verma",
  },
  description:
    "Harsh Verma is a full-stack developer building modern web applications with Next.js, React, Node.js, MongoDB, and Java. Explore projects, skills, and contact details.",
  keywords: [
    "Harsh Verma",
    "Harsh Verma portfolio",
    "Full-stack developer portfolio",
    "USICT",
    "University School of Information and Communication Technology",
    "GGSIPU",
    "Guru Gobind Singh Indraprastha University",
    "BTech IT",
    "BTech in IT 2024-28",
    "MERN stack",
    "Next.js portfolio",
    "React developer",
    "Spring Boot",
    "Java",
    "Web development",
  ],
  authors: [{ name: "Harsh Verma" }],
  creator: "Harsh Verma",
  publisher: "Harsh Verma",
  category: "technology",
  applicationName: "Harsh Verma Portfolio",
  verification: {
    google: "51LPhSkC5MEKSF32aak17orPuLRLgyqSwHkN87XsAQk",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Harsh Verma | Full-Stack Developer Portfolio",
    description:
      "Portfolio of Harsh Verma featuring full-stack web projects built with Next.js, React, Node.js, and Java.",
    url: "https://www.spideyharsh.me",
    siteName: "Harsh Verma Portfolio",
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
  twitter: {
    card: "summary_large_image",
    title: "Harsh Verma | Full-Stack Developer Portfolio",
    description:
      "Explore projects, skills, and contact details of Harsh Verma, a full-stack developer focused on modern web applications.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-S0FDJW5NZX"></Script>
      <Script id="gtag-init">{
        `const dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-S0FDJW5NZX');`
      }
      </Script>
      <body
        className={`${heatherGreen.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <SmoothScroll />
        <Footer />
      </body>

    </html>
  );
}
