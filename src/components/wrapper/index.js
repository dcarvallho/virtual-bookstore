import React from 'react'
import FooterComponent from './footer';
import Navbar from './navbar';

const WrapperComponent = ({ children }) => {
    return(
        <>
            <Navbar />
            <main>{children}</main>
            <FooterComponent />
        </>
    )
}

export default WrapperComponent;