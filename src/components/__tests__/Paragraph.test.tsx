import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Paragraph } from "@/components/Paragraph";

describe("Paragraph", () => {
  it("renders its children as text", () => {
    render(<Paragraph>Um texto qualquer.</Paragraph>);
    expect(screen.getByText("Um texto qualquer.")).toBeInTheDocument();
  });
});
