import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.mateusrios.com.br";
const TITLE = "Eu sou Mateus Rios | Seja bem vindo e sinta-se a vontade!";
const DESCRIPTION =
  "Por aqui você vê um breve resumo de tudo que passei nestes mais de 16 anos de experiência como dev, designer, tech lead e quebra-galho em todos as etapas e processos do desenvolvimento de software web.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Mateus Rios",
    "Mateus",
    "Rios",
    "dev",
    "desenvolvimento de software",
    "front-end",
    "back-end",
    "currículo",
    "dev front",
    "software",
    "software developer",
    "software front-end",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Design Systems",
    "Senior Software Engineer",
  ],
  authors: [{ name: "Mateus Rios", url: SITE_URL }],
  creator: "Mateus Rios",
  publisher: "Mateus Rios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Mateus Rios",
    locale: "pt_BR",
    type: "profile",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 627,
        alt: "Mateus Rios - Front-end Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mateus Branco Rios",
  alternateName: "Mateus Rios",
  jobTitle: "Front-end Engineer",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/memoji.png`,
  sameAs: [
    "https://www.linkedin.com/in/mateus-branco-rios",
    "https://github.com/mattbrios",
    "https://www.behance.net/mattbrios",
    "https://www.instagram.com/mattbrios/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Impacting Group",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Centro Universitário de Itajubá",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  knowsLanguage: ["pt-BR", "en"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
