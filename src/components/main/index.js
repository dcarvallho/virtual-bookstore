import { fetchData } from "@/redux/reducer/fetchBooks/fetchBooks";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../button";
import InputComponent from "../input";
import LoadingComponent from "../loading";
import ResultCard from "../result";
import style from "./style.module.css";
import { useRouter } from "next/router";

export const INPUT_PLACEHOLDER = "Digite aqui o livro desejado";

const HomePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const { data, loading, error } = useSelector((state) => state.reducerBooks);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    //TODO: mudar condição para quando o valor do input não existir ou não for encontrado
    if (inputValue.length === 0) {
      return error;
    } else {
      router.push({
        pathname: location.pathname,
        query: "result",
      });
      event.preventDefault();
      dispatch(fetchData(inputValue));
    }
  };

  return (
    <div className={style.mainContent}>
      <form onSubmit={handleSearchSubmit} className={style.form}>
        <InputComponent
          value={inputValue}
          handleSearchChange={handleSearchChange}
          placeHolder={INPUT_PLACEHOLDER}
        />
        <div>
          <ButtonComponent buttonStyle>Clique aqui!</ButtonComponent>
        </div>
      </form>
      <br></br>
      <div>
        {loading && <LoadingComponent />}
        {error && <span>Erro na requisição</span>}
        <div className={style.cardResult}>
          {data?.map((fetch, index) => (
            <ResultCard
              key={index.id}
              title={fetch.volumeInfo.title}
              publisher={fetch.volumeInfo.publisher}
              authors={fetch.volumeInfo.authors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
