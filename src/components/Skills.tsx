import React from "react";

interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "ES6+",
      "HTML5",
      "CSS3",
      "Sass",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "ShadCN",
      "Design Responsivo",
      "Acessibilidade (WCAG)",
      "SPA",
      "Jest",
      "Vitest",
      "React Testing Library",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express",
      "Sails.js",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "RESTful APIs",
    ],
  },
  {
    title: "Design / UI & UX",
    items: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Prototipação",
      "Design System",
      "Identidade Visual",
      "User Experience (UX)",
      "User Interface (UI)",
      "Wireframing",
    ],
  },
  {
    title: "DevOps e Ferramentas",
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Vercel",
      "AWS Amplify",
      "Amazon S3",
      "AWS IAM",
      "Route53",
      "New Relic",
      "Google Analytics",
    ],
  },
  {
    title: "Metodologias e Práticas",
    items: [
      "Agile",
      "Scrum",
      "Clean Code",
      "Design Patterns",
      "Code Review",
      "SEO",
      "Performance Optimization",
      "Arquitetura de Software",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Liderança de Equipe",
      "Gestão de Projetos",
      "Mentoria",
      "Coordenação de Equipes",
      "Resolução de Problemas",
      "Comunicação Técnica",
    ],
  },
];

const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado (B2)" },
];

const SkillTags = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-1">
    {items.map((item) => (
      <span
        key={item}
        className="bg-background3 rounded-full px-2 py-1 text-xs font-semibold"
      >
        {item}
      </span>
    ))}
  </div>
);

export const Skills = () => {
  return (
    <div className="my-8 text-left">
      {skillCategories.map((category) => (
        <div key={category.title} className="mb-6">
          <h4 className="uppercase text-sm font-bold mb-2">
            {category.title}
          </h4>
          <SkillTags items={category.items} />
        </div>
      ))}

      <div>
        <h4 className="uppercase text-sm font-bold mb-2">Idiomas</h4>
        <div className="flex flex-wrap gap-1">
          {languages.map((language) => (
            <span
              key={language.name}
              className="bg-background3 rounded-full px-2 py-1 text-xs font-semibold"
            >
              {language.name}: {language.level}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
