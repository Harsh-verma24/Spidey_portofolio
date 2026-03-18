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
    default: "Harsh Verma | Full-Stack Developer | USICT (GGSIPU)",
    template: "%s | Harsh Verma",
  },
  description:
    "Full-stack developer skilled in MERN stack. BTech in IT (2024-28) at University School of Information and Communication Technology (USICT), Guru Gobind Singh Indraprastha University (GGSIPU). Currently learning Spring Boot and DSA with Java. Explore my projects and experience.",
  keywords: [
    "Harsh Verma",
    "Full-stack developer",
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
    title: "Harsh Verma | Full-Stack Developer | USICT (GGSIPU)",
    description: "Full-stack developer skilled in MERN stack. BTech in IT (2024-28) at USICT, GGSIPU. Currently learning Spring Boot and DSA with Java. Explore my projects and experience.",
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
    title: "Harsh Verma | Full-Stack Developer | USICT (GGSIPU)",
    description:
      "Explore projects, skills, and work by Harsh Verma, BTech IT (2024-28) at USICT, GGSIPU, focused on modern web experiences.",
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
      <head><meta name="google-site-verification" content="51LPhSkC5MEKSF32aak17orPuLRLgyqSwHkN87XsAQk" /></head>
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
