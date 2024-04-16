import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header.js";

describe("Header", () => {
  it("renders a header component", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("contains navigation links", () => {
    render(<Header />);

    expect(screen.getByText("Hem")).toBeInTheDocument();
    expect(screen.getByText("Skapa användare")).toBeInTheDocument();
    expect(screen.getByText("Logga in")).toBeInTheDocument();
    expect(screen.getByText("Konto")).toBeInTheDocument();
  });

});


