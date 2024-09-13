/* eslint-disable @next/next/no-img-element */
import React from "react";

const data = [
  {
    name: "Instagram",
    icon: "/images/instagram.svg",
    link: "https://www.instagram.com/mattbrios/",
  },
  {
    name: "LinkedIn",
    icon: "/images/linkedin.svg",
    link: "https://www.linkedin.com/in/mateus-branco-rios",
  },
  {
    name: "Behance",
    icon: "/images/behance.svg",
    link: "https://www.behance.net/mattbrios",
  },
  // {
  //   name: "E-mail",
  //   icon: "/images/mail.svg",
  //   link: "mailto:info@mailgo.dev",
  // },
  {
    name: "Github",
    icon: "/images/github.svg",
    link: "https://github.com/mattbrios",
  },
];

export const SocialSection = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {data.map((social, index) => (
        <a href={social.link} target="_blank" key={`social_${index}`}>
          <button className="pr-4 pl-2 py-1 bg-background3 rounded-full flex items-center gap-2 transition-colors hover:bg-background">
            <img
              src={social.icon}
              alt={`ícone de ${social.name}`}
              className="h-5 w-5"
            />
            <span className="text-xs font-bold uppercase">{social.name}</span>
          </button>
        </a>
      ))}
    </div>
  );
};
