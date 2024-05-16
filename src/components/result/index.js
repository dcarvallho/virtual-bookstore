import React from 'react'
import style from './style.module.css';

const ResultCard = ({ title, publisher, authors }) => {
  return (
    <div className={style.cardResult}>
        <h1>{title}</h1>
        <h3>{publisher}</h3>
        <h3>{authors}</h3>
    </div>  
  )
}

export default ResultCard;