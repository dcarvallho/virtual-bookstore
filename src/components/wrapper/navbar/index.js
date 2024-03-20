import { CORE_NAME } from '@/constants';
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav>
          {/* TODO: Quando efetuar o login, aparecer o nome do user no lugar do "Login" */}
            <div>{CORE_NAME}</div>
            <div>Login</div>
        </nav>
    </>
  )
}

export default Navbar;