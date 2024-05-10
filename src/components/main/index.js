import React, { useState } from "react";
import ButtonComponent from "../button";
import InputComponent from "../input";
import style from "./style.module.css";

const HomePage = () => {
  const [state, setState] = useState('');

  const handleSearchChange = (event) => {
    setState(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log(state);
  };
  return (
    <div className={style.mainContent}>
      {/* TODO: centralizar botão e ajustar condição para form */}
      <form onSubmit={handleSearchSubmit}>
        <InputComponent
          value={state}
          handleSearchChange={handleSearchChange}
          placeHolder="Digite aqui o livro desejado"
        />
        <ButtonComponent buttonStyle>Clique aqui!</ButtonComponent>
      </form>
    </div>
  );
};

export default HomePage;
