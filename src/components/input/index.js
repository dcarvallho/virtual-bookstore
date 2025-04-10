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
        <input
            className={classNames(style.inputSearch, {
                [style.inputSearchError]: emptyValue,
            })}
            type="text"
            value={value}
            onChange={handleSearchChange}
            placeholder={placeHolder}
        />
    );
};

export default InputComponent;
