import React from 'react'

const WrapperComponent = ({ children }) => {
    return(
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default WrapperComponent;