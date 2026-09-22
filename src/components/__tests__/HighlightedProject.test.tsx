import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HighlightedProject } from "@/components/HighlightedProject";

describe("HighlightedProject", () => {
  it("renders the project title and its stack", () => {
    render(<HighlightedProject />);

    expect(
      screen.getByRole("heading", { name: "Projeto Destacado" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Plataforma de cupons, pontuação, sorteios e troca de gifts",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("AWS Auto Scaling")).toBeInTheDocument();
  });
});
