import React from "react";
import { ProfessionalExperience } from "./ProfessionalExperience";
import { Title } from "./Title";
import { TechClasses } from "./TechClasses";
import { Paragraph } from "./Paragraph";

export const Content = () => {
  const SubTitle = (props) => {
    return <p className="text-lg font-bold uppercase px-2">{props.children}</p>;
  };

  return (
    <div className="col-span-2 py-6">
      <Title>Sobre mim</Title>
      <Paragraph>
        Sou uma pessoa comunicativa, positiva, trabalhadora e analítica.
        Trabalho com tecnologia há mais de 15 anos por formação e vocação. Já
        transitei em diversas áreas do desenvolvimento de software e atualmente
        trabalho como desenvolvedor full-stack e UI Designer.
      </Paragraph>
      <Paragraph>
        Ultimamente atuo em diversos projetos com a infra na AWS, backend em
        NodeJS utilizando Express e no frontend, geralmente as aplicações são
        desenvolvidas em ReactJS e NextJS, as vezes com auxílio do Material UI
        ou Tailwind.
      </Paragraph>
      <Paragraph>
        A minha experiência em UI Designer foi por oportunidade: Desde pequeno
        tive um olhar mais aprimorado para reconhecer um bom design. A partir
        desta oportunidade profissional, me aprimorei com diversos estudos sobre
        UI/UX, psicologia das cores, semântica e hoje tenho mais de 8 anos à
        frente do design também.
      </Paragraph>
      <Paragraph>
        Já programei em mais de 6 linguagens e também já liderei times de
        desenvolvimento de software com mais de 30 pessoas. Também atuei como
        Gerente de Projetos usando a metodologia Scrum.
      </Paragraph>
      <Paragraph>
        Finalemnte, sou um cara que ama desafios que absorvam conhecimento.
        Gosto do senso analítico, então procuro sempre levantar o cenário mais
        abrangente possível para uma tomada de decisão mais acertada, seja em
        design de experiência ou tecnologia aplicada.
      </Paragraph>

      <ProfessionalExperience />

      <Title>Formação acadêmica</Title>
      <SubTitle>Centro Universitário de Itajubá</SubTitle>
      <Paragraph>
        MBA em Gerenciamento de Projetos - PMI{" "}
        <span className="text-xs opacity-75">2013-2015</span>
      </Paragraph>
      <SubTitle>Centro Universitário de Itajubá</SubTitle>
      <Paragraph>
        Graduação em Sistemas de Informação{" "}
        <span className="text-xs opacity-75">2008-2012</span>
      </Paragraph>

      <TechClasses />
    </div>
  );
};
