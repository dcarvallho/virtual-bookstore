'use client'
import React from "react";
import style from "./style.module.css";
import classNames from "classnames";

const ButtonComponent = ({ typeButton, onClick, children, transparent }) => {
  return (
    <div>
      <button
        type={typeButton}
        onClick={onClick}
        className={classNames(
          style.buttonComponent, {
          [style.loginButton]: transparent,
        })}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
