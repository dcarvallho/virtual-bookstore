import React from 'react';
import ButtonComponent from '../button';
import InputComponent from '../input';
import style from './style.module.css';

const LoginComponent = () => {
    return (
        <div className={style.container}>
            <main className={style.cardLogin}>
                <h2>Faça seu login</h2>
                <form className={style.formLogin}>
                    <InputComponent placeHolder="Digite seu login" />
                    <InputComponent placeHolder="Digite sua senha" />
                    <ButtonComponent>Entrar</ButtonComponent>
                </form>
            </main>
        </div>
    );
};

export default LoginComponent;
