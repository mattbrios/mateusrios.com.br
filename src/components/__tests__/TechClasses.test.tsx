import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TechClasses } from "@/components/TechClasses";

describe("TechClasses", () => {
  it("highlights the development courses", () => {
    render(<TechClasses />);

    expect(
      screen.getByText("Formação em React - Rocketseat Ignite")
    ).toBeInTheDocument();
    expect(
      screen.getByText("React Avançado: Crie aplicações com NextJS")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Web Moderno Completo com JavaScript")
    ).toBeInTheDocument();
  });

  it("collapses the design courses into a single summary", () => {
    render(<TechClasses />);

    const summary = screen.getByText(/cursos de UI\/UX e Design Gráfico/);
    expect(summary).toHaveTextContent("+14 cursos de UI/UX e Design Gráfico");
    expect(summary).toHaveTextContent("145 horas");
  });
});
