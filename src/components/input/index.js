import React from 'react'
import style from './style.module.css';

const Input = () => {
  return (
    <div className={style.input}>
        <input className={style.inputSearch} type='text' placeholder='Testando componente de input!'/>
    </div>
  )
}

export default Input;