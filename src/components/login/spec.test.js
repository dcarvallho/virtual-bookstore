import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

import LoginComponent from ".";

describe('<LoadingComponent', () => {
    it('should render component properly', () => {
        render(<LoginComponent />);

        expect(screen.getByText('faça seu login', {exact: false})).toBeInTheDocument();
    })

    it('should show in screen the form with inputs', () => {
        render(<LoginComponent />);

        const inputLogin = screen.getByPlaceholderText('digite seu login', {exact: false});
        const inputPass = screen.getByPlaceholderText('digite sua senha', {exact: false});

        expect(inputLogin).toBeInTheDocument();
        expect(inputPass).toBeInTheDocument();
    })

    it('should show button for enter', () => {
        render(<LoginComponent />);
        
        const button = screen.getByRole('button', {name: 'Entrar'});

        expect(button).toBeInTheDocument();
    })
})