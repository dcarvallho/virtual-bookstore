import { CORE_NAME } from "@/constants";
import React from "react";
import style from "./style.module.css";
import ButtonComponent from "@/components/button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleChangePage = () => {
    router.push("/login");
  };

  return (
    <>
      <nav className={style.navbarMain}>
        <div>{CORE_NAME}</div>
        <div className={style.loginLogout}>
          <ButtonComponent onClick={handleChangePage}>
            Login
          </ButtonComponent>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
