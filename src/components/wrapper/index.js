import React from "react";
import FooterComponent from "./footer";
import Navbar from "./navbar";
import store from "@/redux/store";
import { Provider } from "react-redux";

const WrapperComponent = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main>{children}</main>
        <FooterComponent />
      </Provider>
    </>
  );
};

export default WrapperComponent;
