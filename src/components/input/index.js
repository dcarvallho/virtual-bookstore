/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './style.module.css';
import classNames from 'classnames';

const InputComponent = ({
    placeHolder,
    value,
    handleSearchChange,
    emptyValue,
}) => {
    return (
        <div className={style.inputContainer}>
            <img
                src="/books.svg"
                alt="Ícone de busca"
                className={style.imgBooks}
            />
            <input
                className={classNames(style.inputSearch, {
                    [style.inputSearchError]: emptyValue,
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
