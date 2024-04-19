import React from "react";
import style from "./style.module.css";

const ButtonComponent = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick} className={style.buttonComponent}>
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
