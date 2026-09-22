import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-background  flex items-center justify-center -mt-10">
      <picture>
        <source
          srcSet="/images/logo_mr-dark.png"
          media="(prefers-color-scheme: dark)"
        />
        <source
          srcSet="/images/logo_mr-light.png"
          media="(prefers-color-scheme: light)"
        />
        <img
          src="/images/logo_mr-dark.png"
          alt="Logo MR - Mateus Rios"
          width={200}
          style={{ objectFit: "contain" }}
        />
      </picture>
    </footer>
  );
};
