import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import { FiLogOut, FiEdit, FiTrash2 } from 'react-icons/fi'; //Importando o ícone de logout
import { getBooks } from '../../services/bookService';
import { Link, useNavigate } from "react-router-dom";
import { deleteBook } from '../../services/bookService';
import { logout } from '../../services/authService';

function Books() {
    const [books, setBooks] = useState([]);
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const [page, setPage] = useState(1); //Inicialmente vai aparecer apenas a página 1

    //Executa uma requisição para buscar os livros sempre que o accessToken for definido ou mudar
    useEffect(() => {
        const fetchBooks = async () => {
            if (!accessToken) return;
            const list = await getBooks(accessToken, page, 10);
            setBooks(list);
        };
        fetchBooks();
    }, [accessToken]);

    async function fetchMoreBooks() {
        const response = await getBooks(accessToken, page + 1, 10); //Faz uma requisição e pega os livros da próxima página
        setBooks(prevBooks => [...prevBooks, ...response]); //Mostra tanto os livros que já tinha, como os recém buscados
        setPage(page + 1); //Aumenta a página, para que na próxima requisição se pegue os próximos 10 livros
    }

    const handleDelete = async (id) => {
        if (!accessToken) return; // Se não houver token de acesso, não faz nada

        try {
            await deleteBook(accessToken, id);

            // Remove o livro deletado da lista
            setBooks(books => books.filter(book => book.id !== id));
        } catch (error) {
            console.error('Erro ao deletar livro:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await logout(accessToken);
            localStorage.clear();
            navigate('/');
        }
        catch (error) {
            console.log(error.response.data);
            localStorage.clear();
            navigate('/');
        }
    }

    return (
        <div className="container-fluid p-0 m-0">
            <header className="mb-5">
                <nav className={`navbar shadow-sm ${styles.pxCustom} ${styles.navbarColor}`}>
                    <span className="navbar-brand fw-normal mb-0 h1 text-white">Sistema de Controle de Livros</span>
                    <button onClick={handleLogout} className="btn btn-link p-0"><FiLogOut size={20} color="#ffffffff" /></button>
                </nav>
            </header>

            <div className={`${styles.pxCustom}`}>
                <div className="d-flex align-items-center mb-4">
                    <h4 className="fw-normal m-0">Books</h4>
                    <button onClick={() => navigate('/add-book')} className="btn btn-primary shadow-sm ms-auto">
                        Add Book
                    </button>
                </div>
                <table className="table table-hover text-center table-responsive">
                    <thead className={`${styles.tHeaderFormatation}`}>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)} {/*Formata o número para formato moeda BRL */}</td>
                                <td>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))} {/*Formata a data para o formato brasileiro dd/mm/aaaa */}</td>
                                <td><button onClick={() => navigate(`/edit-book/${book.id}`)} className="btn btn-sm"><FiEdit size={16} color="#8a2be2" /></button>
                                    <button onClick={() => handleDelete(book.id)} className="btn btn-sm"><FiTrash2 size={16} color="#ff6f6fff" /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center mb-5"><button className="btn btn-outline-primary" onClick={fetchMoreBooks} type="button">Load More</button></div>
                
            </div>
        </div>
    );
}

export default Books;
