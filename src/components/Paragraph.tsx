import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="leading-6 mb-6 px-2">{children}</p>;
};
