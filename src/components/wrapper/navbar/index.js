import { CORE_NAME } from "@/constants";
import React from "react";
import style from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { handleLogoutToggle } from "@/redux/reducer/loginToggle/acions-type";

const Navbar = () => {
  const dispatch = useDispatch();
  const { loginToggle } = useSelector(
    (rootReducer) => rootReducer.testeReducer
  );
  console.log(loginToggle, "Testando redux");
//TODO: ajustar função e mudar lugar do evento
  const handleLogout = () => {
    event.preventDefault();
    dispatch(handleLogoutToggle(true));
  };

  return (
    <>
      <nav className={style.navbarMain}>
        <div>{CORE_NAME}</div>
        <div className={style.rightElements}>
          {loginToggle && (
            <>
              <span>Olá, Davi!</span>
            </>
          )}
          <div className={style.loginLogout}>
            {loginToggle ? (
              <a href="" onClick={handleLogout}>
                Sair
              </a>
            ) : (
              <a href="">Login</a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
