import { CORE_NAME } from "@/constants";
import React from "react";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbarMain}>
        {/* TODO: Quando efetuar o login, aparecer o nome do user no lugar do "Login" */}
        <div>{CORE_NAME}</div>
        <div className={style.rightElements}>
          <>
            <span>Olá, Davi!</span>
          </>
          <div className={style.loginLogout}>
            <a href="">Login</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
