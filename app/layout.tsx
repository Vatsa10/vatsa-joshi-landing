import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vatsajoshi.in";
const SITE_NAME = "Vatsa Joshi — Portfolio";
const DESCRIPTION =
  "Vatsa Joshi is a full-stack AI engineer building agentic systems, RAG pipelines, and fine-tuned LLMs. Currently shipping legal AI at Promact on BharatLaw.ai.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vatsa Joshi — Building agentic systems",
    template: "%s · Vatsa Joshi",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Vatsa Joshi", url: SITE_URL }],
  creator: "Vatsa Joshi",
  publisher: "Vatsa Joshi",
  generator: "Next.js",
  keywords: [
    "Vatsa Joshi",
    "Vatsa10",
    "AI engineer",
    "agentic AI",
    "multi-agent systems",
    "LangGraph",
    "LangChain",
    "RAG",
    "retrieval-augmented generation",
    "LLM fine-tuning",
    "LoRA",
    "QLoRA",
    "Promact",
    "BharatLaw.ai",
    "legal AI",
    "Navrachana University",
    "Vadodara",
    "software engineer",
    "Python",
    "TypeScript",
    "Rust",
    "portfolio",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
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
    type: "profile",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Vatsa Joshi — Building agentic systems",
    description: DESCRIPTION,
    locale: "en_IN",
    firstName: "Vatsa",
    lastName: "Joshi",
    username: "Vatsa10",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsa Joshi — Building agentic systems",
    description: DESCRIPTION,
    creator: "@Vatsa10",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f4ef",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vatsa Joshi",
  alternateName: ["Vatsa10", "Vatsa"],
  url: SITE_URL,
  image: `${SITE_URL}/assets/vatsa.jpg`,
  jobTitle: "Software Engineer (AI)",
  description:
    "Full-stack AI engineer specialising in agentic systems, RAG, and LLM fine-tuning.",
  worksFor: {
    "@type": "Organization",
    name: "Promact Infotech",
    url: "https://promactinfo.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Navrachana University",
    url: "https://nuv.ac.in",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  nationality: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Agentic AI",
    "Multi-agent Systems",
    "Retrieval-Augmented Generation",
    "Large Language Models",
    "LLM Fine-tuning",
    "LoRA",
    "QLoRA",
    "LangGraph",
    "LangChain",
    "Deep Learning",
    "Computer Vision",
    "Python",
    "TypeScript",
    "Rust",
  ],
  knowsLanguage: ["English", "Hindi", "Gujarati"],
  email: "mailto:vatsajoshi2@gmail.com",
  telephone: "+91-97375-57799",
  sameAs: [
    "https://github.com/Vatsa10",
    "https://vatsajoshi.in",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  author: { "@type": "Person", name: "Vatsa Joshi", url: SITE_URL },
  publisher: { "@type": "Person", name: "Vatsa Joshi", url: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = [
    archivo.variable,
    instrumentSerif.variable,
    jetbrainsMono.variable,
    spaceGrotesk.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontClasses}>
      <body data-font="grotesk">
        {children}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
