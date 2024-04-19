import React from "react";
import style from "./style.module.css";

const InputComponent = ({ placeHolder }) => {
  return (
    <div className={style.input}>
      <input
        className={style.inputSearch}
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputComponent;
