import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Title = ({ children, ...props }: TitleProps) => {
  return (
    <div {...props}>
      <h3 className="text-2xl font-bold uppercase">{children}</h3>
      <hr className="border-b border-8 max-w-24 opacity-50 rounded-full mb-6 mt-2" />
    </div>
  );
};
