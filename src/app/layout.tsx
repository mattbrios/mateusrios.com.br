import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { calcExperienceYears } from "@/lib/profile";
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
const TITLE =
  "Mateus Rios | Desenvolvedor Full Stack Sênior — React, Next.js e Node.js";
const DESCRIPTION = `Desenvolvedor Full Stack Sênior com foco em Front-end (React, Next.js, Node.js, TypeScript) e UI/UX Design. Mais de ${calcExperienceYears()} anos como dev, designer e tech lead em todas as etapas do desenvolvimento de software web.`;
const EMAIL = "mattbrios@gmail.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Mateus Rios",
    "Mateus Branco Rios",
    "Desenvolvedor Full Stack Sênior",
    "Desenvolvedor Front-end Sênior",
    "Senior Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "JavaScript",
    "Micro Frontends",
    "Design Systems",
    "UI/UX Design",
    "PostgreSQL",
    "Testes automatizados",
    "Arquitetura de software",
    "Spec Driven Development",
    "Claude Code",
    "Desenvolvimento assistido por IA",
    "desenvolvedor remoto",
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
        alt: "Mateus Rios - Desenvolvedor Full Stack Sênior com foco em Front-end",
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
  jobTitle: [
    "Desenvolvedor Full Stack Sênior",
    "Desenvolvedor Front-end Sênior",
  ],
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/memoji.png`,
  sameAs: [
    "https://www.linkedin.com/in/mateus-branco-rios",
    "https://github.com/mattbrios",
    "https://www.behance.net/mattbrios",
    "https://www.instagram.com/mattbrios/",
  ],
  email: EMAIL,
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "UI/UX Design",
    "Design Systems",
    "Spec Driven Development",
    "Claude Code",
    "Micro Frontends",
    "Desenvolvimento assistido por IA",
    "PostgreSQL",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Big Cupom",
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
