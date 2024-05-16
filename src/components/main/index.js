import { fetchData } from "@/redux/reducer/fetchBooks/fetchBooks";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../button";
import InputComponent from "../input";
import style from "./style.module.css";

export const INPUT_PLACEHOLDER = "Digite aqui o livro desejado";

const HomePage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  //TODO: chamar o loading e error. Loading principalmente; e criar um componente de loading
  const { data } = useSelector((state) => state.reducerBooks);
  console.log(data, "dados da api");

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  //TODO: criar lógica para retornar os itens iguais aos que forem pesquisados no input
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    dispatch(fetchData());
  };

  return (
    <div className={style.mainContent}>
      {/* TODO: centralizar botão e ajustar condição para form */}
      <form onSubmit={handleSearchSubmit}>
        <InputComponent
          value={inputValue}
          handleSearchChange={handleSearchChange}
          placeHolder={INPUT_PLACEHOLDER}
        />
        <ButtonComponent buttonStyle>Clique aqui!</ButtonComponent>
      </form>
      <br></br>
      <ul>
        {data?.map((fetch, index) => (
          <ul>
            <li key={index.id}>{fetch.volumeInfo.title}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
