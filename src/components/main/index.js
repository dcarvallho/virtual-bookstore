import React from "react";
import ButtonComponent from "../button";
import InputComponent from "../input";
import style from './style.module.css'

const HomePage = () => {
  return (
    <div className={style.mainContent}>
      {/* TODO: centralizar botão e ajustar condição para form */}
      <form action="">
        <InputComponent placeHolder="Digite aqui o livro desejado" />
        <ButtonComponent buttonStyle>
          Clique aqui!
        </ButtonComponent>
      </form>
    </div>
  );
};

export default HomePage;
