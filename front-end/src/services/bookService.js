import api from './api';

// Busca livros com paginação e ordem ascendente
export const getBooks = async (accessToken, page = 1, pageSize = 10) => {
    const response = await api.get(`api/Book/v1/asc/${pageSize}/${page}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data.list; // só retorna a lista, componente não precisa saber do resto
};

export const createBook = async (accessToken, bookData) => {
    const response = await api.post('api/book/v1', bookData, {
        headers : {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}

export const deleteBook = async (accessToken, id) => {
    const response = await api.delete(`api/book/v1/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export const editBook = async (accessToken, id, bookData) => {
    const response = await api.put(`api/book/v1`, bookData, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}

export const getBookById = async (accessToken, id) => {
    const response = await api.get(`api/book/v1/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}
