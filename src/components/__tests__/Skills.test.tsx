import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skills } from "@/components/Skills";

describe("Skills", () => {
  it("renders each skill category with its technologies", () => {
    render(<Skills />);

    expect(
      screen.getByRole("heading", { name: "Frontend Development" })
    ).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Backend Development" })
    ).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders the languages section", () => {
    render(<Skills />);

    expect(
      screen.getByRole("heading", { name: "Idiomas" })
    ).toBeInTheDocument();
    expect(screen.getByText("Português: Nativo")).toBeInTheDocument();
    expect(screen.getByText("Inglês: Avançado (B2)")).toBeInTheDocument();
  });
});
