'use client'
import React from "react";
import style from "./style.module.css";
import classNames from "classnames";

const ButtonComponent = ({ typeButton, onClick, children, buttonStyle }) => {
  return (
    <div>
      <button
        type={typeButton}
        onClick={onClick}
        className={classNames({
          [style.buttonComponent]: !buttonStyle,
          [style.genericButton]: buttonStyle,
        })}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
