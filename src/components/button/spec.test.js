import React from "react";
import "@testing-library/jest-dom";
import ButtonComponent from ".";
import { fireEvent, render, screen } from "@testing-library/react";

const props = {
    typeButton: "submit",
    children: "Clique aqui",
    onClick: jest.fn(),
    buttonStyle: true,
}
describe("<ButtonComponent />", () => {
  test("should render text of button", () => {
    render(<ButtonComponent {...props} />);

    expect(screen.getByText(/clique aqui/i)).toBeInTheDocument();
  });
  test("should call onclick function", () => {
    render(<ButtonComponent {...props} />);

    const button = screen.getByText("Clique aqui");

    fireEvent.click(button);
    
    expect(props.onClick).toHaveBeenCalled();
  })
});
