import React from "react";
import { Title } from "./Title";

type TechClassCategory = "dev" | "design";

interface TechClass {
  title: string;
  place: string;
  duration: number;
  category: TechClassCategory;
}

const data: TechClass[] = [
  {
    title: "Formação em React - Rocketseat Ignite",
    place: "Rocketseat",
    duration: 50,
    category: "dev",
  },
  {
    title: "React Avançado: Crie aplicações com NextJS",
    place: "Udemy - Willian Justen de Vasconcellos e Guilherme Louro",
    duration: 94,
    category: "dev",
  },
  {
    title: "Web Moderno Completo com JavaScript",
    place: "Udemy - Leandro Moura Leitao e Cod3er Cursos Online",
    duration: 97,
    category: "dev",
  },
  {
    title: "Design Gráfico COMPLETO 10 Cursos do Zero ao Avançado",
    place: "Udemy - André Fontenelle",
    duration: 31,
    category: "design",
  },
  {
    title: "UX & Design Thinking: Experiência do Usuário nos negócios",
    place: "Udemy - Leandro Rezende",
    duration: 11,
    category: "design",
  },
  {
    title: "Figma: Design colaborativo do básico ao protótipo responsivo",
    place: "Udemy - Leandro Rezende",
    duration: 6,
    category: "design",
  },
  {
    title: "Design de Interfaces do Zero ao Avançado: UI com foco em UX",
    place: "Udemy - Inkmustache Web & Apps e Lendro Rezende",
    duration: 32,
    category: "design",
  },
  {
    title: "Illustrator CC 2020 Completo - Do Iniciante ao Avançado",
    place: "Udemy - Thiago Christo",
    duration: 15,
    category: "design",
  },
  {
    title: "Invision Studio: do básico às telas responsivas e animações",
    place: "Udemy - Leandro Rezende",
    duration: 6,
    category: "design",
  },
  {
    title: "Sketch: UI Design do básico aos protótipos responsivos",
    place: "Lendro Rezende",
    duration: 5,
    category: "design",
  },
  {
    title: "Adobe XD: UI Design do básico aos protótipos",
    place: "Lendro Rezende",
    duration: 5,
    category: "design",
  },
  {
    title: "Métricas de UX e Negócios para Startups e Produtos Digitais",
    place: "Lendro Rezende",
    duration: 2,
    category: "design",
  },
  {
    title: "Testes de Usabilidade na Prática 2020 + Hotjar e UX Research",
    place: "Lendro Rezende",
    duration: 3,
    category: "design",
  },
  {
    title: "Adobe XD | 10 Projetos + 2 Nanocursos",
    place: "André Bernardes",
    duration: 9,
    category: "design",
  },
  {
    title: "Design Sprints: da ideia ao teste com usuários em uma semana",
    place: "Leandro Rezende",
    duration: 2,
    category: "design",
  },
  {
    title: "Especialista em Design Gráfico 2024 | 11 Projetos",
    place: "André Bernardes",
    duration: 14,
    category: "design",
  },
  {
    title: "Lean UX: SCRUM com ênfase em melhorar Experiência do Usuário",
    place: "Leandro Rezende",
    duration: 4,
    category: "design",
  },
];

const sumHours = (classes: TechClass[]) =>
  classes.reduce((total, theClass) => total + theClass.duration, 0);

const devClasses = data.filter((theClass) => theClass.category === "dev");
const designClasses = data.filter((theClass) => theClass.category === "design");

const ClassRow = ({
  theClass,
  striped,
}: {
  theClass: TechClass;
  striped: boolean;
}) => {
  return (
    <div className={`p-2 my-1 ${striped ? "bg-background2" : ""}`}>
      <p className="font-bold">
        {theClass.title}{" "}
        <span className="font-semibold text-xs opacity-75">
          {theClass.duration} horas
        </span>
      </p>
      <p className="opacity-75 text-sm">{theClass.place}</p>
    </div>
  );
};

export const TechClasses = () => {
  return (
    <div className="my-12">
      <Title>Cursos Técnicos</Title>

      {devClasses.map((theClass, index) => (
        <ClassRow
          key={`dev_class_${index}`}
          theClass={theClass}
          striped={index % 2 !== 0}
        />
      ))}

      <details className="group my-1">
        <summary className="p-2 flex items-center gap-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-background2 transition-colors">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 shrink-0 opacity-75 transition-transform group-open:rotate-90"
          >
            <path d="M7 5l6 5-6 5V5z" />
          </svg>
          <span className="font-bold">
            +{designClasses.length} cursos de UI/UX e Design Gráfico{" "}
            <span className="font-semibold text-xs opacity-75">
              {sumHours(designClasses)} horas
            </span>
          </span>
        </summary>
        <div className="pl-6">
          {designClasses.map((theClass, index) => (
            <ClassRow
              key={`design_class_${index}`}
              theClass={theClass}
              striped={index % 2 !== 0}
            />
          ))}
        </div>
      </details>
    </div>
  );
};
