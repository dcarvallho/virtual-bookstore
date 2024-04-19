import { CORE_NAME } from "@/constants";
import React from "react";
import style from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { handleLoginToggle, handleLogoutToggle } from "@/redux/reducer/loginToggle/acions-type";
import ButtonComponent from "@/components/button";

const Navbar = () => {
  const dispatch = useDispatch();
  const { loginToggle, userName } = useSelector(
    (rootReducer) => rootReducer.testeReducer
  );
  console.log(loginToggle, "Testando redux");
  const handleLogout = () => {
    dispatch(handleLogoutToggle(false));
  };

  const handleLogin = () => {
    dispatch(handleLoginToggle(true))
  }

  //TODO: Ajustar para que apareça o nome vindo do redux
  //TODO: Criar novo reducer ou caso de uso
  //TODO: Criar um input para busca de livros
  return (
    <>
      <nav className={style.navbarMain}>
        <div>{CORE_NAME}</div>
        <div className={style.rightElements}>
          {loginToggle && (
            <>
              <span>{userName}</span>
            </>
          )}
          <div className={style.loginLogout}>
            {loginToggle ? (
              <ButtonComponent onClick={handleLogout}>
                Sair
              </ButtonComponent>
            ) : (
              <ButtonComponent onClick={handleLogin}>Login</ButtonComponent>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
