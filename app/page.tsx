import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Harsh Verma | Full-Stack Developer Portfolio and Projects",
  description:
    "Explore the portfolio of Harsh Verma, a full-stack developer building high-performance products with Next.js, React, Node.js, MongoDB, and Java.",
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
    title: "Harsh Verma | Full-Stack Developer Portfolio and Projects",
    description:
      "Explore full-stack projects, technical strengths, and real-world builds by Harsh Verma using Next.js, React, Node.js, MongoDB, and Java.",
    url: "https://www.spideyharsh.me",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Harsh Verma portfolio preview with projects and call to action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Verma | Full-Stack Developer Portfolio and Projects",
    description:
      "Explore full-stack projects, technical strengths, and practical builds by Harsh Verma. View projects and connect for collaboration.",
    images: ["/opengraph-image"],
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
        "https://x.com/harsh_vrma24",
        "https://www.instagram.com/urr.harsh_/",
        "https://leetcode.com/u/spidermanhoon",
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
        url: "https://www.spideyharsh.me/opengraph-image",
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
