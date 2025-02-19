'use client'
import React from "react";
import FooterComponent from "./footer";
import Navbar from "./navbar";
import store from "@/redux/store";
import { Provider } from "react-redux";
import style from "./style.module.css";

const WrapperComponent = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main className={style.mainContent}>{children}</main>
        <FooterComponent />
      </Provider>
    </>
  );
};

export default WrapperComponent;
