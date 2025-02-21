'use client'
import React from "react";
import style from "./style.module.css";
import ButtonComponent from "@/components/button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { fetchUserClear } from "@/redux/reducer/fetchBooks/fetchBooks";

const Navbar = () => {
  
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChangePage = () => {
    router.push("/login");
    dispatch(fetchUserClear());
  };

  //TODO:Realizar condição para visualização dos resultados ao ir para homepage
  //TODO:Fazer condição via Redux. Zerar a busca dos resultados para os cards sumirem quando ir para homepage

  return (
    <>
      <nav className={style.navbarMain}>
        <div className={style.loginLogout}>
          <ButtonComponent transparent>Sign Up</ButtonComponent>
          <ButtonComponent onClick={handleChangePage}>Login</ButtonComponent>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
