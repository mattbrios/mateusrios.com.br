import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sidebar } from "@/components/Sidebar";
import { calcAge, calcExperienceYears } from "@/lib/profile";

describe("calcAge", () => {
  it("computes age from the 1990 birth year", () => {
    expect(calcAge()).toBe(new Date().getFullYear() - 1990);
  });
});

describe("calcExperienceYears", () => {
  it("computes years of experience since 2010", () => {
    expect(calcExperienceYears()).toBe(new Date().getFullYear() - 2010);
  });
});

describe("Sidebar", () => {
  it("renders the name and computed stats", () => {
    render(<Sidebar />);

    expect(
      screen.getByRole("heading", { name: "Mateus Branco Rios" })
    ).toBeInTheDocument();
    expect(screen.getByText(String(calcAge()))).toBeInTheDocument();
    expect(
      screen.getByText(`+${calcExperienceYears()}`)
    ).toBeInTheDocument();
  });
});
