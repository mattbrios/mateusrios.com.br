import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="py-20 bg-background2 flex items-center justify-center mt-[-40px]">
      <Image
        src="/images/logo_mr.png"
        alt="Logo MR - Mateus Rios"
        width={210}
        height={62}
        objectFit="contain"
      />
    </footer>
  );
};
