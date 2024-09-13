import React from "react";

const techSkills = [
  {
    name: "HTML / CSS",
    rank: 5,
  },
  {
    name: "JavaScript",
    rank: 4,
  },
  {
    name: "ReactJS",
    rank: 4,
  },
  {
    name: "NextJS",
    rank: 4,
  },
  {
    name: "MaterialUI",
    rank: 4,
  },
  {
    name: "Bootsrap",
    rank: 3,
  },
  {
    name: "Tailwind",
    rank: 3,
  },
  {
    name: "Shadcn",
    rank: 2,
  },
  {
    name: "NodeJS",
    rank: 2,
  },
  {
    name: "MySQL",
    rank: 2,
  },
  {
    name: "JQuery",
    rank: 4,
  },
  {
    name: "Git",
    rank: 4,
  },
  {
    name: "UI Design",
    rank: 4,
  },
  {
    name: "Figma",
    rank: 4,
  },
  {
    name: "Adobe Photoshop",
    rank: 3,
  },
  {
    name: "Adobe Illustrator",
    rank: 2,
  },
  {
    name: "Adobe Premiere Pro",
    rank: 1,
  },
];

const personalSkills = [
  {
    name: "Auto gerenciamento",
    rank: 4,
  },
  {
    name: "Comunicação",
    rank: 5,
  },
  {
    name: "Trabalho remoto",
    rank: 5,
  },
  {
    name: "Inglês",
    rank: 4,
  },
  {
    name: "Reciclagem",
    rank: 4,
  },
];

export const Skills = () => {
  const skillLine = (data) => {
    return (
      <div className="mb-8">
        {data.map((tech, index) => (
          <div
            key={`techskill_${index}`}
            className="flex items-center gap-1 py-1"
          >
            {[...Array(5).keys()].map((i) => (
              <div
                key={`dot_${index}_${i}`}
                className={`h-3 w-3 rounded-full border ${
                  i + 1 <= tech.rank && "dot-filled"
                }`}
              />
            ))}
            <p className="text-sm font-semibold ml-2">{tech.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="my-8 text-left">
      <h4 className="uppercase text-sm font-bold mb-2">Habilidades Técnicas</h4>
      {skillLine(techSkills)}
      <h4 className="uppercase text-sm font-bold mb-2">
        Habilidades Interpessoais
      </h4>
      {skillLine(personalSkills)}
    </div>
  );
};
