import React from "react";
import styles from './styles.module.css';
import { FiLogOut, FiEdit, FiTrash2 } from 'react-icons/fi'; //Importando o ícone de logout

function Books() {
    return (
        <div className="container-fluid p-0 m-0">
            <header className="mb-5">
                <nav className={`navbar shadow-sm ${styles.pxCustom} ${styles.navbarColor}`}>
                    <span className="navbar-brand fw-normal mb-0 h1 text-white">Sistema de Controle de Livros</span>
                    <button className="btn btn-link p-0"><FiLogOut size={20} color="#ffffffff" /></button>
                </nav>
            </header>

            <div className={`${styles.pxCustom}`}>
                <div className="d-flex align-items-center mb-4">
                    <h4 className="fw-normal m-0">Books</h4>
                    <button className="btn btn-primary shadow-sm ms-auto">
                        Add Book
                    </button>
                </div>
                <table class="table table-hover text-center table-responsive">
                    <thead className={`${styles.tHeaderFormatation}`}>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Author
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Release Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Texto
                            </td>
                            <td>
                                Texto
                            </td>
                            <td>
                                Texto
                            </td>
                            <td>
                                Texto
                            </td>
                            <td>
                                <button className="btn btn-sm"><FiEdit size={16} color="#4c4c4cff" /></button>
                                <button className="btn btn-sm"><FiTrash2 size={16} color="#ff6f6fff" /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Books;
