import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SocialSection } from "@/components/SocialSection";

describe("SocialSection", () => {
  it("renders a link for each social network with a safe target", () => {
    render(<SocialSection />);

    const expectedLinks: Record<string, string> = {
      Instagram: "https://www.instagram.com/mattbrios/",
      LinkedIn: "https://www.linkedin.com/in/mateus-branco-rios",
      Behance: "https://www.behance.net/mattbrios",
      Github: "https://github.com/mattbrios",
    };

    for (const [name, href] of Object.entries(expectedLinks)) {
      const link = screen.getByRole("link", { name: new RegExp(name, "i") });
      expect(link).toHaveAttribute("href", href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    }
  });
});
