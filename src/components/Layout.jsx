import React from "react";
import { Header } from "./Header";

export const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="min-h-[100vh-300]">{props.children}</main>
    </>
  );
};
