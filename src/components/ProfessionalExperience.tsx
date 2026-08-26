import React from "react";
import { Title } from "./Title";

interface Position {
  title: string;
  period: string;
  locale?: string;
}

interface Experience {
  company: string;
  position: Position[];
  achievements: string[];
}

const data: Experience[] = [
  {
    company: "Impacting Group / Beeleads",
    position: [
      {
        title: "Full Stack Developer & UI Designer",
        period: "Julho 2018 aos dias atuais",
        locale: "Remoto - São Paulo, SP / Itajubá, MG",
      },
    ],
    achievements: [
      "Desenvolveu e manteve 70+ aplicações web modernas utilizando React, Next.js e Node.js, atendendo mais de 8 milhões de cadastros e mais de 15 mil usuários simultâneos.",
      "Estruturou uma arquitetura completa de identidade visual mediante customização estratégica de frameworks como Material UI e Tailwind CSS, assegurando conformidade total com as especificações visuais e implementação Pixel Perfect.",
      "Gerenciou a pipeline de CI/CD através da Vercel e AWS Amplify, automatizando deploys e reduzindo o tempo de release em 66%.",
      "Liderou code reviews e implementou boas práticas de Clean Code, resultando em redução de retornos após o release de produção e o retrabalho.",
      "Administrou serviços AWS incluindo Amplify, S3, IAM e Route53, otimizando custos, melhorando configurações e reforçando a segurança de infraestrutura.",
      "Criou designs de interface completos para mais de 50 produtos digitais, utilizando Figma, Adobe Illustrator e Photoshop em todo o processo — desde wireframes iniciais até protótipos finais interativos.",
      "Desenvolveu e manteve Design System corporativo, garantindo consistência visual em todas as aplicações.",
      "Integrou backend e frontend através de APIs REST, implementando autenticação e autorização seguras.",
      "Implementou testes unitários e de componentes com Jest e React Testing Library, elevando a cobertura de código e reduzindo bugs em produção.",
      "Criou documentos de guia de design, tipografia, paleta de cores, aplicação de marca e vídeos de usabilidade, visando a consistência da marca.",
      "Colaborou com equipes multidisciplinares para definir estilos, componentes, padrões visuais e tecnologias reutilizáveis.",
    ],
  },
  {
    company: "Freelancer",
    position: [
      {
        title: "Desenvolvimento de software (front-end & design)",
        period: "Desde 2014",
      },
    ],
    achievements: [
      "Realizou trabalhos de desenvolvimento front-end, UI/UX, identidade visual e produtos digitais para clientes e projetos independentes.",
      "Entregou identidades visuais, redesign de sites e apps, artes para redes sociais, UI para web e mobile, modernização de projetos legado e apresentações comerciais.",
      "Utilizou ReactJS, JQuery, WordPress ou o trio HTML, CSS e JS puro, conforme a necessidade de cada projeto.",
    ],
  },
  {
    company: "Savoir Tecnologia",
    position: [
      {
        title: "Tech Leader & UX/UI Designer",
        period: "2014 - 2018",
        locale: "Itajubá / MG",
      },
    ],
    achievements: [
      "Liderou e foi mentor de equipe técnica de até 23 desenvolvedores em projetos web e mobile de grande escala.",
      "Definiu arquitetura frontend e backend para aplicações utilizando HTML5, CSS3, PHP, CodeIgniter, MySQL, AngularJS e Ionic.",
      "Desenvolveu e supervisionou todo o fluxo de UI Design e práticas de UX, criando interfaces para mais de 10 aplicações.",
      "Desenvolveu padrões de design e componentização, reduzindo o tempo de desenvolvimento.",
      "Atuou como ponte entre equipes técnicas, clientes e demais stakeholders, traduzindo necessidades de negócio em soluções de produto e tecnologia.",
      "Participou da seleção, capacitação e desenvolvimento de profissionais, contribuindo para a evolução técnica e organizacional da equipe.",
    ],
  },
  {
    company: "Savoir Tecnologia",
    position: [
      {
        title: "Gerente de Projetos",
        period: "2013 - 2014",
        locale: "São Paulo / SP",
      },
    ],
    achievements: [
      "Gerenciou 10+ projetos simultâneos utilizando metodologias ágeis (Scrum).",
      "Coordenou cronogramas, recursos e stakeholders, mantendo 100% de entregas no prazo.",
      "Acompanhou todos os processos de desenvolvimento, controle de qualidade, testes e entrega.",
    ],
  },
  {
    company: "Savoir Tecnologia",
    position: [
      {
        title: "Team Leader",
        period: "2011 - 2013",
        locale: "Itajubá / MG",
      },
    ],
    achievements: [
      "Foi promovido a líder de equipe de desenvolvimento, coordenando uma equipe de ActionScript 3 e mobile.",
      "Mentorou mais de 6 desenvolvedores juniores em tecnologias web/mobile.",
      "Implementou a transição da estrutura de controle de versão do TortoiseSVN para Git.",
    ],
  },
  {
    company: "Savoir Tecnologia",
    position: [
      {
        title: "Programador AS3",
        period: "2010 - 2011",
        locale: "Itajubá / MG",
      },
    ],
    achievements: [
      "Desenvolveu aplicações interativas em ActionScript 3 para grandes marcas nacionais.",
      "Criou componentes reutilizáveis com animações complexas, resultando em interfaces dinâmicas e altamente interativas.",
    ],
  },
  {
    company: "UNIFEI - Universidade Federal de Itajubá",
    position: [
      {
        title: "Monitor e programador Java",
        period: "01-2010 - 06-2010",
        locale: "Itajubá / MG",
      },
    ],
    achievements: [
      "Atuou como monitor nos laboratórios de sistemas de informação e administração do IEPG - Instituto de Engenharia de Produção e Gestão.",
      "Desenvolveu, em Java, o projeto inicial de gerenciamento de patrimônio do instituto para a rede local.",
      "Deu suporte a software, hardware e rede nos laboratórios e salas do Instituto.",
    ],
  },
  {
    company: "FEPI - Centro Universitário de Itajubá",
    position: [
      {
        title: "Monitor de laboratório de tecnologia",
        period: "09-2008 - 12-2008",
        locale: "Itajubá / MG",
      },
    ],
    achievements: [
      "Responsável pela manutenção de hardware e software do Laboratório de Processamento de Dados.",
      "Realizou checklist de instalações, manipulação de diversos sistemas operacionais e monitoramento das máquinas.",
      "Deu suporte de informática aos alunos.",
    ],
  },
];

export const ProfessionalExperience = () => {
  return (
    <div>
      <Title className="mt-12">Experiência Profissional</Title>
      <ul>
        {data.map((xp, index) => (
          <li
            key={`experience_${index}`}
            className={`p-2 my-4 ${index % 2 !== 0 ? "bg-background2" : ""}`}
          >
            <div>
              <p className="text-xl font-bold uppercase">{xp.company}</p>
              <div className="mb-4">
                {xp.position.map((position, i) => (
                  <div key={`position_${index}_${i}`}>
                    <p className="font-bold">
                      {position.title}{" "}
                      <span className="text-xs opacity-75">
                        {position.period}
                        {position.locale ? ` · ${position.locale}` : ""}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {xp.achievements.map((achievement, i) => (
                  <li
                    key={`achievement_${index}_${i}`}
                    className="leading-6 text-sm"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
