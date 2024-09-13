import Image from "next/image";
import React from "react";
import { Skills } from "./Skills";
import { SocialSection } from "./SocialSection";

export const Sidebar = () => {
  const calcAge = () => {
    const yearToday = new Date().getFullYear();
    const bornYear = 1990;

    return yearToday - bornYear;
  };
  const calcExperienceAge = () => {
    const yearToday = new Date().getFullYear();
    const workSince = 2008;

    return yearToday - workSince;
  };
  const Cell = (props) => {
    return (
      <td className="border border-background3 p-4 text-center">
        <p className="font-bold text-xl">{props.children}</p>
        <p className="text-xs">{props.description}</p>
      </td>
    );
  };
  return (
    <aside>
      <div className="bg-background2 p-4 mt-[-40px] relative rounded text-center h-full">
        <Image
          src="/images/memoji.png"
          alt="Ilustração em 3D de um personagem elucidando a figura de Mateus Rios"
          height={160}
          width={160}
          className="mx-auto mt-[-80px] mb-4"
          style={{ objectFit: "contain" }}
        />
        <h1 className="text-2xl font-bold mb-2">Mateus Branco Rios</h1>
        <h2 className="text-base">Desenvolvedor Full Stack & UI Designer</h2>
        <div className="flex items-center justify-center mb-2 gap-1 bg-background3 p-1 rounded-full">
          <Image
            src="/images/map.svg"
            alt="Ícone de mapa/localização"
            height={16}
            width={16}
          />
          <span className="leading-none text-sm">MG/SP - Brasil</span>
        </div>
        <table className="table-fixed w-full my-4">
          <tbody>
            <tr>
              <Cell description="anos">{calcAge()}</Cell>
              <Cell description="anos de experiência">
                +{calcExperienceAge()}
              </Cell>
              <Cell description="projetos desenvolvidos">+500</Cell>
            </tr>
            <tr>
              <Cell description="tecnologias trabalhadas">+14</Cell>
              <Cell description="de arquivos no Photoshop e Illustrator">
                +1TB
              </Cell>
              <Cell description="componentes React criados">+1.250</Cell>
            </tr>
            <tr>
              <Cell description="projetos usando Figma">+90</Cell>
              <Cell description="anos em gestão de pessoas">+8</Cell>
              <Cell description="devs liderados">+80</Cell>
            </tr>
          </tbody>
        </table>
        <Skills />
        <SocialSection />
      </div>
    </aside>
  );
};
