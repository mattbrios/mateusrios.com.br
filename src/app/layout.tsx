import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mateusrios.com.br"),
  title: "Eu sou Mateus Rios | Seja bem vindo e sinta-se a vontade!",
  description:
    "Por aqui você vê um breve resumo de tudo que passei nestes mais de 16 anos de experiência como dev, designer, tech lead e 'quebra-galho' em todos as etapas e processos do desenvolvimento de software web.",
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
  openGraph: {
    title: "Eu sou Mateus Rios | Seja bem vindo e sinta-se a vontade!",
    description:
      "Por aqui você vê um breve resumo de tudo que passei nestes mais de 16 anos de experiência como dev, designer, tech lead e 'quebra-galho' em todos as etapas e processos do desenvolvimento de software web.",
    images: ["/images/og.jpg"],
    url: "https://www.mateusrios.com.br/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
