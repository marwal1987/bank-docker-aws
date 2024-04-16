import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page.js";

describe("Home", () => {
  it("contains and renders hero", () => {
    render(<Home />);

    const home = screen.getByRole("heading");
    expect(home).toBeInTheDocument();
    expect(home).toHaveTextContent("Välkommen till din bank!")
  });

  it("contains and renders a link", () => {
    render(<Home />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("Skapa användare")
    
  });
});
