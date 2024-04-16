import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/Footer";

describe("Footer", () => {
  it("contains and renders a footer component", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("contains and renders a link to image author", () => {
    render(<Footer />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });
});
