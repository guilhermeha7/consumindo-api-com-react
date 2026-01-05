import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Book from './pages/Book';

//Se o caminho for exatamente "/", mostre/renderize o componente Login
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/book" element={<Book />} />
        </Routes>
    )
}

export default AppRoutes;