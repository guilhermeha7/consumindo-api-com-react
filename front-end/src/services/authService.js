import api from './api';

export const login = async (username, password) => {
    const response = await api.post('api/auth/v1/signin', {
        username,
        password,
    });

    return response;
}

export const logout = async (accessToken) => {
    await api.get('api/auth/v1/revoke', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    });
}