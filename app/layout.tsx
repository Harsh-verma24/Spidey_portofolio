import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "./components/home/Navbar";
import SmoothScroll from "./components/SmoothScroll";

const heatherGreen = localFont({
  src: "./fonts/Heathergreen.otf",
  variable: "--font-heather-green",
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
        className={`${heatherGreen.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <SmoothScroll />
      </body>
    </html>
  );
}
