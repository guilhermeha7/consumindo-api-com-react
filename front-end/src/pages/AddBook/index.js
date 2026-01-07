import React from 'react';
import styles from './styles.module.css';
import userIcon from '../../assets/user-icon.png';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from "react-icons/fi";

function AddBook() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100"> {/*vh-100: faz o container ter a altura da tela, centralizando o conteúdo*/}
            <Link to="/books" className="position-absolute top-0 start-0 m-3">
                <FiArrowLeftCircle size={24} color="#828080ff" />
            </Link>
            <h3 className="fw-normal mb-4 text-center text-primary-color"> Add Book </h3>
            <form>
                <input placeholder="Title" className="form-control mb-2" />
                <input placeholder="Author" className="form-control mb-2" />
                <input placeholder="Price" className="form-control mb-2" />
                <input type="date" placeholder="Release Date" className="form-control mb-3" />
                <button type="submit" className="btn btn-primary mb-4 w-100">Create</button> {/*w-100: faz o elemento ocupar toda a largura disponível do pai*/}
            </form>
        </div>
    )
}

export default AddBook;