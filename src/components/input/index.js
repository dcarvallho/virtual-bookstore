import React, {useState} from "react";
import style from "./style.module.css";

const InputComponent = ({ placeHolder, value, handleSearchChange }) => {

  return (
    <div className={style.input}>
      <input
        className={style.inputSearch}
        type="text"
        value={value}
        onChange={handleSearchChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputComponent;
