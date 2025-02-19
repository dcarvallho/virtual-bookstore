'use client'
import React, {useState} from "react";
import style from "./style.module.css";
import classNames from "classnames";

const InputComponent = ({ placeHolder, value, handleSearchChange, emptyValue }) => {

  return (
    <div>
      <input
        className={classNames({
          [style.inputSearch]: !emptyValue,
          [style.inputSearchError]: emptyValue
        })}
        type="text"
        value={value}
        onChange={handleSearchChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputComponent;
