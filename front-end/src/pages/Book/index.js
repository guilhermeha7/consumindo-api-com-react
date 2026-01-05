import React from "react";
import styles from './styles.module.css';
import { FiLogOut, FiEdit, FiDelete } from 'react-icons/fi'; //Importando o ícone de logout

function Book() {
    return (
        <div className="container-fluid p-0 m-0">
            <header className="mb-4">
                <nav className={`navbar shadow-sm ${styles.pxCustom} ${styles.navbarColor}`}>
                    <span className="navbar-brand fw-normal mb-0 h1 text-white">Sistema de Controle de Livros</span>
                    <button className="btn btn-link p-0"><FiLogOut size={20} color="#ffffffff" /></button>
                </nav>
            </header>

            <div className={`${styles.pxCustom}`}>
                <h4 className={`fw-normal mb-4`}>Books</h4>
                <ul>
                    <li>
                        <strong>Title: </strong><p>O Poder dos Quietos</p>
                        <strong>Author: </strong><p>Susan Cain</p>
                        <strong>Price: </strong><p>R$29,90</p>
                        <strong>Release Date: </strong><p>24/01/2012</p>
                    </li>
                    <button className="btn btn-link">
                        <FiEdit size={16} color="#8a2be2" />
                    </button>
                    <button className="btn btn-link">
                        <FiDelete size={16} color="#ff4e4eff" />
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Book;
