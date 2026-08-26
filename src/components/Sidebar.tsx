import Image from "next/image";
import React from "react";
import { Skills } from "./Skills";
import { SocialSection } from "./SocialSection";

const BORN_YEAR = 1990;
const WORKING_SINCE_YEAR = 2008;

export const calcAge = () => new Date().getFullYear() - BORN_YEAR;
export const calcExperienceYears = () =>
  new Date().getFullYear() - WORKING_SINCE_YEAR;

interface CellProps {
  children: React.ReactNode;
  description: string;
}

const Cell = ({ children, description }: CellProps) => {
  return (
    <td className="border border-background3 p-4 text-center">
      <p className="font-bold text-xl">{children}</p>
      <p className="text-xs">{description}</p>
    </td>
  );
};

export const Sidebar = () => {
  return (
    <aside>
      <div className="bg-background2 p-4 -mt-10 relative rounded text-center h-full">
        <Image
          src="/images/memoji.png"
          alt="Ilustração em 3D de um personagem elucidando a figura de Mateus Rios"
          height={160}
          width={160}
          className="mx-auto -mt-20 mb-4"
          style={{ objectFit: "contain", width: 160, height: 160 }}
        />
        <h1 className="text-2xl font-bold mb-2">Mateus Branco Rios</h1>
        <h2 className="text-sm mb-2">
          Engenheiro de Software Sênior | Frontend-focused | React • Next.js •
          TypeScript | UI/UX & Design Systems
        </h2>
        <div className="flex items-center justify-center mb-2 gap-1 bg-background3 p-1 rounded-full">
          <Image
            src="/images/map.svg"
            alt="Ícone de mapa/localização"
            height={16}
            width={16}
          />
          <span className="leading-none text-sm">São Paulo, Brasil</span>
        </div>
        <table className="table-fixed w-full my-4">
          <tbody>
            <tr>
              <Cell description="anos">{calcAge()}</Cell>
              <Cell description="anos de experiência">
                +{calcExperienceYears()}
              </Cell>
            </tr>
            <tr>
              <Cell description="projetos desenvolvidos">+500</Cell>
              <Cell description="componentes React criados">+1.970</Cell>
            </tr>
            <tr>
              <Cell description="projetos no Figma">+90</Cell>
              <Cell description="maior time gerenciado">23</Cell>
            </tr>
          </tbody>
        </table>
        <Skills />
        <SocialSection />
      </div>
    </aside>
  );
};
