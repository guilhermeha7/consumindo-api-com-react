import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import userIcon from '../../assets/user-icon.png';
import api from '../../services/api';
import { login } from '../../services/authService';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault(); //Impede que a página seja recarregada ao enviar o formulário

        try {
            const response = await login(userName, password);
            localStorage.setItem('userName', userName);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            navigate('/books')
        }
        catch (error) {
            alert('Login failed. Please try again.');
        }
    }

    return (
        //O atributo placeholder serve para mostrar um texto dentro do input antes do usuário digitar algo
        //O atributo alt serve para descrever a imagem em palavras para acessiblidade
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <section>
                <img className={`img-fluid mb-4 d-block mx-auto ${styles.maxSize}`} src={userIcon} alt="Tela de Login" />
                <form onSubmit={handleSubmit}>
                    <h3 className="fw-normal mb-4 text-center text-primary-color"> Access your Account </h3>
                    <input 
                        className="form-control mb-4" 
                        placeholder="Username"
                        onChange={e => setUserName(e.target.value)} /*Sempre que o valor do input mudar, a var userName vai ser atualizada com o novo valor*/
                    />
                    <input 
                        className="form-control mb-4" 
                        type="password" 
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="btn btn-primary mb-4 w-100" type="submit">Fazer Login</button>
                </form>
            </section>
        </div>
    )
}

export default Login;