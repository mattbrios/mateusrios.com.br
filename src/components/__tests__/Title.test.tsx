import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Title } from "@/components/Title";

describe("Title", () => {
  it("renders the heading text", () => {
    render(<Title>Sobre mim</Title>);
    expect(
      screen.getByRole("heading", { name: "Sobre mim" })
    ).toBeInTheDocument();
  });
});
