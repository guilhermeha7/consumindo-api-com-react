import React from 'react';
import styles from './styles.module.css';
import userIcon from '../../assets/user-icon.png';

function Login() {
    return (
        //O atributo placeholder serve para mostrar um texto dentro do input antes do usuário digitar algo
        //O atributo alt serve para descrever a imagem em palavras para acessiblidade
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <section>
                <img className={`img-fluid mb-4 d-block mx-auto ${styles.maxSize}`} src={userIcon} alt="Tela de Login"/> 
                <form>
                    <h3 className="fw-normal mb-4 text-center text-primary-color"> Access your Account </h3>
                    <input className="form-control mb-4" placeholder="Username" /> 
                    <input className="form-control mb-4" type="password" placeholder="Password" />
                    <button className="btn btn-primary mb-4 w-100" type="submit">Fazer Login</button>
                </form>
            </section>
        </div>
    )
}

export default Login;