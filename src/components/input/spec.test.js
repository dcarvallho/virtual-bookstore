import React from "react";
import "@testing-library/jest-dom";
import InputComponent from ".";
import { render, screen } from "@testing-library/react";

const props = {
  placeHolder: "Digite aqui o livro desejado",
  value: "",
  emptyValue: false,
};

describe("<InputComponent", () => {
  it("should render component properly", () => {
    render(<InputComponent {...props} />);

    expect(
      screen.getByPlaceholderText(/digite aqui o livro desejado/i)
    ).toBeInTheDocument();
  });

  it("should render component with error class s", () => {
    render(<InputComponent {...props} emptyValue={true} />);

    const inputSearch = screen.getByPlaceholderText(
      /digite aqui o livro desejado/i
    );

    expect(inputSearch).toHaveClass("inputSearchError");
  });
});
