import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home", () => {
  it("renders the sidebar and the main content sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "Mateus Branco Rios" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Sobre mim" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Experiência Profissional" })
    ).toBeInTheDocument();
  });
});
