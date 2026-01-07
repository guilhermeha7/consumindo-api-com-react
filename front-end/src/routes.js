import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Books from './pages/Books';
import AddBook from './pages/AddBook';

//Se o caminho for exatamente "/", mostre/renderize o componente Login
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/books" element={<Books />} />
            <Route path="/add-book" element={<AddBook />} />
        </Routes>
    )
}

export default AppRoutes;