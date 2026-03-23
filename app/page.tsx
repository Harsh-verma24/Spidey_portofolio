import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Harsh Verma | Full-Stack Developer Portfolio",
  description:
    "Portfolio website of Harsh Verma, a full-stack developer building performant web apps with Next.js, React, Node.js, MongoDB, and Java.",
  keywords: [
    "Harsh Verma",
    "Harsh Verma portfolio",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "MERN developer",
    "Java developer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Harsh Verma | Full-Stack Developer Portfolio",
    description:
      "Explore full-stack projects, technical skills, and contact details of Harsh Verma.",
    url: "https://www.spideyharsh.me",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Harsh Verma Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Verma | Full-Stack Developer Portfolio",
    description:
      "Explore full-stack projects, technical skills, and contact details of Harsh Verma.",
    images: ["/opengraph-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.spideyharsh.me/#person",
      name: "Harsh Verma",
      url: "https://www.spideyharsh.me/",
      image: "https://www.spideyharsh.me/images/harsh.jpg",
      sameAs: [
        "https://github.com/Harsh-verma24",
        "https://www.linkedin.com/in/harsh-verma-68115a326/",
      ],
      jobTitle: "Full-Stack Developer",
      knowsAbout: ["React", "Next.js", "Node.js", "MongoDB", "Java", "Spring Boot"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.spideyharsh.me/#website",
      url: "https://www.spideyharsh.me/",
      name: "Harsh Verma Portfolio",
      inLanguage: "en",
      publisher: {
        "@id": "https://www.spideyharsh.me/#person",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.spideyharsh.me/#webpage",
      url: "https://www.spideyharsh.me/",
      name: "Harsh Verma | Full-Stack Developer Portfolio",
      isPartOf: {
        "@id": "https://www.spideyharsh.me/#website",
      },
      about: {
        "@id": "https://www.spideyharsh.me/#person",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.spideyharsh.me/opengraph-image.png",
      },
      inLanguage: "en",
      description:
        "Portfolio website of Harsh Verma featuring full-stack projects, skills, and contact details.",
    },
  ],
};

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
