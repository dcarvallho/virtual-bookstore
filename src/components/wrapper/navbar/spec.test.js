import React from "react";
import "@testing-library/jest-dom";
import Navbar from './';
import { render, screen } from '@testing-library/react';

describe("<Navbar />", ()=>{
    it("should render component properly", ()=>{
        render(<Navbar />);

        expect(screen.getByText(/virtual bookstore/i)).toBeInTheDocument();

        expect(screen.getByText(/login/i)).toHaveClass('loginLogout');
    })
})