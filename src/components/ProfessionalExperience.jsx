import React from "react";
import { Title } from "./Title";

const data = [
  {
    company: "Impacting Group at Beeleads",
    position: [
      {
        title: "Programador Full-Stack | UI Designer",
        period: "07-2018 aos dias atuais",
      },
    ],
    description: [
      "Atuo na maioria do meu tempo como programador Front-end, mas também faço trabalhos como programador Back-end, UI Designer e, as vezes edição de vídeos.",
      "Responsável por desenvolver interfaces do usuário, baseado na sua usabilidade, geralmente utilizando Figma, Photoshop e/ou Illustrator. Também sou responsável por programar a totalidade do Front-end, inclusive dos meus próprios layouts, geralmente usando ReactJS, NextJS, Material UI ou Tailwind.",
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
    description: [
      "Realizo trabalhos de design de interfaces, de desenvolvimento Front-end e edição de vídeo. Entre os trabalhos que fiz como Freelancer, já desenvolvi identidades visuais, redesign de site e apps, artes para redes sociais, UI para sites e mobile apps, modernização e aplicação de esturutras visuais para projetos legado, melhoria de usabilidade em app de clientes, apresentações comerciais, edição de vídeo-aulas e, claro, desenvolvimento de aplicações web usando ReactJS ou JQuery ou Worpress ou somente o trio puro: JS, CSS e HTML.",
    ],
  },
  {
    company: "Savoir Tecnologia",
    position: [
      {
        title: "Tech Leader | UX/UI Designer",
        period: "10-2014 - 07-2018",
        locale: "Itajubá / MG",
      },
      {
        title: "Gerente de projetos",
        period: "06-2013 - 03-2014",
        locale: "São Paulo / SP",
      },
      {
        title: "Team Leader | Programador AS3",
        period: "04-2010 - 05-2013",
        locale: "Itajubá / MG",
      },
    ],
    description: [
      "Comecei como estagiário e fui evoluindo junto com a empresa. Inicialmente programava em AS3 (Flash), transitei por algumas outras linguagens e coordenei algumas squads de desenvolvimento. Tive uma experiência em gestão de projetos em São Paulo e me firmei na gestão técnica de times de desenvolvimento basicamente usando PHP, HTML, CSS, JS, Angular e Ionic. Durante esta gestão, surgiu a oportunidade de estudar sobre UX/UI design, suas boas práticas e me especializei nesta área dentro da empresa.",
    ],
  },

  {
    company: "UNIFEI - Universidade Federal de Itajubá",
    position: [
      {
        title:
          "Estágio em desenvolvimento de sistemas e manutenção de laboratório",
        period: "02-2009 - 04-2010",
        locale: "Itajubá / MG",
      },
    ],
    description: [
      "Responsável pela manutenção de hardware, software e funcionamento do laboratório do Instituto de Engenharia de Produção e Gestão da UNIFEI.",
      "Também iniciei o desenvolvimento em Java de uma aplicação para gestão de patrimônio do instituto, que acabou virando tema do trabalho de conclusão de curso.",
    ],
  },
  {
    company: "FEPI - Centro Universitátio de Itajubá",
    position: [
      {
        title: "Gestão e manutenção de laboratório de tecnologia",
        period: "06-2008 - 04-2010",
        locale: "Itajubá / MG",
      },
    ],
    description: [
      "Responsável pela manutenção de hardware, software e funcionamento do Laboratório de Processamento de Dados do Centro Universitário de Itajubá.",
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
            className={`p-2 my-4 ${index % 2 !== 0 && "bg-background2"}`}
          >
            <div className="">
              <p className="text-xl font-bold uppercase">{xp.company}</p>
              <div className="mb-4">
                {xp.position.map((position, i) => (
                  <div key={`position_${index}_${i}`}>
                    <p className="font-bold">
                      {position.title}{" "}
                      <span className="text-xs opacity-75">
                        {position.period}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              {xp.description.map((paragraph, i) => (
                <div key={`description_${index}_${i}`}>
                  <p className="leading-6 mb-2">{paragraph}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
