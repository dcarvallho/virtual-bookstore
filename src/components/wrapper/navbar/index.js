import { CORE_NAME } from "@/constants";
import React from "react";
import style from "./style.module.css";
import ButtonComponent from "@/components/button";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  const handleChangePage = () => {
    router.push("/login");
  };

  //TODO:Realizar condição para visualização dos resultados ao ir para homepage
  //TODO:Fazer condição via Redux. Zerar a busca dos resultados para os cards sumirem quando ir para homepage

  return (
    <>
      <nav className={style.navbarMain}>
        {/* <div onClick={goToHomePage}>{CORE_NAME}</div> */}
        <a href="/">{CORE_NAME}</a>
        <div className={style.loginLogout}>
          <ButtonComponent onClick={handleChangePage}>Login</ButtonComponent>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
