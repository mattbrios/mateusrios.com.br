import React from "react";
import { ProfessionalExperience } from "./ProfessionalExperience";
import { HighlightedProject } from "./HighlightedProject";
import { Title } from "./Title";
import { TechClasses } from "./TechClasses";
import { Paragraph } from "./Paragraph";
import { calcExperienceYears, EMAIL_ADDRESS } from "@/lib/profile";

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-lg font-bold uppercase px-2">{children}</h3>;
};

export const Content = () => {
  return (
    <div className="col-span-2 py-6">
      <Title>Sobre mim</Title>
      <Paragraph>
        Sou Desenvolvedor Full Stack Sênior com foco em Front-end, com mais de{" "}
        {calcExperienceYears()} anos de experiência em desenvolvimento web e
        background em UI/UX Design. Hoje mantenho mais de 70 aplicações em
        produção na Big Cupom, atendendo mais de 8 milhões de cadastros e picos
        de 15 mil usuários simultâneos.
      </Paragraph>
      <Paragraph>
        Meu diferencial está na combinação entre engenharia e design. Além de
        desenvolver interfaces, tenho experiência prática em UI/UX, prototipação
        e construção de Design Systems. Na prática, isso significa menos
        retrabalho entre design e código e decisões técnicas mais próximas das
        necessidades reais do usuário e do produto.
      </Paragraph>
      <Paragraph>
        Meu foco técnico está em React, Next.js e TypeScript, com atuação também
        no back-end com Node.js, NestJS, PostgreSQL e MySQL, além de arquitetura
        de software, testes automatizados e CI/CD.
      </Paragraph>
      <Paragraph>
        Também incorporei IA ao meu processo de engenharia: trabalho com Claude
        Code e Spec Driven Development, partindo de especificações que guiam a
        implementação, os testes e o code review. É o que encurta o caminho
        entre a ideia e o código em produção sem abrir mão de qualidade.
      </Paragraph>
      <Paragraph>
        Carrego ainda uma experiência sólida em liderança técnica: já liderei
        equipes de até 23 desenvolvedores, mentorei profissionais e participei
        de decisões de arquitetura, processos e tecnologia. Essa vivência me
        ajuda a enxergar o desenvolvimento de forma mais ampla, não só como
        código, mas como produto, pessoas e experiência do usuário.
      </Paragraph>
      <Paragraph>
        Estou aberto a oportunidades como Desenvolvedor Full Stack Sênior, em
        modelo remoto ou híbrido.{" "}
        <a
          className="font-semibold text-cyan-800 dark:text-cyan-200"
          href={`mailto:${EMAIL_ADDRESS}`}
        >
          Vamos conversar?
        </a>
      </Paragraph>

      <ProfessionalExperience />

      <HighlightedProject />

      <Title>Formação acadêmica</Title>
      <SubTitle>Centro Universitário de Itajubá</SubTitle>
      <Paragraph>
        MBA em Gerenciamento de Projetos{" "}
        <span className="text-xs opacity-75">2013-2015</span>
      </Paragraph>
      <SubTitle>Centro Universitário de Itajubá</SubTitle>
      <Paragraph>
        Bacharelado em Sistemas de Informação{" "}
        <span className="text-xs opacity-75">2008-2011</span>
      </Paragraph>

      <TechClasses />
    </div>
  );
};
