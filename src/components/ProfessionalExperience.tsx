import React from "react";
import { Title } from "./Title";

interface Position {
  title: string;
  period: string;
  locale?: string;
  achievements: string[];
}

interface Experience {
  company: string;
  period?: string;
  locale?: string;
  summary?: string;
  positions: Position[];
}

const data: Experience[] = [
  {
    company: "Big Cupom",
    positions: [
      {
        title: "Desenvolvedor Full Stack Sênior (foco em Front-end & UI/UX)",
        period: "Junho 2018 aos dias atuais",
        locale: "Remoto - São Paulo, SP / Itajubá, MG",
        achievements: [
          "Arquitetura e evolução de 70+ aplicações full stack com React, Next.js, Node.js e TypeScript, para uma base de 8M+ cadastros, com picos de 15 mil usuários simultâneos.",
          "Desenvolvimento assistido por IA com Claude Code na implementação de features, refatoração, testes, code review e documentação.",
          "Automação de CI/CD (Vercel e AWS Amplify), reduzindo em 66% o tempo de release.",
          "Criação e manutenção de Design Systems e padrões de UI para múltiplos produtos, reduzindo em 25% o tempo de desenvolvimento.",
          "Testes automatizados com Jest e React Testing Library, reduzindo em 33% os bugs em produção.",
          "Entrega ponta a ponta: do wireframe e protótipo à implementação front-end e back-end (Node.js, APIs REST).",
          "Code review, definição de padrões técnicos e decisões de arquitetura.",
        ],
      },
    ],
  },
  {
    company: "Brios 3D",
    summary:
      "Negócio próprio de impressão 3D, onde conduzo a operação e o desenvolvimento do produto digital.",
    positions: [
      {
        title: "Fundador & Desenvolvedor Full Stack",
        period: "Agosto 2026 aos dias atuais",
        locale: "São Paulo, SP",
        achievements: [
          "Desenvolvimento de SaaS de gestão operacional (custos, estoque e vendas) com arquitetura de microsserviços.",
          "Back-end em Node.js e NestJS com TypeScript strict, PostgreSQL e Docker; front-end em React e Next.js.",
          "Adoção de Spec Driven Development com Claude Code, partindo de especificações detalhadas para guiar a implementação e a geração de testes.",
          "Criação de suíte de testes automatizados unitários com Vitest e testes E2E com Playwright.",
        ],
      },
    ],
  },
  {
    company: "Savoir Tecnologia",
    period: "Abril 2010 - Junho 2018 · 8 anos 3 meses",
    locale: "Itajubá e Região / São Paulo, Brasil",
    positions: [
      {
        title: "Tech Leader & UX/UI Designer",
        period: "Março 2014 - Junho 2018 · 4 anos 4 meses",
        locale: "Itajubá e Região, Brasil",
        achievements: [
          "Liderança e mentoria de uma equipe de até 23 desenvolvedores em projetos web e mobile, incluindo seleção e capacitação de profissionais.",
          "Definição de arquiteturas front-end e back-end com PHP, CodeIgniter, MySQL, AngularJS e Ionic.",
          "Concepção e implementação de interfaces para 10+ aplicações, dos fluxos e wireframes ao código.",
          "Criação de padrões de design e componentização reutilizável, aumentando a consistência visual e reduzindo o tempo de desenvolvimento.",
          "Ponte entre equipes técnicas, clientes e stakeholders, traduzindo necessidades de negócio em soluções de produto.",
        ],
      },
      {
        title: "Gerente de Projetos",
        period: "Junho 2013 - Março 2014 · 10 meses",
        locale: "São Paulo, Brasil",
        achievements: [
          "Gestão simultânea de 10+ projetos web com práticas ágeis inspiradas em Scrum, com 100% das entregas no prazo.",
          "Coordenação de cronogramas, recursos e stakeholders, com background técnico que facilitava decisões entre negócio e desenvolvimento.",
        ],
      },
      {
        title:
          "Líder de time / Coordenador de desenvolvimento ActionScript & Mobile",
        period: "Janeiro 2011 - Maio 2013 · 2 anos 5 meses",
        locale: "Itajubá e Região, Brasil",
        achievements: [
          "Promoção a líder de time da equipe de ActionScript 3 e mobile, mantendo atuação técnica direta nos projetos.",
          "Mentoria de 6+ desenvolvedores em início de carreira.",
          "Definição de padrões de desenvolvimento e estruturação da transição do controle de versão de SVN para Git.",
        ],
      },
      {
        title: "Desenvolvedor ActionScript Júnior",
        period: "Abril 2010 - Dezembro 2010 · 9 meses",
        locale: "Itajubá e Região, Brasil",
        achievements: [
          "Desenvolvimento de aplicações interativas e componentes reutilizáveis em ActionScript 3 para grandes marcas nacionais.",
        ],
      },
    ],
  },
  {
    company: "UNIFEI - Universidade Federal de Itajubá",
    positions: [
      {
        title: "Monitor e programador Java",
        period: "Janeiro 2010 - Junho 2010 · 6 meses",
        locale: "Itajubá / MG",
        achievements: [
          "Monitoria nos laboratórios de sistemas de informação e administração do IEPG - Instituto de Engenharia de Produção e Gestão.",
          "Desenvolvimento, em Java, do projeto inicial de gerenciamento de patrimônio do instituto para a rede local.",
          "Suporte a software, hardware e rede nos laboratórios e salas do Instituto.",
        ],
      },
    ],
  },
];

const PositionEntry = ({
  position,
  grouped,
}: {
  position: Position;
  grouped: boolean;
}) => {
  return (
    <li className="relative">
      {grouped && (
        <span
          aria-hidden="true"
          className="absolute -left-6 top-1.5 h-2 w-2 rounded-full bg-background3"
        />
      )}
      <h4 className="font-bold">{position.title}</h4>
      <p className="text-xs opacity-75 mb-2">
        {position.period}
        {position.locale ? ` · ${position.locale}` : ""}
      </p>
      <ul className="list-disc pl-5 space-y-1">
        {position.achievements.map((achievement, index) => (
          <li key={`achievement_${index}`} className="leading-6 text-sm">
            {achievement}
          </li>
        ))}
      </ul>
    </li>
  );
};

export const ProfessionalExperience = () => {
  return (
    <div>
      <Title className="mt-12">Experiência Profissional</Title>
      <ul>
        {data.map((xp, index) => {
          const grouped = xp.positions.length > 1;

          return (
            <li
              key={`experience_${index}`}
              className={`p-2 my-4 ${index % 2 !== 0 ? "bg-background2" : ""}`}
            >
              <h3 className="text-xl font-bold uppercase">{xp.company}</h3>
              {xp.period && (
                <p className="text-xs opacity-75">
                  {xp.period}
                  {xp.locale ? ` · ${xp.locale}` : ""}
                </p>
              )}
              {xp.summary && <p className="text-sm mt-2">{xp.summary}</p>}
              <ul className={`mt-4 space-y-6 ${grouped ? "pl-6 ml-1" : ""}`}>
                {xp.positions.map((position, i) => (
                  <PositionEntry
                    key={`position_${index}_${i}`}
                    position={position}
                    grouped={grouped}
                  />
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
