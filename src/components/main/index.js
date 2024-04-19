import React from "react";
import InputComponent from "../input";
import style from './style.module.css'

const HomePage = () => {
  return (
    <div className={style.mainContent}>
      {/* TODO: Criar banner de imagem de livro como position absolute e colocar o input dentro com o position absolute também */}
      <InputComponent placeHolder="Digite aqui o livro desejado" />
    </div>
  );
};

export default HomePage;
