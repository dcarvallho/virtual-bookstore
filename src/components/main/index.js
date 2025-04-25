import { fetchData } from '@/redux/reducer/fetchBooks/fetchBooks';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputComponent from '../input';
import LoadingComponent from '../loading';
import ResultCard from '../result';
import style from './style.module.css';
import { useRouter } from 'next/router';

export const INPUT_PLACEHOLDER = 'Digite aqui o livro desejado';

const HomePage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');
    const [emptyInput, setEmptyInpunt] = useState(false);

    const { data, loading, error } = useSelector((state) => state.reducerBooks);

    const handleSearchChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        if (inputValue.trim().length === 0) {
            setEmptyInpunt(true);
        } else {
            setEmptyInpunt(false);
            router.push({
                pathname: location.pathname,
                query: {
                    book: inputValue,
                },
            });
            dispatch(fetchData(inputValue));
        }
        event.preventDefault();
    };

    //TODO: realizar effect para persirstir os dados do resultado da busca
    // useEffect(() => {

    // }, [third])

    return (
        <div className={style.mainContent}>
            <form onSubmit={handleSearchSubmit} className={style.form}>
                <InputComponent
                    value={inputValue}
                    handleSearchChange={handleSearchChange}
                    placeHolder={INPUT_PLACEHOLDER}
                    emptyValue={emptyInput}
                />
                {emptyInput && (
                    <span className={style.warningEmpty}>
                        Campo de busca vazio!
                    </span>
                )}
            </form>
            {/* TODO: Efetuar condição de mostrar resultado apenas quando a query.book for true -> book && */}
            {
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
                                img={
                                    fetch.volumeInfo.imageLinks?.smallThumbnail
                                }
                            />
                        ))}
                        {/* TODO:Criar componente de paginação localizado após os resultados */}
                    </div>
                </div>
            }
        </div>
    );
};

export default HomePage;
