import React from 'react'
import style from './style.module.css';

const ResultCard = ({ title, publisher, authors, img }) => {
  return (
    <div className={style.cardResult}>
        <h1>{title}</h1>
        <h3>{publisher}</h3>
        <h3>{authors}</h3>
        {img && <img src={img} alt="Capa do livro" className={style.imageBook}/>}
    </div>  
  )
}

export default ResultCard;