import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { Content } from "@/components/Content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Eu sou Mateus Rios | Seja bem vindo e sinta-se a vontade!</title>
        <meta
          name="title"
          content="Eu sou Mateus Rios | Seja bem vindo e sinta-se a vontade!"
        />
        <meta
          name="description"
          content={`Por aqui você vê um breve resumo de tudo que passei nestes mais de 16 anos de experiência como dev, designer, tech lead e 'quebra-galho' em todos as etapas e processos do desenvolvimento de software web.`}
        />
        <meta
          name="keywords"
          content="Mateus Rios, Mateus, Rios, dev, desenvolvimento de software, front-end, back-end, currículo, dev front, software, software developer, software front-end"
        />

        <meta
          property="og:title"
          content="Eu sou Mateus Rios | Seja bem vindo e sinta-se a vontade!"
        />
        <meta
          property="og:description"
          content={`Por aqui você vê um breve resumo de tudo que passei nestes mais de 16 anos de experiência como dev, designer, tech lead e 'quebra-galho' em todos as etapas e processos do desenvolvimento de software web.`}
        />
        <meta
          property="og:image"
          content="https://blds-bigtesterv2.s3.amazonaws.com/assets/og.png"
        />
        <meta property="og:url" content="https://www.mateusrios.com.br/" />
      </Head>
      <Layout>
        <main className="container">
          <div className="lg:grid lg:grid-cols-3 gap-8">
            <Sidebar />
            <Content />
          </div>
        </main>
      </Layout>
    </>
  );
}
