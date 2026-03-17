import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Harsh Verma - full-stack developer building modern web apps with React, Next.js, Node.js, and Java.",
  alternates: {
    canonical: "https://www.spideyharsh.me/",
  },
  openGraph: {
    title: "Harsh Verma | Full-Stack Developer Portfolio",
    description:
      "Explore projects, skills, and contact details of Harsh Verma.",
    url: "https://www.spideyharsh.me/",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Verma | Full-Stack Developer Portfolio",
    description:
      "Explore projects, skills, and contact details of Harsh Verma.",
    images: ["/opengraph-image.png"],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harsh Verma",
    url: "https://www.spideyharsh.me/",
    sameAs: [
      "https://github.com/Harsh-verma24",
      "https://www.linkedin.com/in/harsh-verma-68115a326/",
    ],
    jobTitle: "Full-Stack Developer",
    knowsAbout: ["React", "Next.js", "Node.js", "MongoDB", "Java", "Spring Boot"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Harsh Verma Portfolio",
    url: "https://www.spideyharsh.me/",
    inLanguage: "en",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePageClient />
    </>
  );
}
