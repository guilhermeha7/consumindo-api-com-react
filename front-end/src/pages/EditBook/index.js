import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeftCircle } from "react-icons/fi";
import { getBookById, editBook } from '../../services/bookService';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema } from '../../schemas/bookSchema';

function EditBook() {

    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');
    const { id } = useParams(); //O React Router passa o id da URL para a variável id

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        resolver: zodResolver(bookSchema),
    });


    useEffect(() => {
        loadBook(id);
    }, [id]);

    async function loadBook(id) {
        try {
            const response = await getBookById(accessToken, id)
            setValue("title", response.title);
            setValue("author", response.author);
            setValue("price", response.price);
            setValue("launchDate", response.launchDate?.split("T")[0]);
        }
        catch (error) {
            alert("Error loading book data. Please try again.");
            navigate('/books');
        }

    }

    async function saveChanges(data) {
        try {
            await editBook(accessToken, id, { id, ...data });
            navigate('/books');
        } catch (error) {
            alert("Error updating book. Please try again.");
            console.log(error.response?.data);
        }
    }



    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100"> {/*vh-100: faz o container ter a altura da tela, centralizando o conteúdo*/}
            <Link to="/books" className="position-absolute top-0 start-0 m-3">
                <FiArrowLeftCircle size={24} color="#828080ff" />
            </Link>
            <h3 className="fw-normal mb-5 text-center text-primary-color"> Update Book </h3>
            <form onSubmit={handleSubmit(saveChanges)}>

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
                    type="number"
                    className="form-control"
                    {...register("price", { valueAsNumber: true })}
                />
                <div className="text-error mb-2">{errors.price?.message}</div>

                <input
                    type="date"
                    className="form-control"
                    {...register("launchDate")}
                />
                <div className="text-error mb-2">{errors.launchDate?.message}</div>

                <button type="submit" className="btn btn-primary mb-4 w-100">
                    Save
                </button>

            </form>
        </div>
    )
}

export default EditBook;