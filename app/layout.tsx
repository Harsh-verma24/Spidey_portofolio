import type { Metadata } from "next";
import localFont from "next/font/local";
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
  metadataBase: new URL("https://www.spideyharsh.me/"),
  title: {
    default: "Harsh Verma | Full-Stack Developer Portfolio",
    template: "%s | Harsh Verma",
  },
  description:
    "Full-stack developer skilled in MERN stack. Currently learning Spring Boot and DSA with Java. Explore my projects and experience.",
  keywords: [
    "Harsh Verma",
    "Full-stack developer",
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
  applicationName: "Harsh Verma Portfolio",
  alternates: {
    canonical: "https://www.spideyharsh.me/",
  },
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
    description: "Full-stack developer skilled in MERN stack. Currently learning Spring Boot and DSA with Java. Explore my projects and experience.",
    url: "https://www.spideyharsh.me/",
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
      "Explore projects, skills, and work by Harsh Verma, a full-stack developer focused on modern web experiences.",
    images: ["/opengraph-image.png"],
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
