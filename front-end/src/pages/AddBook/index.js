import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeftCircle } from "react-icons/fi";
import { createBook } from '../../services/bookService';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookSchema } from '../../schemas/bookSchema';
import { useForm } from "react-hook-form";

function AddBook() {

    const navigate = useNavigate();

    //Configuração do React Hook Form com Zod
    const { register, //register: liga o campo ao formulário
        handleSubmit, 
        formState: { errors } } = useForm({
        resolver: zodResolver(bookSchema)
    });

    // Função chamada quando o formulário é válido
    const onSubmit = async (data) => {
        const accessToken = localStorage.getItem('accessToken');

        try {
            await createBook(accessToken, data);
            navigate('/books');
        } catch (error) {
            alert("Error creating book. Please try again.");
            console.log(error.response?.data || error.message);
        }
    };


    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100"> {/*vh-100: faz o container ter a altura da tela, centralizando o conteúdo*/}
            <Link to="/books" className="position-absolute top-0 start-0 m-3">
                <FiArrowLeftCircle size={24} color="#828080ff" />
            </Link>
            <h3 className="fw-normal mb-5 text-center text-primary-color"> Add Book </h3>
            {/* handleSubmit cuida da validação */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Title"
                    className="form-control"
                    {...register("title")}
                />
                <div className="text-error mb-2">{errors.title?.message}</div>

                <input
                    placeholder="Author"
                    className="form-control"
                    {...register("author")}
                />
                <div className="text-error mb-2">{errors.author?.message}</div>

                <input
                    placeholder="Price"
                    className="form-control"
                    type="number"
                    {...register("price", { valueAsNumber: true })}
                />
                <div className="text-error mb-2">{errors.price?.message}</div>

                <input
                    type="date"
                    placeholder="Release Date"
                    className="form-control"
                    {...register("launchDate")}
                />
                <div className="text-error mb-3">{errors.launchDate?.message}</div>

                <button type="submit" className="btn btn-primary mb-4 w-100">Create</button> {/*w-100: faz o elemento ocupar toda a largura disponível do pai*/}
            </form>
        </div>
    )
}

export default AddBook;