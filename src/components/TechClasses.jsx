import React, { Fragment } from "react";
import { Title } from "./Title";
const data = [
  {
    title: "Formação em React - Rocketseat Ignite",
    place: "Rocketseat",
    duration: 50,
  },
  {
    title: "React Avançado: Crie aplicações com NextJS",
    place: "Udemy - Willian Justen de Vasconcellos e Guilherme Louro",
    duration: 94,
  },
  {
    title: "Web Moderno Completo com JavaScript",
    place: "Udemy - Leandro Moura Leitao e Cod3er Cursos Online",
    duration: 97,
  },
  {
    title: "Design Gráfico COMPLETO 10 Cursos do Zero ao Avançado",
    place: "Udemy - André Fontenelle",
    duration: 31,
  },
  {
    title: "UX & Design Thinking: Experiência do Usuário nos negócios",
    place: "Udemy - Leandro Rezende",
    duration: 11,
  },
  {
    title: "Figma: Design colaborativo do básico ao protótipo responsivo",
    place: "Udemy - Leandro Rezende",
    duration: 6,
  },
  {
    title: "Design de Interfaces do Zero ao Avançado: UI com foco em UX",
    place: "Udemy - Inkmustache Web & Apps e Lendro Rezende",
    duration: 32,
  },
  {
    title: "Illustrator CC 2020 Completo - Do Iniciante ao Avançado",
    place: "Udemy - Thiago Christo",
    duration: 15,
  },
  {
    title: "Invision Studio: do básico às telas responsivas e animações",
    place: "Udemy - Leandro Rezende",
    duration: 6,
  },
  {
    title: "Sketch: UI Design do básico aos protótipos responsivos",
    place: "Lendro Rezende",
    duration: 5,
  },
  {
    title: "Adobe XD: UI Design do básico aos protótipos",
    place: "Lendro Rezende",
    duration: 5,
  },
  {
    title: "Métricas de UX e Negócios para Startups e Produtos Digitais",
    place: "Lendro Rezende",
    duration: 2,
  },
  {
    title: "Testes de Usabilidade na Prática 2020 + Hotjar e UX Research",
    place: "Lendro Rezende",
    duration: 3,
  },
  {
    title: "Adobe XD | 10 Projetos + 2 Nanocursos",
    place: "André Bernardes",
    duration: 9,
  },
  {
    title: "Design Sprints: da ideia ao teste com usuários em uma semana",
    place: "Leandro Rezende",
    duration: 2,
  },
  {
    title: "Especialista em Design Gráfico 2024 | 11 Projetos",
    place: "André Bernardes",
    duration: 14,
  },
  {
    title: "Lean UX: SCRUM com ênfase em melhorar Experiência do Usuário",
    place: "Leandro Rezende",
    duration: 4,
  },
];
export const TechClasses = () => {
  return (
    <div className="my-12">
      <Title>Cursos Técnicos</Title>
      {data.map((theClass, index) => (
        <div
          key={`class_${index}`}
          className={`p-2 my-1 ${index % 2 !== 0 && "bg-background2"}`}
        >
          <p className="font-bold">
            {theClass.title}{" "}
            <span className="font-semibold text-xs opacity-75">
              {theClass.duration} horas
            </span>
          </p>
          <p className="opacity-75 text-sm">{theClass.place}</p>
        </div>
      ))}
    </div>
  );
};
