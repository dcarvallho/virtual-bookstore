import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultCard from ".";

const props = {
  title: "Harry Potter",
  publisher: "",
  authors: "J.K.Rowling",
  img: true,
};

describe("<ResultCard />", () => {
  it("should render component with book title", () => {
    render(<ResultCard {...props} />);

    expect(screen.getByText(/harry potter/i)).toBeInTheDocument();
  });
  it("should render component with book front", () => {
    render(<ResultCard {...props} />);

    expect(screen.getByAltText("Capa do livro")).toHaveClass("imageBook");
  });
  it("should show book author", ()=>{
    render(<ResultCard {...props} />);

    expect(screen.getByText(/J.k.Rowling/i)).toBeInTheDocument();
  })
});
