import React from "react";
import { Title } from "./Title";

const stack = [
  "React",
  "Next.js",
  "Node.js",
  "Sails.js",
  "MySQL",
  "AWS Auto Scaling",
];

const highlights = [
  "Suporta 15 mil+ usuários simultâneos e uma base de mais de 8 milhões de usuários cadastrados.",
  "Responsável pela identidade visual, design completo de UI/UX, arquitetura frontend e automação de CI/CD.",
  "Estruturação do painel administrativo e evolução da API e de suas integrações.",
];

export const HighlightedProject = () => {
  return (
    <div className="my-12">
      <Title>Projeto Destacado</Title>
      <div className="p-2">
        <h3 className="text-xl font-bold uppercase">
          Plataforma de cupons, pontuação, sorteios e troca de gifts
        </h3>
        <p className="font-bold mb-4">
          Big Cupom{" "}
          <span className="text-xs opacity-75">
            Full Stack Developer e UI/UX Designer
          </span>
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          {highlights.map((highlight, index) => (
            <li key={`highlight_${index}`} className="leading-6 text-sm">
              {highlight}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1">
          {stack.map((tech) => (
            <span
              key={tech}
              className="bg-background2 rounded-full px-2 py-1 text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
