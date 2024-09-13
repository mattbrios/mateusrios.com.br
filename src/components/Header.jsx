import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="w-full h-48 sm:h-80 relative">
        <Image
          src="/images/headerbrain.png"
          alt="Imagem de capa simbolizando um cérebro com o lado lógico, racional e retilíneo e outro criativo, sonhador e imaginário."
          fill
          objectFit="cover"
        />
      </div>
    </header>
  );
};
