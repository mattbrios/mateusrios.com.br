import React from "react";
import { ProfessionalExperience } from "./ProfessionalExperience";
import { HighlightedProject } from "./HighlightedProject";
import { Title } from "./Title";
import { TechClasses } from "./TechClasses";
import { Paragraph } from "./Paragraph";
import { calcExperienceYears, WORKING_SINCE_YEAR } from "@/lib/profile";

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
        background em UI/UX Design — apaixonado por construir produtos digitais
        tecnicamente sólidos, performáticos e agradáveis de usar.
      </Paragraph>
      <Paragraph>
        Comecei em {WORKING_SINCE_YEAR} ainda na era do Flash (ActionScript 3)
        e, desde então, passei por diferentes papéis — de desenvolvedor a Team
        Leader, Project Manager e Tech Leader — até entender que é na área
        técnica que encontro mais entusiasmo. Hoje meu foco está em React,
        Next.js e TypeScript, com atuação também no backend com Node.js,
        NestJS, PostgreSQL e MySQL, além de arquitetura de software, Design
        Systems, testes automatizados e CI/CD.
      </Paragraph>
      <Paragraph>
        Sou especialista em Desenvolvimento Assistido por IA: uso Claude Code e
        Spec Driven Development no dia a dia, partindo de especificações
        detalhadas para guiar a implementação, a geração de testes e o code
        review — o que encurta o caminho entre a ideia e o código em produção
        sem abrir mão de qualidade.
      </Paragraph>
      <Paragraph>
        Meu diferencial está na combinação entre engenharia e design: além de
        desenvolver interfaces, tenho experiência prática em UI/UX,
        prototipação e construção de Design Systems, aproximando decisões
        técnicas das necessidades reais do usuário e do produto. Na Big Cupom,
        por exemplo, desenvolvo e mantenho mais de 70 aplicações React/Next.js
        que atendem mais de 8 milhões de cadastros e 15 mil usuários
        simultâneos.
      </Paragraph>
      <Paragraph>
        Também carrego uma experiência sólida em liderança técnica — já liderei
        equipes de até 23 desenvolvedores, mentorei profissionais e participei
        de decisões de arquitetura, processos e tecnologia. Essa vivência me
        ajuda a enxergar o desenvolvimento de software de forma mais ampla: não
        só código, mas produto, pessoas e experiência do usuário.
      </Paragraph>
      <Paragraph>
        Sou curioso, colaborativo e gosto de desafios que me façam aprender —
        especialmente quando envolvem produtos financeiros e investimentos,
        área que acompanho com interesse pessoal. Frontend, backend, UI/UX e
        aprendizado contínuo: vamos trabalhar juntos?
      </Paragraph>

      <ProfessionalExperience />

      <HighlightedProject />

      <Title>Formação acadêmica</Title>
      <SubTitle>Centro Universitário de Itajubá</SubTitle>
      <Paragraph>
        MBA em Gerenciamento de Projetos - PMI{" "}
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
